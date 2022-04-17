import React from 'react';
import { SelectedCoursesContainer } from './styles';

import ExitIcon from '../../media/img/exit-icon.png';
import { useHistory } from 'react-router';

import {
  Scheduler,
  DayView,
  WeekView,
  Toolbar,
  Appointments,
  MonthView,
  DateNavigator,
} from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { addDays, getDayValue, getToday } from '../../utils/functions';

export const SelectedCourses = () => {
  const history = useHistory();
  const [courses, setCourses] = React.useState(
    localStorage.getItem('courses') ? JSON.parse(localStorage.getItem('courses')) : []
  );

  const [selectedCourse, setSelectedCourse] = React.useState();
  const [selectedLecture, setSelectedLecture] = React.useState();
  const [selectedRecitation, setSelectedRecitation] = React.useState();
  const [selectedLab, setSelectedLab] = React.useState();
  const [calendarData, setCalendarData] = React.useState(
    JSON.parse(localStorage.getItem('calendar-data') || '[]')
  );
  const today = getToday();

  React.useEffect(() => {
    localStorage.setItem('calendar-data', JSON.stringify(calendarData));
  }, [calendarData]);

  React.useEffect(() => {
    if (selectedCourse && selectedLecture) {
      const lecture = selectedCourse.lectures.find(l => l.number === selectedLecture);
      if (lecture) {
        let lectureStart = new Date();
        lectureStart.setDate(lectureStart.getDate() - lectureStart.getDay() + 1);
        lectureStart.setHours(+lecture.start_time.slice(0, 2), +lecture.start_time.slice(3), 0);
        let lectureEnd = new Date();
        lectureEnd.setDate(lectureEnd.getDate() - lectureEnd.getDay() + 1);
        lectureEnd.setHours(+lecture.end_time.slice(0, 2), +lecture.end_time.slice(3), 0);
        const data = calendarData.filter(
          item => !(item.title.startsWith(selectedCourse.code) && item.title.endsWith('L'))
        );
        for (let i = 0; i < lecture.days.length; i++) {
          const day = lecture.days[i];
          lectureStart.setDate(lectureStart.getDate() + getDayValue(day));
          lectureEnd.setDate(lectureEnd.getDate() + getDayValue(day));
          data.push({
            title: `${selectedCourse.code} - ${selectedCourse.name} - ${lecture.number}L`,
            startDate: `${lectureStart.getFullYear()}-${lectureStart.getMonth() < 9 ? 0 : ''}${
              lectureStart.getMonth() + 1
            }-${lectureStart.getDate()}T${lecture.start_time}`,
            endDate: `${lectureEnd.getFullYear()}-${lectureEnd.getMonth() < 9 ? 0 : ''}${
              lectureEnd.getMonth() + 1
            }-${lectureEnd.getDate()}T${lecture.end_time}`,
          });
          lectureStart.setDate(lectureStart.getDate() - getDayValue(day));
          lectureEnd.setDate(lectureEnd.getDate() - getDayValue(day));
        }
        setCalendarData(data);
      }
    }
  }, [selectedCourse, selectedLecture]);

  React.useEffect(() => {
    if (selectedCourse && selectedRecitation) {
      const recitation = selectedCourse.recitations.find(r => r.number === selectedRecitation);
      if (recitation) {
        let recitationStart = new Date();
        recitationStart.setDate(recitationStart.getDate() - recitationStart.getDay() + 1);
        recitationStart.setHours(
          +recitation.start_time.slice(0, 2),
          +recitation.start_time.slice(3),
          0
        );
        let recitationEnd = new Date();
        recitationEnd.setDate(recitationEnd.getDate() - recitationEnd.getDay() + 1);
        recitationEnd.setHours(+recitation.end_time.slice(0, 2), +recitation.end_time.slice(3), 0);
        const data = calendarData.filter(
          item => !(item.title.startsWith(selectedCourse.code) && item.title.endsWith('R'))
        );
        for (let i = 0; i < recitation.days.length; i++) {
          const day = recitation.days[i];
          recitationStart.setDate(recitationStart.getDate() + getDayValue(day));
          recitationEnd.setDate(recitationEnd.getDate() + getDayValue(day));
          data.push({
            title: `${selectedCourse.code} - ${recitation.number}R`,
            startDate: `${recitationStart.getFullYear()}-${
              recitationStart.getMonth() < 9 ? 0 : ''
            }${recitationStart.getMonth() + 1}-${recitationStart.getDate()}T${
              recitation.start_time
            }`,
            endDate: `${recitationEnd.getFullYear()}-${recitationEnd.getMonth() < 9 ? 0 : ''}${
              recitationEnd.getMonth() + 1
            }-${recitationEnd.getDate()}T${recitation.end_time}`,
          });
          recitationStart.setDate(recitationStart.getDate() - getDayValue(day));
          recitationEnd.setDate(recitationEnd.getDate() - getDayValue(day));
        }
        setCalendarData(data);
      }
    }
  }, [selectedCourse, selectedRecitation]);

  React.useEffect(() => {
    if (selectedCourse && selectedLab) {
      const lab = selectedCourse.labs.find(lb => lb.number === selectedLab);
      if (lab) {
        let labStart = new Date();
        labStart.setDate(labStart.getDate() - labStart.getDay() + 1);
        labStart.setHours(+lab.start_time.slice(0, 2), +lab.start_time.slice(3), 0);
        let labEnd = new Date();
        labEnd.setDate(labEnd.getDate() - labEnd.getDay() + 1);
        labEnd.setHours(+lab.end_time.slice(0, 2), +lab.end_time.slice(3), 0);
        const data = calendarData.filter(
          item => !(item.title.startsWith(selectedCourse.code) && item.title.endsWith('Lb'))
        );
        for (let i = 0; i < lab.days.length; i++) {
          const day = lab.days[i];
          labStart.setDate(labStart.getDate() + getDayValue(day));
          labEnd.setDate(labEnd.getDate() + getDayValue(day));
          data.push({
            title: `${selectedCourse.code} - ${lab.number}Lb`,
            startDate: `${labStart.getFullYear()}-${labStart.getMonth() < 9 ? 0 : ''}${
              labStart.getMonth() + 1
            }-${labStart.getDate()}T${lab.start_time}`,
            endDate: `${labEnd.getFullYear()}-${labEnd.getMonth() < 9 ? 0 : ''}${
              labEnd.getMonth() + 1
            }-${labEnd.getDate()}T${lab.end_time}`,
          });
          labStart.setDate(labStart.getDate() - getDayValue(day));
          labEnd.setDate(labEnd.getDate() - getDayValue(day));
        }
        setCalendarData(data);
      }
    }
  }, [selectedCourse, selectedLab]);

  const handleDeleteClick = (e, courseToDelete) => {
    e.stopPropagation();
    const newCourses = courses.filter(course => course.id !== courseToDelete.id);
    localStorage.setItem('courses', JSON.stringify(newCourses));
    setCourses(newCourses);
    setCalendarData(calendarData.filter(item => !item.title.startsWith(courseToDelete.code)));
    setSelectedCourse(undefined);
    setSelectedLecture(undefined);
    setSelectedRecitation(undefined);
    setSelectedLab(undefined);
  };

  const handleCourseClick = course => {
    setSelectedCourse(course);
    setSelectedLecture(undefined);
    setSelectedRecitation(undefined);
    setSelectedLab(undefined);
  };

  const CellComponent = ({ ...props }) => {
    return <WeekView.TimeTableCell style={{ height: 70 }} {...props} />;
  };

  const TimeScale = ({ ...props }) => {
    return <WeekView.TimeScaleLabel style={{ height: 60 }} {...props} />;
  };

  const CustomAppointment = ({ style, ...restProps }) => {
    return (
      <Appointments.Appointment
        {...restProps}
        style={{
          ...style,
          minHeight: 70,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
          fontWeight: 600,
        }}
      >
        <div>{restProps.data.title}</div>
        <div>
          {restProps.data.startDate.slice(11)} - {restProps.data.endDate.slice(11)}
        </div>
      </Appointments.Appointment>
    );
  };

  return (
    <SelectedCoursesContainer>
      <h2>Registration</h2>
      <div className="go-to-add-classes">
        <button onClick={() => history.push('/registration')}>Go to search/add classes</button>
      </div>
      <div className="choose-sections">
        {selectedCourse?.lectures?.length > 0 && (
          <ul className="choose-lecture-section">
            <span>Lecture</span>
            {selectedCourse.lectures.map(lecture => (
              <li key={`lecture-${selectedCourse.id}-${lecture.id}`}>
                <input
                  type="radio"
                  name="selected-lecture"
                  id="selected-lecture"
                  value={selectedLecture}
                  onChange={() => {
                    setSelectedLecture(lecture.number);
                  }}
                />
                <label htmlFor="selected-lecture">
                  {lecture.number}L, {lecture.days}, {lecture.start_time} - {lecture.end_time}
                </label>
              </li>
            ))}
          </ul>
        )}
        {selectedCourse?.recitations?.length > 0 && (
          <ul className="choose-recitation-section">
            <span>Recitation</span>
            {selectedCourse.recitations.map(recitation => (
              <li key={`recitation-${selectedCourse.id}-${recitation.id}`}>
                <input
                  type="radio"
                  name="selected-recitation"
                  id="selected-recitation"
                  value={selectedRecitation}
                  onChange={() => setSelectedRecitation(recitation.number)}
                />
                <label htmlFor="selected-recitation">
                  {recitation.number}R, {recitation.days}, {recitation.start_time} -{' '}
                  {recitation.end_time}
                </label>
              </li>
            ))}
          </ul>
        )}
        {selectedCourse?.labs?.length > 0 && (
          <ul className="choose-lab-section">
            <span>Lab</span>
            {selectedCourse.labs.map(lab => (
              <li key={`lab-${selectedCourse.id}-${lab.id}`}>
                <input
                  type="radio"
                  name="selected-lab"
                  id="selected-lab"
                  value={selectedLab}
                  onChange={() => setSelectedLab(lab.number)}
                />
                <label htmlFor="selected-lab">
                  {lab.number}Lb, {lab.days}, {lab.start_time} - {lab.end_time}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="list-calendar-container">
        <div>
          <ul className="selected-courses-list">
            <h3>Selected courses</h3>
            {courses.map(course => (
              <li
                key={`course-${course.id}`}
                className="course-card"
                onClick={() => handleCourseClick(course)}
              >
                <img src={ExitIcon} alt="" onClick={e => handleDeleteClick(e, course)} />
                <div className="bold">{course.name}</div>
                <div>{`${course.code} | (${course.credits} ECTS credits)`}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="registration-calendar">
          <Scheduler data={calendarData} locale="en-US">
            <ViewState defaultCurrentDate={today} />
            <WeekView
              cellDuration={60}
              startDayHour={9}
              endDayHour={19}
              excludedDays={[0, 6]}
              timeTableCellComponent={CellComponent}
              timeScaleLabelComponent={TimeScale}
            />
            <Appointments appointmentComponent={CustomAppointment} />
          </Scheduler>
        </div>
      </div>
    </SelectedCoursesContainer>
  );
};
