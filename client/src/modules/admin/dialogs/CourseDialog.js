import React, { useContext, useRef } from 'react';

import { DAYS, INSTRUCTORS, MAJORS, SCHOOLS, TERMS } from '../../../consts/data';
import { Button, ButtonGroup, CheckboxGroup, CheckboxItem, Form } from './styles';
import api from '../../../utils/api';
import { AdminContext } from '../context';
import { Spinner } from '../../../components/Spinner';
import { Checkbox } from '../../../components/styles';
import { sortDays } from '../../../utils/functions';

export const CourseDialog = ({ courseId, setOpen }) => {
  const [data, setData] = useContext(AdminContext);

  const [courseInfo, setCourseInfo] = React.useState({
    terms: [],
    lectures: [],
    recitations: [],
    labs: [],
  });
  const [instructor, setInstructor] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [syllabus, setSyllabus] = React.useState(null);
  const [lecture, setLecture] = React.useState({
    instructor: '',
    instructors: [],
  });
  const [recitation, setRecitation] = React.useState({
    instructor: '',
    instructors: [],
  });
  const [lab, setLab] = React.useState({
    instructor: '',
    instructors: [],
  });

  React.useEffect(() => {
    if (Number.isInteger(courseId)) {
      setLoading(true);
      api
        .get(`/courses/${courseId}`)
        .then(res => {
          setCourseInfo({
            ...res.data,
            terms: res.data.terms.split(', '),
          });
        })
        .catch(err => {})
        .finally(() => setLoading(false));
    }
  }, [courseId]);

  React.useEffect(() => {
    console.log(courseInfo);
  }, [courseInfo]);

  if (loading) {
    return (
      <Form>
        <Spinner />
      </Form>
    );
  }

  const handleInputChange = e => {
    const { name, value } = e.target;

    if (Array.isArray(courseInfo[name])) {
      setCourseInfo({
        ...courseInfo,
        [name]: [...courseInfo[name], value],
      });
    } else {
      setCourseInfo({
        ...courseInfo,
        [name]: value,
      });
    }
  };

  const handleDeleteButton = e => {
    e.preventDefault();

    api
      .delete(`/courses/${courseId}`)
      .then(() => {
        setOpen(false);
        setData(data.filter(item => item.id !== courseId));
      })
      .catch(err => {});
  };

  const handleSaveButton = e => {
    e.preventDefault();

    if (Number.isInteger(courseId)) {
      api
        .put(`/courses/update/${courseId}/`, {
          ...courseInfo,
          terms: courseInfo.terms.join(', '),
        })
        .then(res => {
          setOpen(false);
          const index = data.findIndex(item => item.id === courseId);
          setData([...data.slice(0, index), res.data, ...data.slice(index + 1)]);
        })
        .catch(err => {});
    } else {
      api
        .post(`/courses/create/`, {
          ...courseInfo,
          terms: courseInfo.terms.join(', '),
        })
        .then(res => {
          setCourseInfo({
            terms: [],
            lectures: [],
            recitations: [],
            labs: [],
          });
          setData([...data, res.data]);
        })
        .catch(err => {});
    }
  };

  const onCheckboxClick = (name, item) => {
    if (courseInfo[name].includes(item)) {
      setCourseInfo({
        ...courseInfo,
        [name]: [...courseInfo[name].filter(val => val !== item)],
      });
    } else {
      setCourseInfo({
        ...courseInfo,
        [name]: [...courseInfo[name], item],
      });
    }
  };

  const onAddButton = e => {
    e.preventDefault();
    setCourseInfo({
      ...courseInfo,
      instructors: [...courseInfo.instructors, instructor],
    });
    setInstructor('');
  };

  const onSubmitSyllabus = e => {
    const formData = new FormData();

    formData.append('syllabus', syllabus);
    formData.append('course', courseId);

    api
      .post('/courses/upload-syllabus/', formData)
      .then(res => {
        // setSyllabus(null)
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <Form>
      <p className={'dialog-header'}>Courses</p>
      <div className={'dialog-body'}>
        <div className="form-data">
          <div className="field">
            <label className={'bold'} htmlFor="name">
              Name
            </label>
            <input
              id={'name'}
              name={'name'}
              type="text"
              value={courseInfo?.name || ''}
              onChange={handleInputChange}
            />
          </div>

          <div className="field">
            <label className={'bold'} htmlFor="code">
              Code
            </label>
            <input
              id={'code'}
              name={'code'}
              type="text"
              value={courseInfo?.code || ''}
              onChange={handleInputChange}
            />
          </div>

          <div className="field">
            <label className={'bold'} htmlFor="credits">
              Credits
            </label>
            <input
              id={'credits'}
              name={'credits'}
              type="number"
              value={courseInfo?.credits || ''}
              onChange={handleInputChange}
            />
          </div>

          <div className="field">
            <label className={'bold'} htmlFor="school">
              School
            </label>
            <select
              name="school"
              id="school"
              value={courseInfo.school}
              onChange={handleInputChange}
            >
              <option value="">Choose the school</option>
              {SCHOOLS.map(school => (
                <option key={school} value={school}>
                  {school}
                </option>
              ))}
            </select>
          </div>

          <div className="field field__checkbox">
            <label className={'bold'} htmlFor="terms">
              Terms
            </label>
            {TERMS.map(term => (
              <Checkbox
                key={term}
                checked={courseInfo.terms?.includes(term)}
                onClick={() => onCheckboxClick('terms', term)}
              >
                <label htmlFor="term">{term}</label>
                <div />
              </Checkbox>
            ))}
          </div>
        </div>
        <hr />
        <div className="lectures">
          <h2>Lectures</h2>
          <ul>
            {courseInfo.lectures.map(lect => (
              <li
                key={lect.number}
                onClick={() =>
                  setCourseInfo({
                    ...courseInfo,
                    lectures: courseInfo.lectures.filter(l => l.number !== lect.number),
                  })
                }
              >{`${lect.number}L - ${lect.start_time}-${lect.end_time} - ${lect.instructors.join(
                ', '
              )}`}</li>
            ))}
          </ul>
          <div className="form-data">
            <div className="field">
              <label className="bold" htmlFor="lecture_number">
                Lecture number
              </label>
              <input
                id="lecture_number"
                type="number"
                name="number"
                value={lecture.number}
                onChange={e => setLecture({ ...lecture, number: e.target.value })}
              />
            </div>
            <div className="field">
              <label className="bold" htmlFor="days">
                Days
              </label>
              <input
                id="days"
                type="text"
                name="days"
                value={lecture.days}
                onChange={e => setLecture({ ...lecture, days: e.target.value })}
              />
            </div>
            <div className="field">
              <label className="bold" htmlFor="start_time">
                Start time
              </label>
              <input
                id="start_time"
                type="time"
                name="start_time"
                value={lecture.start_time}
                onChange={e => setLecture({ ...lecture, start_time: e.target.value })}
              />
            </div>
            <div className="field">
              <label className="bold" htmlFor="end_time">
                End time
              </label>
              <input
                id="end_time"
                type="time"
                name="end_time"
                value={lecture.end_time}
                onChange={e => setLecture({ ...lecture, end_time: e.target.value })}
              />
            </div>
            <div className="field">
              <label className={'bold'} htmlFor="instructors">
                Instructors
              </label>
              <input
                id={'instructors'}
                name={'instructors'}
                type="text"
                value={lecture.instructor || ''}
                onChange={e => setLecture({ ...lecture, instructor: e.target.value })}
              />
              <Button
                onClick={e => {
                  e.preventDefault();
                  setLecture({
                    ...lecture,
                    instructors: [...lecture.instructors, lecture.instructor],
                    instructor: '',
                  });
                }}
              >
                Add
              </Button>
              <ul>
                {lecture.instructors?.map(instructor => (
                  <li
                    key={instructor}
                    onClick={() =>
                      setLecture({
                        ...lecture,
                        instructors: lecture.instructors.filter(
                          instructorName => instructorName !== instructor
                        ),
                      })
                    }
                  >
                    {instructor.name || instructor}
                  </li>
                ))}
              </ul>
            </div>
            <div className="field centered">
              <Button
                onClick={e => {
                  e.preventDefault();
                  setCourseInfo({ ...courseInfo, lectures: [...courseInfo.lectures, lecture] });
                  setLecture({
                    number: '',
                    days: '',
                    instructors: [],
                    start_time: '',
                    end_time: '',
                  });
                }}
              >
                Add L
              </Button>
            </div>
          </div>
        </div>
        <hr />
        <div className="lectures">
          <h2>Recitations</h2>
          <ul>
            {courseInfo.recitations.map(rec => (
              <li
                key={rec.number}
                onClick={() =>
                  setCourseInfo({
                    ...courseInfo,
                    recitations: courseInfo.recitations.filter(r => r.number !== rec.number),
                  })
                }
              >{`${rec.number}L - ${rec.start_time}-${rec.end_time} - ${rec.instructors.join(
                ', '
              )}`}</li>
            ))}
          </ul>
          <div className="form-data">
            <div className="field">
              <label className="bold" htmlFor="recitation_number">
                Recitation number
              </label>
              <input
                id="recitation_number"
                type="number"
                name="number"
                value={recitation.number}
                onChange={e => setRecitation({ ...recitation, number: e.target.value })}
              />
            </div>
            <div className="field">
              <label className="bold" htmlFor="days">
                Days
              </label>
              <input
                id="days"
                type="text"
                name="days"
                value={recitation.days}
                onChange={e => setRecitation({ ...recitation, days: e.target.value })}
              />
            </div>
            <div className="field">
              <label className="bold" htmlFor="start_time">
                Start time
              </label>
              <input
                id="start_time"
                type="time"
                name="start_time"
                value={recitation.start_time}
                onChange={e => setRecitation({ ...recitation, start_time: e.target.value })}
              />
            </div>
            <div className="field">
              <label className="bold" htmlFor="end_time">
                End time
              </label>
              <input
                id="end_time"
                type="time"
                name="end_time"
                value={recitation.end_time}
                onChange={e => setRecitation({ ...recitation, end_time: e.target.value })}
              />
            </div>
            <div className="field">
              <label className={'bold'} htmlFor="instructors">
                Instructors
              </label>
              <input
                id={'instructors'}
                name={'instructors'}
                type="text"
                value={recitation.instructor || ''}
                onChange={e => setRecitation({ ...recitation, instructor: e.target.value })}
              />
              <Button
                onClick={e => {
                  e.preventDefault();
                  setRecitation({
                    ...recitation,
                    instructors: [...recitation.instructors, recitation.instructor],
                    instructor: '',
                  });
                }}
              >
                Add
              </Button>
              <ul>
                {recitation.instructors?.map(instructor => (
                  <li
                    key={instructor}
                    onClick={() =>
                      setRecitation({
                        ...recitation,
                        instructors: recitation.instructors.filter(
                          instructorName => instructorName !== instructor
                        ),
                      })
                    }
                  >
                    {instructor.name || instructor}
                  </li>
                ))}
              </ul>
            </div>
            <div className="field centered">
              <Button
                onClick={e => {
                  e.preventDefault();
                  setCourseInfo({
                    ...courseInfo,
                    recitations: [...courseInfo.recitations, recitation],
                  });
                  setRecitation({
                    number: '',
                    days: '',
                    instructors: [],
                    start_time: '',
                    end_time: '',
                  });
                }}
              >
                Add R
              </Button>
            </div>
          </div>
        </div>
        <hr />
        <div className="lectures">
          <h2>Labs</h2>
          <ul>
            {courseInfo.labs.map(lb => (
              <li
                key={lb.number}
                onClick={() =>
                  setCourseInfo({
                    ...courseInfo,
                    labs: courseInfo.labs.filter(l => l.number !== lb.number),
                  })
                }
              >{`${lb.number}L - ${lb.start_time}-${lb.end_time} - ${lb.instructors.join(
                ', '
              )}`}</li>
            ))}
          </ul>
          <div className="form-data">
            <div className="field">
              <label className="bold" htmlFor="lab_number">
                Lab number
              </label>
              <input
                id="lab_number"
                type="number"
                name="number"
                value={lab.number}
                onChange={e => setLab({ ...lab, number: e.target.value })}
              />
            </div>
            <div className="field">
              <label className="bold" htmlFor="days">
                Days
              </label>
              <input
                id="days"
                type="text"
                name="days"
                value={lab.days}
                onChange={e => setLab({ ...lab, days: e.target.value })}
              />
            </div>
            <div className="field">
              <label className="bold" htmlFor="start_time">
                Start time
              </label>
              <input
                id="start_time"
                type="time"
                name="start_time"
                value={lab.start_time}
                onChange={e => setLab({ ...lab, start_time: e.target.value })}
              />
            </div>
            <div className="field">
              <label className="bold" htmlFor="end_time">
                End time
              </label>
              <input
                id="end_time"
                type="time"
                name="end_time"
                value={lab.end_time}
                onChange={e => setLab({ ...lab, end_time: e.target.value })}
              />
            </div>
            <div className="field">
              <label className={'bold'} htmlFor="instructors">
                Instructors
              </label>
              <input
                id={'instructors'}
                name={'instructors'}
                type="text"
                value={lab.instructor || ''}
                onChange={e => setLab({ ...lab, instructor: e.target.value })}
              />
              <Button
                onClick={e => {
                  e.preventDefault();
                  setLab({
                    ...lab,
                    instructors: [...lab.instructors, lab.instructor],
                    instructor: '',
                  });
                }}
              >
                Add
              </Button>
              <ul>
                {lab.instructors?.map(instructor => (
                  <li
                    key={instructor}
                    onClick={() =>
                      setLab({
                        ...lab,
                        instructors: lab.instructors.filter(
                          instructorName => instructorName !== instructor
                        ),
                      })
                    }
                  >
                    {instructor.name || instructor}
                  </li>
                ))}
              </ul>
            </div>
            <div className="field centered">
              <Button
                onClick={e => {
                  e.preventDefault();
                  setCourseInfo({
                    ...courseInfo,
                    labs: [...courseInfo.labs, lab],
                  });
                  setLab({
                    number: '',
                    days: '',
                    instructors: [],
                    start_time: '',
                    end_time: '',
                  });
                }}
              >
                Add Lb
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ButtonGroup className={'dialog-footer'}>
        <Button save onClick={handleSaveButton}>
          Save
        </Button>
        {Number.isInteger(courseId) && (
          <Button delete onClick={handleDeleteButton}>
            Delete
          </Button>
        )}
      </ButtonGroup>
    </Form>
  );
};
