import React from 'react';
import { CourseTable } from './styles';
import { Spinner } from '../../components/Spinner';

export const CoursesList = ({ courses, loading }) => {
  if (loading) {
    return <Spinner />;
  }

  console.log(courses);

  return (
    <CourseTable>
      <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Instructors</th>
          <th>Terms</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course => (
          <tr key={course.id}>
            <td>{course.code}</td>
            <td>{course.name}</td>
            <td>{course.lectures?.map(section => section.instructors.join(', ')).join(', ')}</td>
            <td>{course.terms}</td>
          </tr>
        ))}
      </tbody>
    </CourseTable>
  );
};
