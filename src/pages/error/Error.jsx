import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import "./error.scss";
const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="error-container">
      <div className="err">
        <h3 className="title">
          {error.statusText} {error.status}
        </h3>
        <p className="message">{error.error.message || error.message}</p>
        <button
          className="go-back"
          onClick={() => navigate("/", { replace: true })}
        >
          back
        </button>
      </div>
    </div>
  );
};

export default Error;
