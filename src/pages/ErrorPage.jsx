import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="error-page">
      <h1>404 - Page Not Found</h1>
      <p>{error && error.data}</p>
      <NavLink to="/" className="btn btn-primary">
        Go to Home{" "}
      </NavLink>
    </div>
  );
};
