import styled from "styled-components";

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RadioGroup = styled.ul`
  margin: 75px 0 35px 250px;
  list-style: none;

  display: flex;
  flex-direction: row;
`

export const RadioItem = styled.li`
  width: 200px;
  height: 70px;
  border: 1px solid #000000;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => props.selected ? '#fff' : '#000'};
  background-color: ${props => props.selected ? '#1A5DAB' : '#fff'};

  border-right: none;

  :last-child {
    border-right: 1px solid #000000;
  }

  :hover {
    cursor: pointer;
  }
`

export const List = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin-bottom: 75px;
`

export const ListItem = styled.li`
  width: 30%;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  color: #000000;

  border: 1px solid #000000;
  border-bottom: none;

  :last-child {
    border-bottom: 1px solid #000000;
  }
`