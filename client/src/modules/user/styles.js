import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 30%;
  min-width: 350px;
  margin: 100px auto 0;
  padding: 20px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;

  .field {
    width: 80%;
    margin: 0 auto 30px;

    label {
      display: block;
      margin-bottom: 20px;
    }

    input {
      width: 100%;
      padding: 10px;
    }

    select {
      width: 100%;
      padding: 10px;
      outline: none;
    }

    .submit-btn {
      width: 60%;
      padding: 10px 0;
      text-align: center;
      border: 1px solid #000;
      margin: 0 auto;
      border-radius: 5px;
      background: #f6f6f6;
      cursor: pointer;
    }
  }
`;

export const CalendarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 20px 0;
  text-align: center;

  h2 {
    padding-bottom: 20px;
  }
`;

export const Paper = styled.div`
  width: 100%;
  height: 100%;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
`;

export const DeadlineContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeadlineDialog = styled.div`
  width: 70%;
  min-width: 350px;
  height: 80%;
  min-height: 600px;
  background: #fff;
  z-index: 5;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;

  .form {
    flex: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2rem 0;

    textarea,
    input {
      outline: none;
      padding: 0.9rem;
    }

    textarea,
    input[type='text'] {
      width: 350px;
    }

    textarea {
      resize: none;
    }

    .is-active-checkbox {
      display: flex;
      align-items: center;

      label {
        padding-right: 10px;
      }

      #is-active:checked {
        color: green;
        padding: 2rem;
      }
    }

    .date-group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 350px;

      input {
        width: 170px;
      }
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      width: 100px;
      padding: 1rem;
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
    }

    div:last-child {
      margin-left: 10px;
    }

    .button-save {
      background: cornflowerblue;
    }

    .button-delete {
      background: red;
    }

    .button-update {
      background: lightgreen;
    }
  }
`;
