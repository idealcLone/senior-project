import React from "react";
import api from "../../utils/api";
import { Filters, Switch, SwitchLabel, SwitchWrapper } from "./styles";
import { SearchBar } from "../../styles";
import { EventsGrid } from "./EventsGrid";
import { Spinner } from "../../components/Spinner";
import { EventsCalendar } from "./EventsCalendar";

export const EventsPage = () => {
  const today = new Date();

  const [loading, setLoading] = React.useState(false);
  const [events, setEvents] = React.useState([]);
  const [switchOn, setSwitch] = React.useState(
    localStorage.getItem("from") && localStorage.getItem("from") === "calendar"
  );
  const [dates, setDates] = React.useState({
    start: new Date(today.getFullYear(), today.getMonth(), 1)
      .toJSON()
      .slice(0, 10),
    end: new Date(today.getFullYear(), (today.getMonth() % 12) + 1, 1)
      .toJSON()
      .slice(0, 10),
  });
  const [searchText, setSearchText] = React.useState("");
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    !switchOn && setLoading(true);
    api
      .get("events/all/")
      .then((res) => {
        setEvents(res.data);
        setData(res.data);
        localStorage.setItem("from", "grid");
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    let filtered = events.filter((event) =>
      event.name.toLowerCase().includes(searchText.toLowerCase())
    );

    if (!switchOn) {
      if (dates.start) {
        filtered = filtered.filter(
          (event) =>
            event.start_date !== "null" && dates.start < event.start_date
        );
      }

      if (dates.end) {
        filtered = filtered.filter(
          (event) => event.start_date !== "null" && event.start_date < dates.end
        );
      }
    }

    setData(filtered);
  }, [events, dates, searchText, switchOn]);

  const handleDateChange = (e) => {
    const { name, value } = e.target;

    setDates({
      ...dates,
      [name]: value,
    });
  };

  return (
    <>
      <Filters>
        <SearchBar
          placeholder={"Enter event name"}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {!switchOn && (
          <div className="date-filters">
            <div>Filters:</div>
            <input
              type="date"
              id={"start-date"}
              name={"start"}
              value={dates.start}
              onChange={handleDateChange}
            />
            <span className="separator">&nbsp; - &nbsp;</span>
            <input
              type="date"
              id={"end-date"}
              name={"end"}
              value={dates.end}
              onChange={handleDateChange}
            />
          </div>
        )}
        <SwitchWrapper>
          <Switch
            id={"switch"}
            type={"checkbox"}
            checked={switchOn}
            onChange={() => setSwitch(!switchOn)}
          />
          <SwitchLabel htmlFor={"switch"} />
        </SwitchWrapper>
      </Filters>
      {loading && <Spinner />}
      {switchOn ? (
        <EventsCalendar events={data} />
      ) : (
        <EventsGrid events={data} />
      )}
    </>
  );
};
