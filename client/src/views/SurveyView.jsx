//react
import { useState, useEffect } from "react";

//react-router-dom
import { useNavigate, useParams } from "react-router-dom";

//uuidv4
import { v4 as uuidv4 } from "uuid";

//heroicons
import { LinkIcon, PhotoIcon } from "@heroicons/react/24/outline";

//components
import { PageComponent, SurveyQuestions, TButton } from "../components";

//context
import { useStateContext } from "../contexts/ContextProvider";

//axios
import axiosClient from "../axios";

//assets
import loader from "../assets/icons/loader.svg";

const SurveyView = () => {
  //context variables
  const { showToast } = useStateContext();

  //router variables
  const navigate = useNavigate();
  const { id } = useParams();

  //state variables
  const [survey, setSurvey] = useState({
    title: "",
    slug: "",
    status: false,
    description: "",
    image: null,
    image_url: null,
    expire_date: "",
    questions: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //functions
  const onImageChoose = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setSurvey({
        ...survey,
        image: file,
        image_url: reader.result,
      });

      e.target.value = "";
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = { ...survey };
    if(payload.image){
      payload.image = payload.image_url;
    }
    delete payload.image_url;
    let res = null;
    if(id){
      res = axiosClient.put(`/survey/${id}`, payload)
    }else{
      res = axiosClient.post('/survey', payload)
    }

    res.then((res) => {
      navigate('/surveys');
      if(id){
        showToast("The survey was updated");
      }else{
        showToast("The survey was created");
      }
    }).catch(err => {
      if(err && err.response){
        setError(err.response.data.message);
      }
    });
  };

  function onQuestionsUpdate(questions){
    setSurvey({
      ...survey,
      questions
    });
  };

  //useEffect
  useEffect(() => {
    if(id){
      setLoading(true);
      axiosClient.get(`/survey/${id}`).then(({data}) => {
        setSurvey(data.data);
        setLoading(false);
      }).catch(() => {
      setLoading(false);
      });
    }
  }, []);

  return (
    <PageComponent title={!id ? 'Create new Survey' : 'Update Survey'} buttons={
      <div className="flex gap-2">
        {id && (
          <>
            <TButton color="green" href={`/survey/public/${survey.slug}`}>
              <LinkIcon className="h-4 w-4 mr-2" />
              Public Link
            </TButton>
          </>
        )}
      </div>
    }>
      {loading && (
        <div className="flex items-center justify-center mb-6">
          <img
            style={{ pointerEvents: "none", userSelect: "none" }}
            src={loader}
            alt="Loading..."
          />
        </div>
      )}
      {!loading && (
        <form action="#" method="POST" onSubmit={onSubmit} autoComplete="off">
          <div className="shadow text-gray-700 sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
            { error && (
              <div className="bg-red-500 text-white py-3 px-3">
                {error}
              </div>
              )
            }
              {/*Image*/}
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="photo">
                  Photo
                </label>
                <div className="mt-1 flex items-center">
                  {survey.image_url && (
                    <img
                      className="w-32 h-32 object-cover select-none pointer-events-none"
                      src={survey.image_url}
                      alt="survey-image"
                    />
                  )}
                  {!survey.image_url && (
                    <span className="flex justify-center items-center text-gray-400 h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                      <PhotoIcon className="w-8 h-8" />
                    </span>
                  )}
                  <button
                    className="relative ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    type="button"
                  >
                    <input
                      className="absolute left-0 top-0 right-0 bottom-0 opacity-0"
                      type="file"
                      id="photo"
                      onChange={onImageChoose}
                    />
                    Change
                  </button>
                </div>
              </div>
              {/*Image*/}

              {/*Title*/}
              <div className="col-span-6 sm:col-span-3">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="title"
                >
                  Survey Title
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  type="text"
                  name="title"
                  id="title"
                  value={survey.title}
                  onChange={(e) =>
                    setSurvey({ ...survey, title: e.target.value })
                  }
                  placeholder="Survey Title"
                />
              </div>
              {/*Title*/}

              {/*Description*/}
              <div className="col-span-6 sm:col-span-3">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm resize-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  name="description"
                  id="description"
                  value={survey.description}
                  onChange={(e) =>
                    setSurvey({ ...survey, description: e.target.value })
                  }
                  placeholder="Describe your survey"
                ></textarea>
              </div>
              {/*Description*/}

              {/*Expire Date*/}
              <div className="col-span-6 sm:col-span-3">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="expire_date"
                >
                  Expire Date
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  type="date"
                  name="expire_date"
                  id="expire_date"
                  value={survey.expire_date}
                  onChange={(e) =>
                    setSurvey({ ...survey, expire_date: e.target.value })
                  }
                />
              </div>
              {/*Expire Date*/}

              {/*Active*/}
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="status"
                    name="status"
                    type="checkbox"
                    checked={survey.status}
                    onChange={(e) =>
                      setSurvey({ ...survey, status: e.target.checked })
                    }
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="status"
                    className="font-medium text-gray-700"
                  >
                    Active
                  </label>
                  <p className="text-gray-500">
                    Whether to make survey publicly available
                  </p>
                </div>
              </div>
              {/*Active*/}

              <SurveyQuestions questions={survey.questions} onQuestionsUpdate={onQuestionsUpdate} />
            </div>

            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <TButton>{!id ? 'Create' : 'Update'}</TButton>
            </div>
          </div>
        </form>
      )}
    </PageComponent>
  );
};

export default SurveyView;
