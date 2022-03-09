import React from "react";

import BrowseCourses from "../images/browse-courses.png";
import PracticeRegistration from "../images/practice-registration.png";
import OwnSchedule from "../images/own-schedule.png";
import PlanEvents from "../images/plan-events.png";

import styles from "./Home.module.scss";

export const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Save up your time using all NU services on one website</h1>

      <ul className={styles.features}>
        <li>
          <img src={BrowseCourses} alt="" />
          <h2>Browse Courses</h2>
        </li>
        <li>
          <img src={PracticeRegistration} alt="" />
          <h2>Practice Registration</h2>
        </li>
        <li>
          <img src={OwnSchedule} alt="" />
          <h2>Make your own Schedule</h2>
        </li>
        <li>
          <img src={PlanEvents} alt="" />
          <h2>Plan Events</h2>
        </li>
      </ul>
    </div>
  );
};
