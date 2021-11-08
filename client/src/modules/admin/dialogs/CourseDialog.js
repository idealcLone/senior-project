import React, { useContext } from "react";

import { DAYS, INSTRUCTORS, MAJORS, SCHOOLS, TERMS } from "../../../consts/data";
import { Button, ButtonGroup, CheckboxGroup, CheckboxItem, Form } from "./styles";
import api from "../../../utils/api";
import { AdminContext } from "../context";
import { Spinner } from "../../../components/Spinner";
import { Checkbox, Radio } from "../../../components/styles";
import { RadioGroup, RadioItem } from "../styles";

export const CourseDialog = ({ courseId, setOpen }) => {
  const [data, setData] = useContext(AdminContext)

  const [courseInfo, setCourseInfo] = React.useState({})
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    if (Number.isInteger(courseId)) {
      setLoading(true)
      api
        .get(`/courses/${courseId}`)
        .then(res => {
          setLoading(false)
          setCourseInfo({ ...res.data })
        })
    }
  }, [courseId])

  React.useEffect(() => {
    console.log(courseInfo)
  }, [courseInfo])

  if (loading) {
    return (
      <Form>
        <Spinner/>
      </Form>
    )
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target

    if (Array.isArray(courseInfo[name])) {
      setCourseInfo({
        ...courseInfo,
        [name]: [...courseInfo[name], value]
      })
    } else {
      setCourseInfo({
        ...courseInfo,
        [name]: value
      })
    }
  }

  const handleDeleteButton = (e) => {
    e.preventDefault()

    api
      .delete(`/courses/${courseId}`)
      .then(() => {
        setOpen(false)
        setData(data.filter(item => item.id !== courseId))
      })
  }

  const handleSaveButton = (e) => {
    e.preventDefault()

    if (Number.isInteger(courseId)) {
      api
        .put(`/courses/update/${courseId}/`, { ...courseInfo })
        .then((res) => {
          setOpen(false)
          const index = data.findIndex(item => item.id === courseId)
          setData([...data.slice(0, index), res.data, ...data.slice(index + 1)])
        })
    } else {
      api
        .post(`/courses/create/`, { ...courseInfo })
        .then((res) => {
          setOpen(false)
          setData([...data, res.data])
        })
    }
  }

  const onCheckboxClick = (name, item) => {
    if (courseInfo[name].includes(item)) {
      setCourseInfo({
        ...courseInfo,
        [name]: courseInfo[name].filter(name => name !== item)
      })
    } else {
      setCourseInfo({
        ...courseInfo,
        [name]: [...courseInfo[name], item]
      })
    }
  }

  return (
    <Form>
      <p className={'dialog-header'}>Courses</p>
      <div className={'dialog-body'}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id={'name'}
            name={'name'}
            type="text"
            value={courseInfo?.name || ''}
            onChange={handleInputChange}
          />
        </div>

        <div className="field">
          <label htmlFor="school">School</label>
          <select name="school" id="school" value={courseInfo.school} onChange={handleInputChange}>
            {
              SCHOOLS.map(school => <option key={school} value={school}>{school}</option>)
            }
          </select>
        </div>

        <div className="field field__checkbox">
          <label htmlFor="terms">Terms</label>
          {
            TERMS.map(term => (
              <Checkbox
                key={term}
                checked={courseInfo.terms?.includes(term)}
                onClick={() => onCheckboxClick('terms', term)}
              >
                <label htmlFor="term">{term}</label>
                <div/>
              </Checkbox>
            ))
          }
        </div>

        <div className="field">
          <label htmlFor="instructors">Instructors</label>
          <select name="instructors" id="instructors" onChange={handleInputChange}>
            {
              INSTRUCTORS.map(instructor =>
                !courseInfo.instructors?.includes(instructor) &&
                <option key={instructor} value={instructor}>{instructor}</option>
              )
            }
          </select>

          <ul>
            {courseInfo.instructors?.map(instructor => (
              <li
                key={instructor}
                onClick={() =>
                  setCourseInfo({
                    ...courseInfo,
                    instructors: courseInfo.instructors.filter(instructorName => instructorName !== instructor)
                  })
                }
              >
                {instructor.name || instructor}
              </li>
            ))}
          </ul>
        </div>

        <div className="field">
          <label htmlFor="days">Days</label>
          {
            DAYS.map(day => (
              <Checkbox
                key={day}
                checked={courseInfo.days?.includes(day)}
                onClick={() => onCheckboxClick('days', day)}
              >
                <label htmlFor="day">{day}</label>
                <div/>
              </Checkbox>
            ))
          }
        </div>
      </div>
      <ButtonGroup className={'dialog-footer'}>
        <Button save onClick={handleSaveButton}>Save</Button>
        {Number.isInteger(courseId) && <Button delete onClick={handleDeleteButton}>Delete</Button>}
      </ButtonGroup>
    </Form>
  )
}