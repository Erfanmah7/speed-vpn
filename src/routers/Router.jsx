import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import InstallationGuide from "../pages/InstallationGuide";
import FileList from "../pages/FileList";
import { getProfile } from "../services/user";
import { useQuery } from "@tanstack/react-query";
import VideoPlayer from "../components/VideoPlayer";
import Menu from "../components/Menu";

function Router() {
  const { data, isPending, error } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  console.log("data:", data, "error:", error);

  if (isPending) return <h1>Loading</h1>;

  return (
    <Routes>
      {/* احراز هویت */}
      {/* <Route
          path="/auth"
          element={data ? <Navigate to="/wallet" /> : <Auth />}
        /> */}
      {/* دسترسی تستی */}
      {/* <Route
          path="/wallet"
          element={data ? <Wallet /> : <Navigate to="/auth" />}
        /> */}
      {/* وقتی ادمین وارد شد */}
      {/* <Route
          path="/admin"
          element={
            data && data.data.role === "ADMIN" ? <Admin /> : <Navigate to="/" />
          }
        /> */}
      <Route path="/" element={<Home />} />
      <Route path="videoplayer" element={<VideoPlayer />} />
      <Route path="menu" element={<Menu />} />
      <Route path="/installationguide" element={<InstallationGuide />} />
      <Route path="/filelist" element={<FileList />} />
    </Routes>
  );
}

export default Router;
