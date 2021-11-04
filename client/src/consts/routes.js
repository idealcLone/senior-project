import { Home } from "../pages/Home";
import { Login } from "../modules/user/Login";
import { SignUp } from "../modules/user/SignUp";
import { Profile } from "../modules/user/Profile";
import { FAQ } from "../pages/FAQ";
import { AdminPage } from "../modules/admin/AdminPage";
import { CoursesPage } from "../modules/courses/CoursesPage";
import { UserPage } from "../modules/admin/pages/UserPage";

export const routes = [
  {
    path: '/',
    name: 'Home Page',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login Page',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Sign Up Page',
    component: SignUp,
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
  },
  {
    path: '/admin',
    name: 'Admin Page',
    component: AdminPage,
    adminRoute: true,
  },
  {
    path: '/courses',
    name: 'Courses',
    component: CoursesPage,
  },
  {
    path: '/admin/users/:id',
    name: 'User',
    component: UserPage,
    adminRoute: true,
  }
]