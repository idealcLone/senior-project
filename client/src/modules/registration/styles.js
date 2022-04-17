import styled from 'styled-components';

export const UpperRegistrationPage = styled.div`
  display: flex;
  justify-content: space-between;

  > :last-child {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-right: 30px;

    button {
      width: 200px;
      height: 40px;
      border-radius: 30px;
      border: none;
      background: #618a95;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      margin-bottom: 10px;
    }
  }
`;

export const CourseRegistrationFilters = styled.div`
  width: 900px;
  padding: 20px 10px;
  margin-top: 50px;
  margin-left: 20px;
  border: 1px solid #b5b8c8;

  .day-checkbox {
    width: 70px;
    display: flex;
    align-items: center;

    > label {
      margin-right: 5px;
    }

    input[type='checkbox'] {
      width: 15px;
      height: 15px;
    }
  }

  > :first-child {
    display: flex;
    justify-content: space-between;
  }

  .checkboxes {
    display: flex;
    margin-top: 30px;
    margin-bottom: 20px;

    > :first-child {
      display: flex;
      align-items: center;
      margin-right: 15px;
    }
  }

  .search {
    label {
      margin-right: 30px;
    }
  }

  select {
    width: 250px;
    height: 30px;
    cursor: pointer;
  }

  input {
    height: 30px;
    width: 260px;
    border: 1px solid #b5b8c8;
  }

  select,
  input {
    padding: 0 5px;
  }

  .selects {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 13px;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 20px;

    button {
      width: 190px;
      height: 35px;
      background: #fff;
      border: 1px solid #d1d1d1;
      cursor: pointer;
      border-radius: 3px;
    }
  }
`;

export const FilterResults = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RegistrationCourseTable = styled.table`
  width: 900px;
  margin-left: 20px;
  margin-bottom: 100px;
  border: 1px solid #cccccc;

  th,
  td {
    width: 33%;
    height: 45px;
    text-align: start;
  }

  .selected {
    background: #2392c7 !important;
  }

  img {
    width: 27px;
    height: 22px;
  }

  thead {
    background: #c5c5c5;
  }

  tbody {
    tr {
      height: 45px;

      :nth-child(2n) {
        background: #cccccc;
      }
    }
  }
`;

export const SelectedCourseContainer = styled.div`
  flex: 1;
  padding: 15px 18px;
  border: 1px solid #cccccc;
  margin-left: 15px;
  margin-right: 10px;

  .selected-course-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    button {
      background: green;
      color: #fff;
      padding: 8px 10px;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      outline: none;
    }
  }

  .selected {
    background-color: #2392c7 !important;
  }

  .course-components {
    background: #dce4e7;

    td,
    th {
      text-align: start;
      padding-bottom: 30px;
    }
  }
`;

export const SelectedCoursesContainer = styled.div`
  padding: 20px;
  margin-right: 20px;

  h2 {
    text-align: center;
  }

  .choose-sections {
    margin-bottom: 20px;
    display: flex;
    gap: 50px;
    height: 150px;
    border: 1px solid #000;
    padding: 10px 30px;
    margin-left: 220px;
    overflow-y: auto;

    ul {
      list-style: none;
      width: 300px;

      span {
        font-weight: 700;
      }

      li {
        padding: 5px 0;
        display: flex;
        align-items: center;

        input {
          margin-right: 5px;
        }
      }

      > :nth-child(2) {
        margin-top: 8px;
      }
    }
  }

  .list-calendar-container {
    display: flex;
    gap: 20px;
  }

  .selected-courses-list {
    width: 200px;
    list-style: none;

    h3 {
      margin-bottom: 10px;
    }

    .course-card {
      position: relative;
      width: 200px;
      min-height: 120px;
      margin-bottom: 10px;
      background: lightskyblue;
      padding: 20px 0 20px 15px;
      border-radius: 5px;
      cursor: pointer;

      > :first-child {
        margin-bottom: 5px;
      }

      img {
        width: 15px;
        position: absolute;
        top: 3%;
        right: 2%;
        cursor: pointer;
        background: #fff;
        border-radius: 50%;
      }
    }
  }

  .registration-calendar {
    flex: 1;
    border: 1px solid #000;
  }

  .go-to-add-classes {
    display: flex;
    justify-content: flex-end;

    button {
      margin: 30px 0;
      background: dodgerblue;
      color: #fff;
      border: none;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  .bold {
    font-weight: 700;
  }
`;
