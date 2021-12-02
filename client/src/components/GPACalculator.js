import React from "react";
import { GRADES } from "../consts/data";
import { Calculator } from "./styles";

const COURSE_INIT = {
  id: 0,
  name: '',
  credits: 0,
  grade: 4,
}

const CUSTOM_DATA_INIT = {
  id: 0,
  name: '',
  credits: 0,
  total: 0,
}

export const GPACalculator = () => {
  const [courses, setCourses] = React.useState(JSON.parse(localStorage.getItem('courses')) || [COURSE_INIT])
  const [gpa, setGpa] = React.useState(0)
  const [customData, setCustomData] = React.useState(JSON.parse(localStorage.getItem('customData')) || [])
  const [courseCount, setCourseCount] = React.useState(0)
  const [customDataCount, setCustomDataCount] = React.useState(0)

  const onCalculate = () => {
    let totalPoints = 0, creditsNum = 0
    courses.map((course) => {
      creditsNum += +course.credits
      totalPoints += (+course.credits * +course.grade)
    })
    customData.map(data => {
      creditsNum += +data.credits
      totalPoints += (+data.total * +data.credits)
    })
    setGpa(totalPoints / creditsNum)

    localStorage.setItem('courses', JSON.stringify(courses))
    localStorage.setItem('customData', JSON.stringify(customData))
  }

  React.useEffect(() => {
    onCalculate()
  }, [courses, customData])

  const handleChange = (e, id) => {
    const { name, value } = e.target

    const index = courses.findIndex(course => course.id === id)

    setCourses([
      ...courses.slice(0, index),
      {
        ...courses[index],
        [name]: value,
      },
      ...courses.slice(index + 1)
    ])
  }

  const handleCustomDataChange = (e, id) => {
    const { name, value } = e.target

    const index = courses.findIndex(course => course.id === id)

    setCustomData([
      ...customData.slice(0, index),
      {
        ...customData[index],
        [name]: value,
      },
      ...customData.slice(index + 1)
    ])
  }

  const onAddCourse = () => {
    setCourses([...courses, {
      ...COURSE_INIT,
      id: courseCount,
    }])
    setCourseCount(courseCount + 1)
  }

  const onAddCustomData = () => {
    setCustomData([...customData, {
      ...CUSTOM_DATA_INIT,
      id: customDataCount,
    }])
    setCustomDataCount(customDataCount + 1)
  }

  const onCourseDeleteClick = (id) => {
    const index = courses.findIndex(course => course.id === id)
    setCourses([
      ...courses.slice(0, index),
      ...courses.slice(index + 1),
    ])
  }

  const onCustomDataDeleteClick = (id) => {
    setCustomData([
      ...customData.slice(0, id),
      ...customData.slice(id + 1)
    ])
  }

  return (
    <Calculator>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Credits Count</th>
            <th>Grade</th>
            <th/>
          </tr>
        </thead>
        <tbody>
          {
            courses.map(course =>
              <tr key={course.id}>
                <td>
                  <input type="text" name={'name'} value={course.name} onChange={(e) => handleChange(e, course.id)}/>
                </td>
                <td>
                  <input type="text" name="credits" id="credits" value={course.credits}
                         onChange={(e) => handleChange(e, course.id)}/>
                </td>
                <td>
                  <select name="grade" id="grade" value={course.grade} onChange={(e) => handleChange(e, course.id)}>
                    {
                      GRADES.map(grade =>
                        <option value={grade.points}>{grade.letter}</option>
                      )
                    }
                  </select>
                </td>
                <td className={'delete-data'} onClick={() => onCourseDeleteClick(course.id)}><i className="fa fa-trash"
                                                                                                aria-hidden="true"/>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
      {customData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Credits Count</th>
              <th>Total Grade</th>
              <th/>
            </tr>
          </thead>
          <tbody>
            {
              customData.map(data =>
                <tr key={data.id}>
                  <td>
                    <input type="text" name={'name'} value={data.name}
                           onChange={(e) => handleCustomDataChange(e, data.id)}/>
                  </td>
                  <td>
                    <input type="text" name="credits" id="credits" value={data.credits}
                           onChange={(e) => handleCustomDataChange(e, data.id)}/>
                  </td>
                  <td>
                    <input type="text" name={'total'} value={data.total}
                           onChange={(e) => handleCustomDataChange(e, data.id)}/>
                  </td>
                  <td className={'delete-data'} onClick={() => onCustomDataDeleteClick(data.id)}><i
                    className="fa fa-trash" aria-hidden="true"/></td>
                </tr>
              )
            }
          </tbody>
        </table>
      )}
      <div className="button-group">
        <div className="add-course button" onClick={onAddCourse}>
          Add Course
        </div>
        <div className="add-custom-data button" onClick={onAddCustomData}>
          Add Custom Data
        </div>
      </div>
      <div className="calculated-gpa">
        {gpa ? gpa.toFixed(2) : 'GPA'}
      </div>
    </Calculator>
  )
}