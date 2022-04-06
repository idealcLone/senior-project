import { Home } from '../pages/Home';
import { Login } from '../modules/user/Login';
import { SignUp } from '../modules/user/SignUp';
import { Profile } from '../modules/user/Profile';
import { FAQ } from '../pages/FAQ';
import { AdminPage } from '../modules/admin/AdminPage';
import { CoursesPage } from '../modules/courses/CoursesPage';
import { UserDialog } from '../modules/admin/dialogs/UserDialog';
import { CourseDialog } from '../modules/admin/dialogs/CourseDialog';
import { EventsPage } from '../modules/events/EventsPage';
import { EventPage } from '../modules/events/EventPage';
import { MyCalendar } from '../modules/user/MyCalendar';
import { GPACalculator } from '../components/GPACalculator';
import DeliveryPage from '../modules/delivery/DeliveryPage';
import CafePage from '../modules/delivery/CafePage';
import Checkout from '../modules/delivery/Checkout';
import { RegistrationPage } from '../modules/registration/RegistrationPage';

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
    path: '/gpa-calculator',
    name: 'GPA Calculator',
    component: GPACalculator,
  },
  {
    path: '/calendar',
    name: 'My Calendar',
    component: MyCalendar,
    protected: true,
  },
  {
    path: '/registration',
    name: 'Registration Training',
    component: RegistrationPage,
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
    path: '/events',
    name: 'Events',
    component: EventsPage,
  },
  {
    path: '/events/:id',
    name: 'Event',
    component: EventPage,
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: DeliveryPage,
  },
  {
    path: '/delivery/checkout',
    name: 'Checkout',
    component: Checkout,
  },
  {
    path: '/delivery/:id',
    name: 'Cafe',
    component: CafePage,
  },
];
