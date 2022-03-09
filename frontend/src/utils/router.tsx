import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Navbar } from "../components/Navbar";
import { SignUp } from "../pages/SignUp";
import { Courses } from "../pages/Courses";
import { Events } from "../pages/Events";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
};
