import React from "react";
import { useRouteError } from "react-router-dom";
import "./error.scss";
const Error = () => {
  const error = useRouteError();
  console.log(error.prototype);
  return (
    <div className="error-container">
      <div className="err">
        <h3 className="title">
          {error.statusText} {error.status}
        </h3>
        <p className="message">{error.error.message || error.message}</p>
      </div>
    </div>
  );
};

export default Error;
