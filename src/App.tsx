import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import BrowseInfo from "./pages/browseInfo";
import Login from "./pages/login";
import NotFound from "./pages/notFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/browse" element={<BrowseInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
