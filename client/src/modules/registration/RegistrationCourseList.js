import React from 'react';
import { RegistrationCourseTable } from './styles';

export const RegistrationCourseList = ({ courses, selectedCourse, setSelectedCourse }) => {
  return (
    <RegistrationCourseTable>
      <thead>
        <tr>
          <td>Code</td>
          <td>Course title</td>
          <td>ECTS Credits</td>
        </tr>
      </thead>
      <tbody>
        {courses.map(course => (
          <tr
            key={course.id}
            className={course.id === selectedCourse?.id ? 'selected' : ''}
            onClick={() =>
              course.id === selectedCourse?.id
                ? setSelectedCourse(undefined)
                : setSelectedCourse(course)
            }
          >
            <td>{course.code}</td>
            <td>{course.name}</td>
            <td>{course.credits}</td>
          </tr>
        ))}
      </tbody>
    </RegistrationCourseTable>
  );
};
