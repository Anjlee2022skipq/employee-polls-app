import React from "react";
import { Link } from "react-router-dom";
var ErrorPageImg = require("./../util/assets/Error.png");

function ErrorPage() {
  return (
    <div className="text-center row d-flex justify-content-center m-3">
      <div>
        <img src={ErrorPageImg} alt="errorImg" />
        <p className="error-txt">
          Sorry, The address doesn't exist.. <Link to="/">back to Home</Link>
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
