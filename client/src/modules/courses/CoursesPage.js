import React from 'react'
import api from "../../utils/api"
import { CoursesList } from "./CoursesList";
import { SearchBar } from "../../styles";
import { Filters, Select, ShowButton } from "./styles";
import { LEVELS, MAJORS } from "../../consts/data";

export const CoursesPage = () => {
  const [loading, setLoading] = React.useState(false)
  const [showCourses, setShowCourses] = React.useState(false)
  const [courses, setCourses] = React.useState([])
  const [select, setSelect] = React.useState({
    major: '',
    level: ''
  })

  React.useEffect(() => {
    if (showCourses) {
      setLoading(true)
      api
        .get('/courses/all/')
        .then(res => setCourses(res.data))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }
  }, [showCourses])

  const onSelectChange = (e) => {
    const { name, value } = e.target

    setSelect({
      ...select,
      [name]: value
    })
  }

  return (
    <>
      <Filters>
        <SearchBar placeholder={'Search for a course'}/>
        <div className="select-group">
          <Select name={'major'} value={select.major} onChange={onSelectChange}>
            <option value="">Choose your major</option>
            {
              MAJORS.map(major =>
                <option key={major} value={major}>{major}</option>
              )
            }
          </Select>
          <Select name={'level'} value={select.level} onChange={onSelectChange}>
            <option value="">Choose the level</option>
            {
              LEVELS.map(level =>
                <option key={level} value={level}>{level}</option>
              )
            }
          </Select>
        </div>
      </Filters>
      {showCourses ?
        <CoursesList courses={courses} loading={loading}/> :
        <ShowButton onClick={() => setShowCourses(true)}>Show All Courses</ShowButton>
      }
    </>
  )
}