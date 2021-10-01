import React from 'react'
import api from "../../utils/api"
import {CoursesList} from "./CoursesList";

export const CoursesPage = () => {
  const [courses, setCourses] = React.useState([])

  React.useEffect(() => {
    api.get('/course/all/')
      .then(res => setCourses(res.data))
  }, [])

  return (
    <div>
      <div className="filters course-filters">
        <div className="course-filters__container filters__container container">
          <label htmlFor="search">
            <input type="search" name="course-search" id="course-search" placeholder="Search Courses e.g. PLS 101"/>
          </label>
          <label htmlFor="schools">
            <select name="schools" id="schools">
              <option value="Choose school" disabled selected className="disabled">Choose school</option>
              <option value="All-schools">All schools</option>
              <option value="SEDS">SEDS</option>
              <option value="SHSS">SHSS</option>
              <option value="SMG">SMG</option>
              <option value="SOM">SOM</option>
              <option value="GSB">GSB</option>
            </select>
          </label>
          <label htmlFor="majors">
            <select name="majors" id="majors">
              <option value="Choose major" disabled selected className="disabled">Choose major</option>
              <option value="All-majors">All majors</option>
              <option value="PSIR">PSIR</option>
              <option value="CS">CS</option>
              <option value="MATH">MATH</option>
              <option value="BIO">BIO</option>
              <option value="CHEM">CHEM</option>
            </select>
          </label>
          <label htmlFor="levels">
            <select name="levels" id="levels">
              <option value="Choose level" disabled selected className="disabled">Choose level</option>
              <option value="All-levels">All levels</option>
              <option value="1xx">1xx</option>
              <option value="2xx">2xx</option>
              <option value="3xx">3xx</option>
              <option value="4xx">4xx</option>
              <option value="5xx">5xx</option>
            </select>
          </label>
        </div>
      </div>
      <CoursesList courses={courses}/>
    </div>
  )
}