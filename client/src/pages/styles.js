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
  }
`;

export const GPALink = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;

  a {
    padding: 1rem;
    color: #f6f6f6;
    border-radius: 50px;
    background: rgba(43, 103, 119, 0.6);
    min-width: 225px;
    text-align: center;
  }
`;
