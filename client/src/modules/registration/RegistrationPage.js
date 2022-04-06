import React, { useRef } from 'react';
import { CourseRegistrationFilters, FilterResults, UpperRegistrationPage } from './styles';
import { DAYS, INSTRUCTORS, MAJORS, SCHOOLS } from '../../consts/data';
import { RegistrationCourseList } from './RegistrationCourseList';
import { SelectedCourse } from './SelectedCourse';
import { useHistory } from 'react-router';
import api from '../../utils/api';

const coursesData = [
  {
    id: 1,
    code: 'CSCI151',
    name: 'Introduction to Programming',
    credits: 8,
    note: 'Registration for this course is not available',
  },
  {
    id: 2,
    code: 'CSCI152',
    name: 'Data Structures',
    credits: 8,
    note: 'Registration for this course is not available',
  },
  {
    id: 3,
    code: 'CSCI231',
    name: 'Computer Systems and Organization',
    credits: 6,
    note: 'Registration for this course is not available',
  },
  {
    id: 4,
    code: 'CSCI235',
    name: 'Programming Languages',
    credits: 6,
    note: 'Registration for this course is not available',
  },
  {
    id: 5,
    code: 'CSCI270',
    name: 'Algorithms',
    credits: 6,
    note: 'Registration for this course is not available',
  },
  {
    id: 6,
    code: 'CSCI245',
    name: 'System Analysis and Design',
    credits: 6,
    note: 'Registration for this course is not available',
  },
];

export const RegistrationPage = () => {
  const history = useHistory();

  const [school, setSchool] = React.useState('');
  const [instructor, setInstructor] = React.useState('');
  const [major, setMajor] = React.useState('');
  const [days, setDays] = React.useState([false, false, false, false, false]);
  const [searchText, setSearchText] = React.useState('');
  const [selectedCourse, setSelectedCourse] = React.useState();

  const [courses, setCourses] = React.useState([]);

  const getCourses = React.useCallback(() => {
    api
      .get('/courses/all/')
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
    // setCourses(coursesData);
  }, []);

  React.useEffect(() => {
    getCourses();
  }, []);

  const resetFilters = () => {
    setSchool('');
    setInstructor('');
    setMajor('');
    setDays([false, false, false, false, false]);
    setSearchText('');
  };

  const showCourses = () => {};

  const goToSelectedCourses = () => {
    history.push('/registration/selected');
  };

  return (
    <div>
      <UpperRegistrationPage>
        <CourseRegistrationFilters>
          <div>
            <div className="selects">
              <div>
                <label htmlFor="school">School: </label>
                <select
                  name="school"
                  id="school"
                  value={school}
                  onChange={e => setSchool(e.target.value)}
                >
                  {SCHOOLS.map(school => (
                    <option key={school} value={school}>
                      {school}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="instructor">Instructor: </label>
                <select
                  name="instructor"
                  id="instructor"
                  value={instructor}
                  onChange={e => setInstructor(e.target.value)}
                >
                  {INSTRUCTORS.map(instructor => (
                    <option key={instructor} value={instructor}>
                      {instructor}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="major">Major</label>
                <select
                  name="major"
                  id="major"
                  value={major}
                  onChange={e => setMajor(e.target.value)}
                >
                  {MAJORS.map(major => (
                    <option key={major} value={major}>
                      {major}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="search">
              <label htmlFor="search">Course title/code: </label>
              <input
                type="text"
                name="search"
                id="search"
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
              />
            </div>
          </div>
          <div className="checkboxes">
            <div>Class Meetings: </div>
            {DAYS.map((day, index) => (
              <div key={index} className="day-checkbox">
                <label htmlFor={day}>{day}</label>
                <input
                  id={day}
                  type="checkbox"
                  name="days"
                  value={days[index]}
                  onChange={e =>
                    setDays([...days.slice(0, index), !days[index], ...days.slice(index + 1)])
                  }
                />
              </div>
            ))}
          </div>
          <div className="buttons">
            <button onClick={showCourses}>Show courses</button>
            <button onClick={resetFilters}>Reset filters</button>
          </div>
        </CourseRegistrationFilters>
        <div>
          <button onClick={goToSelectedCourses}>Go to selected courses</button>
        </div>
      </UpperRegistrationPage>
      <FilterResults>
        <RegistrationCourseList
          courses={courses}
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
        />
        <SelectedCourse selectedCourse={selectedCourse} />
      </FilterResults>
    </div>
  );
};
