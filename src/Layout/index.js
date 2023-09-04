import React from "react";
import Header from "./Header";
import Routes from "./Routes";

function Layout() {
  return (
    <div>
      <div className="container-fluid p-4">
        <Header />
        <Routes />
      </div>
    </div>
  );
}

export default Layout;
