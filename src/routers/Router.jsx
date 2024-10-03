import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import InstallationGuide from "../pages/InstallationGuide";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/installationguide" element={<InstallationGuide />} />
    </Routes>
  );
}

export default Router;
