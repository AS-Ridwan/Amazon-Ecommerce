import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import notFound from "../../images/not-found.gif";
const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center py-5">
      <h1 className="notfound-heading">404</h1>
      <h2>Page Not Found</h2>
      <img className="w-100 h-auto" src={notFound} alt="Page Not Found" />
      <button type="button" className="btn notfound-btn btn-success">
        <Link to="/home">Back To Home</Link>
      </button>
    </div>
  );
};

export default NotFound;
