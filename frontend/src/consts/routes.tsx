import React, { ReactElement } from "react";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Courses } from "../pages/Courses";
import { Events } from "../pages/events/Events";
import { Event } from "../pages/events/Event";

type routeType = {
  path: string;
  component: ReactElement;
  protected?: boolean;
};

export const ROUTES: routeType[] = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/sign-up",
    component: <SignUp />,
  },
  {
    path: "/courses",
    component: <Courses />,
  },
  {
    path: "/events",
    component: <Events />,
  },
  {
    path: "/events/:id",
    component: <Event />,
  },
];
