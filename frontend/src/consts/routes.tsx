import React, { ReactElement } from 'react';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';
import { Courses } from '../pages/Courses';
import { Events } from '../pages/events/Events';
import { Event } from '../pages/events/Event';
import { GPACalculator } from '../pages/GPACalculator';
import { FAQ } from '../pages/FAQ';
import { Delivery } from '../pages/delivery/Delivery';
import { Restaurant } from '../pages/delivery/Restaurant';

type routeType = {
  path: string;
  component: ReactElement;
  name: string;
  protected?: boolean;
};

export const ROUTES: routeType[] = [
  {
    path: '/',
    component: <Home />,
    name: 'NUSH',
  },
  {
    path: '/login',
    component: <Login />,
    name: 'Login',
  },
  {
    path: '/sign-up',
    component: <SignUp />,
    name: 'Sign Up',
  },
  {
    path: '/courses',
    component: <Courses />,
    name: 'Courses',
  },
  {
    path: '/events',
    component: <Events />,
    name: 'Events',
  },
  {
    path: '/events/:id',
    component: <Event />,
    name: 'Event',
  },
  {
    path: '/gpa-calculator',
    component: <GPACalculator />,
    name: 'GPA Calculator',
  },
  {
    path: '/faq',
    component: <FAQ />,
    name: 'FAQ',
  },
  {
    path: '/delivery',
    component: <Delivery />,
    name: 'Delivery',
  },
  {
    path: '/restaurants/:id',
    component: <Restaurant />,
    name: 'Restaurant',
  },
];
