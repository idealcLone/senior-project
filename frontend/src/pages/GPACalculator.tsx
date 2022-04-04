import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import Bin from '../images/bin.png';
import styles from './GPACalculator.module.scss';

type CourseType = {
  id: string;
  name: string;
  letterGrade: string;
  credits: number;
};

const grades: { [letter: string]: number } = {
  A: 4.0,
  'A-': 3.67,
  'B+': 3.33,
  B: 3.0,
  'B-': 2.67,
  'C+': 2.33,
  C: 2.0,
  'C-': 1.67,
  'D+': 1.33,
  D: 1.0,
  F: 0,
};

type TargetCalculatorStateType = {
  currentGPA: number;
  targetGPA: number;
  currentCredits: number;
  totalCredits: number;
  averageGPA: number;
};

export const GPACalculator: React.FC = () => {
  const [courses, setCourses] = React.useState<CourseType[]>([]);
  const [totalGrade, setTotalGrade] = React.useState<number>(0);
  const [targetCalculatorState, setTargetCalculatorState] =
    React.useState<TargetCalculatorStateType>({
      averageGPA: 0,
      currentCredits: 0,
      currentGPA: 0,
      targetGPA: 0,
      totalCredits: 0,
    });

  React.useEffect(() => {
    document.title = 'GPA Calculator';
  }, []);

  React.useEffect(() => {
    console.log(courses);
  }, [courses]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    courseIndex: number
  ) => {
    const { name, value } = e.target;

    setCourses([
      ...courses.slice(0, courseIndex),
      {
        ...courses[courseIndex],
        [name]: name === 'credits' && value ? +value : value,
      },
      ...courses.slice(courseIndex + 1),
    ]);
  };

  const handleRemoveCourse = (courseIndex: number) => {
    setCourses([...courses.slice(0, courseIndex), ...courses.slice(courseIndex + 1)]);
  };

  const handleAddCourse = () => {
    const newCourse: CourseType = { id: uuidv4(), name: '', letterGrade: 'A', credits: 0 };
    setCourses([...courses, newCourse]);
  };

  const handleCalculate = () => {
    let total = 0;
    let credits = 0;
    courses.forEach(course => {
      total += grades[course.letterGrade] * course.credits;
      credits += course.credits;
    });
    setTotalGrade(total / credits);
  };

  const handleClear = () => {
    setCourses([]);
    setTotalGrade(0);
  };

  const handleTargetCalculatorCalculate = () => {
    const averageGPA =
      (targetCalculatorState.targetGPA * targetCalculatorState.totalCredits -
        targetCalculatorState.currentGPA * targetCalculatorState.currentCredits) /
      (targetCalculatorState.totalCredits - targetCalculatorState.currentCredits);
    setTargetCalculatorState({
      ...targetCalculatorState,
      averageGPA,
    });
  };

  const handleTargetCalculatorInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTargetCalculatorState({
      ...targetCalculatorState,
      [name]: +value,
    });
  };

  const handleTargetCalculatorStateClear = () => {
    setTargetCalculatorState({
      averageGPA: 0,
      currentCredits: 0,
      currentGPA: 0,
      targetGPA: 0,
      totalCredits: 0,
    });
  };

  return (
    <div className={styles.container}>
      <div>
        <table className={styles.courses}>
          <thead>
            <tr>
              <th />
              <th>GPA Calculator</th>
              <th />
            </tr>
            <tr>
              <th>Course Name</th>
              <th>Credits Count</th>
              <th>Letter Grade</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {courses.map((course, idx) => (
              <tr key={course.id}>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={course.name}
                    onChange={e => handleInputChange(e, idx)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="credits"
                    value={course.credits}
                    onChange={e => handleInputChange(e, idx)}
                  />
                </td>
                <td>
                  <select
                    name="letterGrade"
                    id="letterGrade"
                    value={course.letterGrade}
                    onChange={e => handleInputChange(e, idx)}
                  >
                    {Object.keys(grades).map(letter => (
                      <option key={letter} value={letter}>
                        {letter}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <img src={Bin} alt="" onClick={() => handleRemoveCourse(idx)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.actions}>
          <button onClick={handleAddCourse}>Add course</button>
          <button onClick={handleCalculate}>Calculate</button>
          <button onClick={handleClear}>Clear</button>
        </div>
        <div className={styles.totalGrade}>{totalGrade.toFixed(2)}</div>
      </div>

      <div className={styles.targetCalculator}>
        <div>Target GPA Calculator</div>
        <div>
          <label htmlFor="current-gpa">Current GPA</label>
          <input
            type="number"
            id="current-gpa"
            name="currentGPA"
            value={targetCalculatorState.currentGPA || ''}
            onChange={handleTargetCalculatorInputChange}
          />
        </div>
        <div>
          <label htmlFor="target-gpa">Target GPA</label>
          <input
            type="number"
            id="target-gpa"
            name="targetGPA"
            value={targetCalculatorState.targetGPA || ''}
            onChange={handleTargetCalculatorInputChange}
          />
        </div>
        <div>
          <label htmlFor="current-credits">Completed credits number</label>
          <input
            type="number"
            id="current-credits"
            name="currentCredits"
            value={targetCalculatorState.currentCredits || ''}
            onChange={handleTargetCalculatorInputChange}
          />
        </div>
        <div>
          <label htmlFor="total-credits">Total credits number</label>
          <input
            type="number"
            id="total-credits"
            name="totalCredits"
            value={targetCalculatorState.totalCredits || ''}
            onChange={handleTargetCalculatorInputChange}
          />
        </div>
        <button onClick={handleTargetCalculatorCalculate}>Calculate</button>
        {targetCalculatorState.averageGPA > 0 && (
          <button onClick={handleTargetCalculatorStateClear}>Clear</button>
        )}
        {targetCalculatorState.averageGPA > 0 &&
          (targetCalculatorState.averageGPA <= 4.0 ? (
            <p>Your average GPA for the next semesters must be</p>
          ) : (
            <p className={styles.impossible}>Impossible</p>
          ))}
        <div className={styles.totalGrade}>{targetCalculatorState.averageGPA.toFixed(2)}</div>
      </div>
    </div>
  );
};
