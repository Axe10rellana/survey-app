//react
import { useEffect, useState } from "react";

//react-router-dom
import { useParams } from "react-router-dom";

//components
import { PublicQuestionView } from "../components";

//axios
import axiosClient from "../axios";

//assets
import loader from "../assets/icons/loader.svg";

const SurveyPublicView = () => {
	//variables
	const answers = {};

	//router variables
	const {slug} = useParams();

	//state variables
	const [survey, setSurvey] = useState({
		questions: [],
	});
	const [surveyFinished, setSurveyFinished] = useState(false);
	const [loading, setLoading] = useState(false);
	const [totalSurveys, setTotalSurveys] = useState([]);

	//useEffect
	useEffect(() => {
		setLoading(true);
		axiosClient.get(`/survey/get-by-slug/${slug}`).then(({data}) => {
			setSurvey(data.data);
			setTotalSurveys(data.data.questions);
			setLoading(false);
		}).catch(() => {
      setLoading(false);
    });
	}, []);

	//functions
	function answerChanged(question, value){
		answers[question.id] = value;
	}

	function onSubmit(e){
		e.preventDefault();
		axiosClient.post(`/survey/${survey.id}/answer`, {
			answers
		}).then((response) => {
			setSurveyFinished(true);
		})
	}

	return(
		<div className="">
			{loading && (
				<div className="flex items-center mt-4 justify-center mb-6">
          <img
            style={{ pointerEvents: "none", userSelect: "none" }}
            src={loader}
            alt="Loading..."
          />
        </div>
			)}
			{!loading && (
				<form
					onSubmit={e => onSubmit(e)}
					className="container mx-auto mt-4"
				>
					<div className="grid grid-cols-6">
						<div className="mr-4">
							<img
								className="select-none pointer-events-none"
								src={survey.image_url}
								alt={survey.title}
							/>
						</div>
						<div className="col-span-5">
							<h1 className="text-lg md:text-3xl mb-3">
								{survey.title}
							</h1>
							<p className="text-sm mb-3">
								Expire Date: {survey.expire_date}
							</p>
							<p className="text-sm mb-3">
								{survey.description}
							</p>
						</div>
					</div>

					{surveyFinished && (
						<div className="py-8 px-6 bg-emerald-500 text-white w-[600px] mx-auto">
							Thank you for participating in the survey
						</div>
					)}
					{!surveyFinished && (
						<>
							<div>
								{survey.questions.map((question, index) => (
									<PublicQuestionView
										key={question.id}
										question={question}
										index={index}
										answerChanged={value => answerChanged(question, value)}
										totalSurveys={totalSurveys}
									/>
								))}
							</div>

							<button
								className="inline-flex mb-4 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								type="submit"
							>
								Submit
							</button>
						</>
					)}
				</form>
			)}
		</div>
	);
};

export default SurveyPublicView;