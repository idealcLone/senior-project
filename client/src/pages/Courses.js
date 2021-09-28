import React from 'react'
import api from "../utils/api";

export const Courses = () => {
  const [courses, setCourses] = React.useState([])

  React.useEffect(() => {
    api.get('/course/all/')
      .then(res => setCourses(res.data))
  }, [])

  return (
    <div className={'course-table'}>
      <div className={'course-table__container container'}>
        <table>
          <tr>
            <th>CODE</th>
            <th>TITLE</th>
            <th>POSSIBLE <br/> INSTRUCTORS</th>
            <th>POSSIBLE <br/> TERMS</th>
            <th>SYLLABUS</th>
          </tr>
          {courses.map(course =>
            <tr>
              <td>{course.code}</td>
              <td>{course.name}</td>
              <td>{course.professor_name}</td>
              <td>{course.days}</td>
              <td>{course.syllabus}</td>
            </tr>
          )}
        </table>
      </div>
    </div>
  )
}