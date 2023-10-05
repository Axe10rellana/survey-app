//react-router-dom
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="title-not-found">404 - Page not found</h1>
      <p className="message-not-found">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link className="btn-not-found" to="/">
        Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
