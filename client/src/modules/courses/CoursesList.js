import React from "react";

export const CoursesList = ({ courses }) => {

  return (
    <div className={'course-table'}>
      <div className={'university-table__container container'}>
        <table>
          <thead>
            <tr>
              <th>CODE</th>
              <th>TITLE</th>
              <th>POSSIBLE <br/> INSTRUCTORS</th>
              <th>POSSIBLE <br/> TERMS</th>
              <th>SYLLABUS</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course =>
              <tr key={course.id}>
                <td>{course.code}</td>
                <td>{course.name}</td>
                <td>
                  <ul
                    style={{ listStyle: 'none' }}
                  >{course.instructors.map(instructor => <li key={instructor.id}>{instructor.full_name}</li>)}</ul>
                </td>
                <td>{course.terms.name}</td>
                <td>{course.syllabus ? 'link' : 'no'}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}