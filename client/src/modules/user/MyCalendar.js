import React from 'react';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Appointments,
  DateNavigator,
  MonthView,
  Scheduler,
  Toolbar,
} from '@devexpress/dx-react-scheduler-material-ui';
import { CalendarContainer, Paper } from './styles';
import { Deadline } from './Deadline';
import { disableBodyScroll, enableBodyScroll } from '../../utils/functions';
import api from '../../utils/api';
import { getUser } from '../../store/selectors/UserSelectors';
import { useSelector } from 'react-redux';
import { Event } from './Event';

export const MyCalendar = () => {
  const today = new Date().toJSON().slice(0, 10);

  const user = useSelector(getUser);

  const [data, setData] = React.useState([]);
  const [openDialog, setOpenDialog] = React.useState(null);
  const [dialogData, setDialogData] = React.useState({});
  const [openEventDialog, setOpenEventDialog] = React.useState(null);
  const [selectedEvent, setSelectedEvent] = React.useState({});

  const getDeadlines = React.useCallback(() => {
    api
      .get('/deadline/all/')
      .then(res => {
        const events = [];
        user.events.map(event => {
          events.push({
            type: 'event',
            id: event.id,
            title: event.name,
            description: event.description,
            startDate: `${event.start_date}T${event.start_time}`,
            endDate: `${event.start_date}T23:59`,
            image: event.image,
            location: event.location,
            club: event.club,
            additional_info: event.additional_info,
          });
        });
        setData([
          ...res.data.map(deadline => ({
            type: 'deadline',
            id: deadline.id,
            title: deadline.name,
            description: deadline.description,
            startDate: `${deadline.finish_time.slice(0, 10)}T07:00`,
            endDate: deadline.finish_time,
            isActive: deadline.is_active,
          })),
          ...events,
        ]);
      })
      .catch(err => console.log(err));
  }, [user.events]);

  React.useEffect(() => {
    getDeadlines();
  }, [getDeadlines]);

  React.useEffect(() => {
    if (openDialog) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
  }, [openDialog]);

  const AppointmentComponent = ({ data, ...props }) => {
    return (
      <Appointments.Appointment
        {...props}
        style={{
          background: data.type === 'event' ? 'lightgreen' : 'lightblue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#fff',
          fontSize: 13,
          lineHeight: 1.1,
          fontWeight: 550,
        }}
        onClick={() => {
          if (data.type === 'deadline') {
            setOpenDialog(data.endDate);
            setDialogData(data);
          } else {
            setOpenEventDialog(data.endDate);
            setSelectedEvent(data);
          }
        }}
      >
        {data.title} <br />{' '}
        {data.type === 'event' ? data.startDate.slice(11, 16) : data.endDate.slice(11, 16)}
      </Appointments.Appointment>
    );
  };

  const TimeTableCell = ({ data, ...props }) => {
    return (
      <MonthView.TimeTableCell
        {...props}
        onClick={() => {
          setOpenDialog(props.endDate);
          setDialogData({});
        }}
      />
    );
  };

  return (
    <CalendarContainer>
      {openDialog && (
        <Deadline
          open={openDialog}
          setOpen={setOpenDialog}
          data={dialogData}
          getDeadlines={getDeadlines}
        />
      )}
      {openEventDialog && (
        <Event
          open={openEventDialog}
          setOpen={setOpenEventDialog}
          data={selectedEvent}
          getDeadlines={getDeadlines}
        />
      )}
      <h2>My Calendar</h2>
      <Paper>
        <Scheduler data={data} firstDayOfWeek={1}>
          <ViewState defaultCurrentDate={today} />
          <MonthView timeTableCellComponent={TimeTableCell} />
          <Toolbar />
          <DateNavigator />
          <Appointments appointmentComponent={AppointmentComponent} />
        </Scheduler>
      </Paper>
    </CalendarContainer>
  );
};
