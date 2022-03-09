import React from "react";
import {
  Scheduler,
  Toolbar,
  Appointments,
  MonthView,
  DateNavigator,
} from "@devexpress/dx-react-scheduler-material-ui";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { CalendarContainer, Paper } from "./styles";
import { useHistory } from "react-router";

export const EventsCalendar = ({ events }) => {
  const history = useHistory();

  const today = new Date().toJSON().slice(0, 10);
  const [data, setData] = React.useState([]);

  console.log(events);

  React.useEffect(() => {
    setData([]);
    events.map((event) => {
      const startDate = event.start_date + "T" + event.start_time;
      const endDate = new Date(startDate);
      endDate.setTime(endDate.getTime() + 1000 * 60);
      setData((data) => [
        ...data,
        {
          event,
          title: event.name,
          startDate: startDate,
          endDate: endDate,
        },
      ]);
    });
  }, [events]);

  const CustomAppointment = ({ style, ...restProps }) => {
    return (
      <Appointments.Appointment
        {...restProps}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
        onClick={() => {
          const event = restProps.data.event;
          localStorage.setItem("from", "calendar");
          history.push({
            pathname: `/events/${event.id}`,
            state: {
              event,
            },
          });
        }}
      />
    );
  };

  return (
    <CalendarContainer>
      <Paper>
        <Scheduler data={data}>
          <ViewState defaultCurrentDate={today} />
          <MonthView />
          <Toolbar />
          <DateNavigator />
          <Appointments appointmentComponent={CustomAppointment} />
        </Scheduler>
      </Paper>
    </CalendarContainer>
  );
};
