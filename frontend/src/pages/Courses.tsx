import React from 'react';
import { ICourse, IInstructor } from '../types';

import styles from './Courses.module.scss';
import { SearchBar } from '../components/SearchBar';

const TABLE_HEADERS = ['Code', 'Name', 'Instructors', 'Terms', 'Syllabus'];

const data: ICourse[] = [
  {
    id: 1,
    code: 'CSCI151',
    name: 'Introduction to Programming',
    school: 'SEDS',
    instructors: [1, 2, 3, 4],
    terms: 'Fall, Spring',
    days: 'MWF',
    duration: 50,
    start_time: '09:00',
  },
  {
    id: 2,
    code: 'CSCI151',
    name: 'Introduction to Programming',
    school: 'SEDS',
    instructors: [1, 2, 3, 4],
    terms: 'Fall, Spring',
    days: 'MWF',
    duration: 50,
    start_time: '09:00',
  },
  {
    id: 3,
    code: 'CSCI151',
    name: 'Introduction to Programming',
    school: 'SEDS',
    instructors: [1, 2, 3, 4],
    terms: 'Fall, Spring',
    days: 'MWF',
    duration: 50,
    start_time: '09:00',
  },
  {
    id: 4,
    code: 'CSCI151',
    name: 'Introduction to Programming',
    school: 'SEDS',
    instructors: [1, 2, 3, 4],
    terms: 'Fall, Spring',
    days: 'MWF',
    duration: 50,
    start_time: '09:00',
  },
  {
    id: 5,
    code: 'CSCI151',
    name: 'Introduction to Programming',
    school: 'SEDS',
    instructors: [1, 2, 3, 4],
    terms: 'Fall, Spring',
    days: 'MWF',
    duration: 50,
    start_time: '09:00',
  },
  {
    id: 6,
    code: 'BIOL101',
    name: 'Biology',
    school: 'SEDS',
    instructors: [1, 2, 3, 4],
    terms: 'Fall, Spring',
    days: 'MWF',
    duration: 50,
    start_time: '09:00',
  },
  {
    id: 7,
    code: 'PLS101',
    name: 'Politics',
    school: 'SEDS',
    instructors: [1, 2, 3, 4],
    terms: 'Fall, Spring',
    days: 'MWF',
    duration: 50,
    start_time: '09:00',
  },
  {
    id: 8,
    code: 'CHEM101',
    name: 'Chemistry',
    school: 'SEDS',
    instructors: [1, 2, 3, 4],
    terms: 'Fall, Spring',
    days: 'MWF',
    duration: 50,
    start_time: '09:00',
  },
];

export const Courses: React.FC = () => {
  const [courses, setCourses] = React.useState<ICourse[]>([]);
  const [filtered, setFiltered] = React.useState<ICourse[]>([]);

  const getCourses = React.useCallback(() => {
    setCourses(data);
    setFiltered(data);
  }, []);

  React.useEffect(() => {
    getCourses();
    document.title = 'Courses';
  }, []);

  const handleShowButton = () => {
    getCourses();
  };

  return (
    <>
      <div className={styles.filters}>
        {courses.length > 0 && (
          <SearchBar data={courses} setData={setFiltered} fields={['code', 'name']} />
        )}
        <select name="major" id="major" placeholder="Choose the Major">
          <option value="CSCI">Computer Science</option>
          <option value="MATH">Mathematics</option>
          <option value="PHYS">Physics</option>
        </select>
        <select name="level" id="level" placeholder="Choose the level">
          {[1, 2, 3, 4, 5].map(level => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
        <button onClick={handleShowButton}>Show ALL Courses</button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            {TABLE_HEADERS.map(th => (
              <th key={th}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filtered.map(course => (
            <tr key={course.id}>
              <td>{course.code}</td>
              <td>{course.name}</td>
              <td>{course.instructors.join(', ')}</td>
              <td>{course.terms}</td>
              <td>None</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
