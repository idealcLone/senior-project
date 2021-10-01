import { Home } from "../pages/Home";
import { Login } from "../auth/Login";
import { SignUp } from "../auth/SignUp";
import { Profile } from "../pages/Profile";
import { FAQ } from "../pages/FAQ";
import { Admin } from "../pages/Admin";
import { CoursesPage } from "../pages/courses/CoursesPage";

export const routes = [
  {
    path: '/',
    name: 'Home Page',
    component: Home,
    protected: false,
  },
  {
    path: '/login',
    name: 'Login Page',
    component: Login,
    protected: false,
  },
  {
    path: '/signup',
    name: 'Sign Up Page',
    component: SignUp,
    protected: false,
  },
  {
    path: '/profile',
    name: 'My Profile',
    component: Profile,
    protected: true,
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ,
    protected: false,
  },
  {
    path: '/admin',
    name: 'Admin Page',
    component: Admin,
    protected: true,
  },
  {
    path: '/courses',
    name: 'Courses',
    component: CoursesPage,
    protected: false,
  }
]