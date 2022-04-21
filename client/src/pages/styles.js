import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 200px 0;

  .body {
    display: flex;
    justify-content: space-between;
  }

  .qa {
    .question {
      margin-top: 50px;
      margin-bottom: 10px;
      font-size: 2rem;
      font-weight: 700;
    }

    .answer {
      font-size: 1rem;
    }
  }

  .useful-links {
    line-height: 2;

    li {
      cursor: pointer;
    }
  }

  .ask-q {
    width: 600px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;

    textarea {
      width: 100%;
      resize: none;
      border-radius: 5px;
      border: 1px solid #2b6777;
      padding: 10px;
      margin-bottom: 2px;
    }

    button {
      background: #2b677760;
      color: #fff;
      padding: 10px 0;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 600;
      outline: none;
    }
  }
`;

export const GPALink = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 30px;

  .link {
    padding: 1rem;
    color: #f6f6f6;
    border-radius: 50px;
    background: rgba(43, 103, 119, 0.6);
    min-width: 225px;
    text-align: center;
  }

  .upcoming-event {
    flex: 1;

    a {
      border: 1px solid #2b6777;
      border-radius: 5px;
      padding: 10px;
      cursor: pointer;
      font-weight: 600;
      color: #2b6777;
    }
  }
`;
