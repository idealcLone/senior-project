import styled from 'styled-components';

export const CourseTable = styled.table`
  width: 80%;
  margin: 0 auto;

  th {
    border: 0.5px solid #2b6777;
    background: #2b677799;
    color: #fff;
  }

  th:nth-child(1) {
    width: 8%;
  }
  th:nth-child(3) {
    width: 20%;
  }
  th:nth-child(4) {
    width: 20%;
  }

  td {
    border: 0.5px solid #2b6777;
    border-top: none;
  }
`;

export const Filters = styled.div`
  padding-top: 50px;
  padding-bottom: 30px;

  width: 80%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .select-group {
    width: 420px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Select = styled.select`
  width: 200px;
  padding: 10px 15px;

  option {
    height: 30px;
  }
`;

export const ShowButton = styled.div`
  width: 200px;
  margin: auto;
  background: #09f;
  color: #f6f6f6;
  text-align: center;
  padding: 15px 0;
  border-radius: 5px;
  cursor: pointer;
`;
