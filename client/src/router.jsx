//react-router-dom
import { Navigate, createBrowserRouter } from "react-router-dom";

//components
import { DefaultLayout, GuestLayout } from "./components";

//views
import { Dashboard, Login, NotFound, Signup, Surveys, SurveyPublicView, SurveyView } from "./views";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Navigate to="/" />,
      },
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/surveys",
        element: <Surveys />,
      },
      {
        path: "/surveys/create",
        element: <SurveyView />,
      },
      {
        path: "/surveys/:id",
        element: <SurveyView />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/survey/public/:slug",
    element: <SurveyPublicView />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
