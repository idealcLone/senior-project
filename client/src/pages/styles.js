import styled from "styled-components";

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
`