import React from "react";
import { ICourse } from "../types";

import styles from "./Courses.module.scss";

const TABLE_HEADERS = ["Code", "Name", "Instructors", "Terms", "Syllabus"];

export const Courses: React.FC = () => {
  const [courses, setCourses] = React.useState<ICourse[]>([]);

  const getCourses = React.useCallback(() => {}, []);

  const handleShowButton = () => {
    getCourses();
  };

  return (
    <>
      <div className={styles.filters}>
        <div>
          <input type="text" placeholder="Search Courses e.g. PLS 101" />
        </div>
        <select name="major" id="major" placeholder="Choose the Major">
          <option value="CSCI">Computer Science</option>
          <option value="MATH">Mathematics</option>
          <option value="PHYS">Physics</option>
        </select>
        <select name="level" id="level" placeholder="Choose the level">
          {[1, 2, 3, 4, 5].map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
        <button onClick={handleShowButton}>Show ALL Courses</button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            {TABLE_HEADERS.map((th) => (
              <th key={th}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CSCI151</td>
            <td>Introduction to Programming</td>
            <td>Ben Tyler</td>
            <td>Fall, Spring</td>
            <td>None</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
