import React, { useContext, useRef } from "react";

import { DAYS, INSTRUCTORS, MAJORS, SCHOOLS, TERMS } from "../../../consts/data";
import { Button, ButtonGroup, CheckboxGroup, CheckboxItem, Form } from "./styles";
import api from "../../../utils/api";
import { AdminContext } from "../context";
import { Spinner } from "../../../components/Spinner";
import { Checkbox } from "../../../components/styles";

export const CourseDialog = ({ courseId, setOpen }) => {
  const [data, setData] = useContext(AdminContext)

  const [courseInfo, setCourseInfo] = React.useState({
    instructors: [],
    terms: [],
    days: ['M', 'W', 'F'],
    start_time: '09:00:00',
  })
  const [instructor, setInstructor] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    if (Number.isInteger(courseId)) {
      setLoading(true)
      api
        .get(`/courses/${courseId}`)
        .then(res => {
          setLoading(false)
          setCourseInfo(
            {
              ...res.data,
              days: res.data.days.split(''),
              terms: res.data.terms.split(', '),
            }
          )
        })
        .catch(err => {
        })
    }
  }, [courseId])

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
      .catch(err => {
      })
  }

  const handleSaveButton = (e) => {
    e.preventDefault()

    if (Number.isInteger(courseId)) {
      api
        .put(`/courses/update/${courseId}/`,
          {
            ...courseInfo,
            terms: courseInfo.terms.join(', '),
            days: courseInfo.days.join(''),
          }
        )
        .then((res) => {
          setOpen(false)
          const index = data.findIndex(item => item.id === courseId)
          setData([...data.slice(0, index), res.data, ...data.slice(index + 1)])
        })
        .catch(err => {
        })
    } else {
      api
        .post(`/courses/create/`,
          {
            ...courseInfo,
            terms: courseInfo.terms.join(', '),
            days: courseInfo.days.join(''),
          }
        )
        .then((res) => {
          setOpen(false)
          setData([...data, res.data])
        })
        .catch(err => {
        })
    }
  }

  const onCheckboxClick = (name, item) => {
    console.log(courseInfo[name], item)
    if (courseInfo[name].includes(item)) {
      setCourseInfo({
        ...courseInfo,
        [name]: courseInfo[name].filter(val => val !== item)
      })
    } else {
      setCourseInfo({
        ...courseInfo,
        [name]: [...courseInfo[name], item]
      })
    }
  }

  const onAddButton = e => {
    e.preventDefault()
    setCourseInfo({
      ...courseInfo,
      instructors: [...courseInfo.instructors, instructor]
    })
    setInstructor('')
  }

  return (
    <Form>
      <p className={'dialog-header'}>Courses</p>
      <div className={'dialog-body'}>
        <div className="form-data">
          <div className="field">
            <label className={'bold'} htmlFor="name">Name</label>
            <input
              id={'name'}
              name={'name'}
              type="text"
              value={courseInfo?.name || ''}
              onChange={handleInputChange}
            />
          </div>

          <div className="field">
            <label className={'bold'} htmlFor="code">Code</label>
            <input
              id={'code'}
              name={'code'}
              type="text"
              value={courseInfo?.code || ''}
              onChange={handleInputChange}
            />
          </div>

          <div className="field">
            <label className={'bold'} htmlFor="school">School</label>
            <select name="school" id="school" value={courseInfo.school} onChange={handleInputChange}>
              <option value="">Choose the school</option>
              {
                SCHOOLS.map(school => <option key={school} value={school}>{school}</option>)
              }
            </select>
          </div>

          <div className="field field__checkbox">
            <label className={'bold'} htmlFor="terms">Terms</label>
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
            <label className={'bold'} htmlFor="instructors">Instructors</label>
            <input
              id={'instructors'}
              name={'instructors'}
              type="text"
              value={instructor || ''}
              onChange={e => setInstructor(e.target.value)}
            />
            <Button onClick={onAddButton}>Add</Button>
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
            <label className={'bold'} htmlFor="days">Days</label>
            {
              DAYS.map(day => (
                <Checkbox
                  key={day}
                  checked={Number.isInteger(courseId) ? courseInfo.days?.includes(day) : 'MWF'.includes(day)}
                  onClick={() => onCheckboxClick('days', day)}
                >
                  <label htmlFor="day">{day}</label>
                  <div/>
                </Checkbox>
              ))
            }
          </div>

          <div className="field">
            <label className={'bold'} htmlFor={'start_time'}>Start time</label>
            <input
              type="time"
              name={'start_time'}
              value={courseInfo.start_time}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label htmlFor="duration" className="bold">Duration</label>
            <select name="duration" id="duration" value={courseInfo.duration || 50} onChange={handleInputChange}>
              <option value={50}>50</option>
              <option value={75}>75</option>
            </select>
          </div>
        </div>
      </div>
      <ButtonGroup className={'dialog-footer'}>
        <Button save onClick={handleSaveButton}>Save</Button>
        {Number.isInteger(courseId) && <Button delete onClick={handleDeleteButton}>Delete</Button>}
      </ButtonGroup>
    </Form>
  )
}