import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container">
      <h1>Not Found</h1>
      <p>This page does not exist.</p>
      <p>Please return to the <Link to="/">Home page</Link>.</p>
    </div>
  );
}

export default NotFound;
