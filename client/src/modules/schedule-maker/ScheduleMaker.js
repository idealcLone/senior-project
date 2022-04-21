import React from 'react';
import { ScheduleMakerContainer } from './styles';
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

export const ScheduleMaker = () => {
  const [addNewIsOpen, setAddNewOpen] = React.useState(false);
  const [calendarData, setCalendarData] = React.useState([]);
  const [newClass, setNewClass] = React.useState({});

  const handleAddClass = () => {
    setAddNewOpen(false);
    const today = new Date();
    const classToAdd = JSON.parse(JSON.stringify(newClass));
    classToAdd.title = classToAdd.name;
    classToAdd.startDate = `${today.getFullYear()}-${
      today.getMonth() > 8 ? today.getMonth() + 1 : `0${today.getMonth() + 1}`
    }-${today.getDate() > 9 ? today.getDate() : `0${today.getDate()}`}T${classToAdd.startTime}`;
    classToAdd.endDate = `${today.getFullYear()}-${
      today.getMonth() > 8 ? today.getMonth() + 1 : `0${today.getMonth() + 1}`
    }-${today.getDate() > 9 ? today.getDate() : `0${today.getDate()}`}T${classToAdd.endTime}`;
    setCalendarData([
      ...calendarData,
      { title: classToAdd.title, startDate: classToAdd.startDate, endDate: classToAdd.endDate },
    ]);
    setNewClass({});
  };

  React.useEffect(() => {
    console.log(calendarData);
  }, [calendarData]);

  const handleInputChange = e => {
    const { name, value } = e.target;

    setNewClass({
      ...newClass,
      [name]: value,
    });
  };

  const CellComponent = ({ ...props }) => {
    return <WeekView.TimeTableCell style={{ height: 70 }} {...props} />;
  };

  const TimeScale = ({ ...props }) => {
    return <WeekView.TimeScaleLabel style={{ height: 60 }} {...props} />;
  };

  return (
    <ScheduleMakerContainer>
      <div className="button-container">
        <button className="add-class-button" onClick={() => setAddNewOpen(true)}>
          Add New Class
        </button>
      </div>
      {addNewIsOpen && (
        <div className="add-course">
          <div>
            <div className="form">
              <input
                type="text"
                id="name"
                name="name"
                value={newClass.name || ''}
                onChange={handleInputChange}
              />
              <input
                type="time"
                id="startTime"
                name="startTime"
                value={newClass.startTime || ''}
                onChange={handleInputChange}
              />
              <input
                type="time"
                id="endTime"
                name="endTime"
                value={newClass.endTime || ''}
                onChange={handleInputChange}
              />
              <input
                type="text"
                id="instructor"
                name="instructor"
                value={newClass.instructor || ''}
                onChange={handleInputChange}
              />
            </div>
            <button onClick={handleAddClass}>Add Class</button>
          </div>
        </div>
      )}
      <div className="calendar">
        <Scheduler data={calendarData}>
          <WeekView
            cellDuration={60}
            startDayHour={9}
            endDayHour={19}
            excludedDays={[0, 6]}
            timeTableCellComponent={CellComponent}
            timeScaleLabelComponent={TimeScale}
          />
        </Scheduler>
      </div>
    </ScheduleMakerContainer>
  );
};
