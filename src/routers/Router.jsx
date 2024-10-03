import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import InstallationGuide from "../pages/InstallationGuide";
import FileList from "../pages/FileList";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/installationguide" element={<InstallationGuide />} />
      <Route path="/filelist" element={<FileList />} />
    </Routes>
  );
}

export default Router;
