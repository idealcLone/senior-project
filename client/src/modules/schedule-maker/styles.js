import styled from 'styled-components';

export const ScheduleMakerContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  position: relative;

  .button-container {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;

    button {
      border: none;
      background: #2b677799;
      color: #fff;
      font-weight: 600;
      font-size: 14px;
      border-radius: 5px;
      padding: 8px 15px;
      cursor: pointer;
    }
  }

  .calendar {
    border: 1px solid #2b677799;
  }

  .add-course {
    z-index: 20;
    position: absolute;
    right: 0;
    top: 8%;
    width: 200px;
    height: 500px;
    background: #fff;

    div {
      height: 100%;
      width: 100%;
      background: #2b677760;
      color: #fff;
      border-radius: 5px 0;
      display: flex;
      flex-direction: column;

      .form {
        flex: 1;
      }

      button {
        background: #fff;
        color: #2b6777;
        border: 1px solid #2b6777;
        border-top: none;
      }
    }
  }
`;
