import React from "react";
import { Route, Routes } from "react-router-dom";
import { route } from "./Routes";
import { NotFoundPage } from "./screens";

const App = () => {
  return (
    <Routes>
      {route.map((route, index) => {
        return <Route key={index} path={route.path} element={route.element} />;
      })}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
