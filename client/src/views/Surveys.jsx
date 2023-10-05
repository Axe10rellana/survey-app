//react
import { useEffect, useState } from "react";

//heroicons
import { PlusCircleIcon } from "@heroicons/react/24/outline";

//sweetalert2
import Swal from "sweetalert2";

//components
import { PageComponent, PaginationLinks, SurveyListItem, TButton } from "../components";

//context
import { useStateContext } from "../contexts/ContextProvider";

//axios
import axiosClient from "../axios";

//assets
import loader from "../assets/icons/loader.svg";

const Surveys = () => {
  //context variables
  const { showToast } = useStateContext();

  //state variables
  const [surveys, setSurveys] = useState([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(false);

  //functions
  const onDeleteClick = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete this survey?",
      text: "You will not be able to undo this action",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosClient.delete(`/survey/${id}`).then(() => {
          getSurveys();
          showToast('The survey was deleted');
        });
      }
    });
  };

  const onPageClick = (link) => {
    getSurveys(link.url);
  }

  const getSurveys = (url) => {
    url = url || '/survey';
    setLoading(true);
    axiosClient.get(url).then(({data}) => {
      setSurveys(data.data);
      setMeta(data.meta);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  };

  //useEffect
  useEffect(() => {
    getSurveys();
  }, []);

  return (
    <PageComponent
      title="Surveys"
      buttons={
        <TButton color="green" to="/surveys/create">
          <PlusCircleIcon className="w-6 h-6 mr-2" />
          Create new
        </TButton>
      }
    >
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
        <div>
          {surveys.length === 0 && (
            <div className="py-8 text-center text-white">
              You don't have surveys created
            </div>
          )}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 mb-6">
            {surveys.map((survey) => (
              <SurveyListItem
                survey={survey}
                onDeleteClick={onDeleteClick}
                key={survey.id}
              />
            ))}
          </div>
          {surveys.length > 0 && <PaginationLinks meta={meta} onPageClick={onPageClick} />}
        </div>
      )}
    </PageComponent>
  );
};

export default Surveys;
