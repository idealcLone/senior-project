export interface IUser {
  id: number;
  email: string;
  major: string;
  is_club_leader: boolean;
  is_admin: boolean;
}

export interface IInstructor {
  id: number;
  name: string;
  school: string;
}

export interface ICourse {
  id: number;
  code: string;
  name: string;
  school: string;
  instructors: IInstructor[] | number[];
  terms: string;
  days: string;
  duration: number;
  start_time: string;
}

export interface IClub {
  name: string;
  leader: IUser | number;
}

export interface IEvent {
  id: number;
  name: string;
  description: string;
  start_time: string;
  start_date: string;
  location: string;
  registration_link: string;
  additional_info: string;
  club: IClub;
  image: string;
}

export interface IDeadline {
  id: number;
  name: string;
  description: string;
  finish_time: string;
  is_active: boolean;
  student: IUser;
}

export interface IFAQ {
  id: number;
  question: string;
  answer: string;
}
