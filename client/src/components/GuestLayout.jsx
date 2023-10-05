//react-router-dom
import { Navigate, Outlet } from "react-router-dom";

//context
import { useStateContext } from "../contexts/ContextProvider";

const GuestLayout = () => {
  //context variables
  const { userToken } = useStateContext();

  //validations
  if (userToken) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto select-none pointer-events-none"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default GuestLayout;
