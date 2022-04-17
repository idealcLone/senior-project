import React, { useRef } from 'react';
import { CourseRegistrationFilters, FilterResults, UpperRegistrationPage } from './styles';
import { DAYS, INSTRUCTORS, MAJORS, SCHOOLS } from '../../consts/data';
import { RegistrationCourseList } from './RegistrationCourseList';
import { SelectedCourse } from './SelectedCourse';
import { useHistory } from 'react-router';
import api from '../../utils/api';
import { getDayLetter } from '../../utils/functions';

export const RegistrationPage = () => {
  const history = useHistory();

  const [school, setSchool] = React.useState('');
  const [instructor, setInstructor] = React.useState('');
  const [major, setMajor] = React.useState('');
  const [days, setDays] = React.useState([false, false, false, false, false]);
  const [searchText, setSearchText] = React.useState('');
  const [selectedCourse, setSelectedCourse] = React.useState();

  const [instructors, setInstructors] = React.useState([]);
  const [courses, setCourses] = React.useState([]);
  const [filtered, setFiltered] = React.useState([]);

  const getCourses = React.useCallback(() => {
    api
      .get('/courses/all/')
      .then(res => {
        setCourses(res.data);
        setFiltered(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const getInstructors = React.useCallback(() => {
    api
      .get('/instructors/all/')
      .then(res => setInstructors(res.data))
      .catch(err => console.log(err));
  }, []);

  React.useEffect(() => {
    getInstructors();
  }, [getInstructors]);

  React.useEffect(() => {
    getCourses();
  }, [getCourses]);

  const resetFilters = () => {
    setSchool('');
    setInstructor('');
    setMajor('');
    setDays([false, false, false, false, false]);
    setSearchText('');
    setFiltered(courses);
  };

  const showCourses = () => {
    let newCourses = courses;

    if (school) {
      newCourses = newCourses.filter(course => course.school === school);
    }

    if (instructor) {
      newCourses = newCourses.filter(
        course =>
          course.lectures.some(c => c.instructors.includes(instructor)) ||
          course.recitations.some(r => r.instructors.includes(instructor)) ||
          course.labs.some(l => l.instructors.includes(instructor))
      );
    }

    if (days.some(day => day === true)) {
      const stringedDays = days
        .map((day, index) => (day === true ? getDayLetter(index) : ''))
        .join('');
      newCourses = newCourses.filter(
        course =>
          course.lectures.some(c => c.days === stringedDays) ||
          course.recitations.some(r => r.days === stringedDays) ||
          course.labs.some(l => l.days === stringedDays)
      );
    }

    if (searchText) {
      newCourses = newCourses.filter(
        course =>
          course.name.toLowerCase().includes(searchText.toLowerCase()) ||
          course.code.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    setFiltered(newCourses);
  };

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
                  <option value="">Select School</option>
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
                  <option value="">Select Instructor</option>
                  {instructors.map(instructor => (
                    <option key={instructor.name} value={instructor.name}>
                      {instructor.name}
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
                  <option value="">Select Major</option>
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
                placeholder="Code/Name of the Course"
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
            {days.map((day, index) => (
              <div key={index} className="day-checkbox">
                <label htmlFor={index}>{getDayLetter(index)}</label>
                <input
                  id={index}
                  type="checkbox"
                  name="days"
                  checked={days[index]}
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
        <div>
          <RegistrationCourseList
            courses={filtered}
            selectedCourse={selectedCourse}
            setSelectedCourse={setSelectedCourse}
          />
        </div>
        {selectedCourse && <SelectedCourse selectedCourse={selectedCourse} />}
      </FilterResults>
    </div>
  );
};
