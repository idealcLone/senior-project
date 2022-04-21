import styled from 'styled-components';

export const RadioGroup = styled.ul`
  width: calc(100% - 200px);
  padding-top: 75px;
  margin: 0 auto;
  list-style: none;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const RadioItem = styled.li`
  max-width: 200px;
  flex: 1;
  height: 70px;
  border: 1px solid #000000;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => (props.selected ? '#fff' : '#000')};
  background-color: ${props => (props.selected ? '#1A5DAB' : '#fff')};

  border-right: none;

  :last-child {
    border-right: 1px solid #000000;
  }

  :hover {
    cursor: pointer;
  }
`;

export const List = styled.ul`
  padding-top: 50px;
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListItem = styled.li`
  width: 30%;
  height: 80px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #000000;

  border: 1px solid #2b6777;
  border-bottom: none;
`;

export const NewButton = styled.div`
  display: flex;
  justify-content: center;

  div {
    font-weight: 600;
    padding: 10px 15px;
    width: 30%;
    border: 1px solid #2b6777;
    cursor: pointer;
    background-color: #1a5dab;
    color: #ffffff;
    text-align: center;
  }
`;

export const Dialog = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-bottom: 50px;
`;
