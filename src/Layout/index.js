import React from "react";
import Header from "./Header";
import Routes from "./Routes";

function Layout() {
  return (
    <>
      <div className="container">
        <Header />
        <Routes />
      </div>
    </>
  );
}

export default Layout;
