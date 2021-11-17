import React from "react";
import { CourseTable } from "./styles";
import { Spinner } from "../../components/Spinner";

export const CoursesList = ({ courses, loading }) => {

  if (loading) {
    return <Spinner/>
  }

  return (
    <CourseTable>
      <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Instructors</th>
          <th>Terms</th>
          <th>Week Days</th>
          <th>Start Time</th>
        </tr>
      </thead>
      <tbody>
        {
          courses.map(course =>
            <tr key={course.id}>
              <td>{course.code}</td>
              <td>{course.name}</td>
              <td>{course.instructors.join(', ')}</td>
              <td>{course.terms}</td>
              <td>{course.days}</td>
              <td>{course.start_time}</td>
            </tr>
          )
        }
      </tbody>
    </CourseTable>
  )
}