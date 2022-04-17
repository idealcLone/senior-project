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

  const CellComponent = ({ ...props }) => {
    return <WeekView.TimeTableCell style={{ height: 70 }} {...props} />;
  };

  const TimeScale = ({ ...props }) => {
    return <WeekView.TimeScaleLabel style={{ height: 60 }} {...props} />;
  };

  return (
    <ScheduleMakerContainer>
      <div className="button-container">
        <button onClick={() => setAddNewOpen(true)}>Add New Class</button>
      </div>
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
