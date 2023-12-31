const PublicQuestionView = ({question, index, answerChanged, totalSurveys}) => {
	//variables
	let selectedOptions = [];

	//function
	function onCheckboxChange(option, e){
		if(e.target.checked){
			selectedOptions.push(option.text);
		}else{
			selectedOptions = selectedOptions.filter(op => op !== option.text);
		}

		answerChanged(selectedOptions);
	}

	return(
		<>
			<fieldset className="text-white mb-4">
				<div>
					<legend className="text-base font-medium text-gray-900">
						{index + 1}. {question.question}
					</legend>
					<p className="text-sm">{question.description}</p>
				</div>

				<div className="mt-3">
					{question.type === "select" && (
						<div>
							<select
								onChange={e => answerChanged(e.target.value)}
								className="mt-1 text-gray-700 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							>
								<option value="">Please Select</option>
								{question.data.options.map((option) => (
									<option key={option.uuid} value={option.text}>
										{option.text}
									</option>
								))}
							</select>
						</div>
					)}

					{question.type === "radio" && (
						<div>
							{question.data.options.map((option) => (
								<div className="flex items-center" key={option.uuid}>
									<input
										id={option.uuid}
										name={`question${question.uuid}`}
										value={option.text}
										onChange={e => answerChanged(e.target.value)}
										type="radio"
										className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
									/>
									<label
										htmlFor={option.uuid}
										className="ml-3 block text-sm font-medium"
									>
										{option.text}										
									</label>
								</div>
							))}
						</div>
					)}

					{question.type === "checkbox" && (
						<div>
							{question.data.options.map((option) => (
								<div key={option.uuid} className="flex items-center">
									<input
										id={option.uuid}
										onChange={e => onCheckboxChange(option, e)}
										type="checkbox"
										className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
								 	/>
								 <label
								 		htmlFor={option.uuid}
								 		className="ml-3 block text-sm font-medium"
								 	>
								 	{option.text}
								 </label>
								</div>
							))}
						</div>
					)}

					{question.type === "text" && (
						<div>
							<input
								type="text"
								className="mt-1 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
							/>
						</div>
					)}

					{question.type === "textarea" && (
						<div>
							<textarea
								className="resize-none mt-1 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
							></textarea>
						</div>
					)}
				</div>
			</fieldset>
			{totalSurveys.length - 1 > index && (
				<hr className="mb-4 border border-gray-700" />
			)}
		</>
	);
};

export default PublicQuestionView;