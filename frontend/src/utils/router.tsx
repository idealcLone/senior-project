import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { ROUTES } from "../consts/routes";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
