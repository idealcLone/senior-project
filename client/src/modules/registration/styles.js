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
      width: 280px;
      height: 60px;
      border-radius: 15px;
      background: #618a95;
      color: #fff;
      font-size: 24px;
      cursor: pointer;
    }
  }
`;

export const CourseRegistrationFilters = styled.div`
  width: 1100px;
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
    width: 350px;
    height: 30px;
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
    width: 550px;
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
`;

export const RegistrationCourseTable = styled.table`
  width: 1100px;
  margin-left: 20px;
  margin-bottom: 100px;

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
    border: 1px solid #cccccc;

    tr {
      height: 45px;

      :nth-child(2n) {
        background: #cccccc;
      }
    }
  }
`;
