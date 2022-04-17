import React from 'react';
import { SelectedCourseContainer } from './styles';
import { useHistory } from 'react-router';

export const SelectedCourse = ({ selectedCourse }) => {
  const history = useHistory();

  const [isAdded, setIsAdded] = React.useState(false);

  React.useEffect(() => {
    setIsAdded(false);
  }, [selectedCourse]);

  const addToSelectedCourses = () => {
    const courses = localStorage.getItem('courses')
      ? JSON.parse(localStorage.getItem('courses'))
      : [];
    selectedCourse &&
      !courses.find(course => course.id === selectedCourse.id) &&
      courses.push(selectedCourse);
    localStorage.setItem('courses', JSON.stringify(courses));
    setIsAdded(true);
  };

  const goToSelectedCourses = () => {
    history.push('/registration/selected');
  };

  return (
    <SelectedCourseContainer>
      <div className="selected-course-title">
        <h3>{selectedCourse?.name}</h3>
        {isAdded ||
        (localStorage.getItem('courses') &&
          JSON.parse(localStorage.getItem('courses')).find(
            course => course.id === selectedCourse.id
          )) ? (
          <button className="selected" onClick={goToSelectedCourses}>
            Go to selected courses
          </button>
        ) : (
          <button onClick={addToSelectedCourses}>Add to selected courses</button>
        )}
      </div>
      <table className="course-components">
        <tbody>
          {selectedCourse.lectures.map(lecture => (
            <tr key={`lectures-${lecture.number}`}>
              <td>Lecture {lecture.number}</td>
              <td>{lecture.days}</td>
              <td>{`${lecture.start_time}-${lecture.end_time}`}</td>
              <td>Online</td>
              <td>{lecture.instructors.join(', ')}</td>
            </tr>
          ))}
          {selectedCourse.recitations.map(recitation => (
            <tr key={`recitation-${recitation.number}`}>
              <td>Recitation {recitation.number}</td>
              <td>{recitation.days}</td>
              <td>{`${recitation.start_time}-${recitation.end_time}`}</td>
              <td>Online</td>
              <td>{recitation.instructors.join(', ')}</td>
            </tr>
          ))}
          {selectedCourse.labs.map(lab => (
            <tr key={`lab-${lab.number}`}>
              <td>Lab {lab.number}</td>
              <td>{lab.days}</td>
              <td>{`${lab.start_time}-${lab.end_time}`}</td>
              <td>Online</td>
              <td>{lab.instructors.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </SelectedCourseContainer>
  );
};
