import styled from "styled-components";

export const Form = styled.form`
  padding: 50px;
  
  label {
    display: block;
    margin-bottom: 2px;
  }
  
  input[type='text'] {
    width: 250px;
    padding: 5px 8px;
    margin-bottom: 15px;
  }
  
  select {
    width: 250px;
    padding: 5px 8px;
    outline: none;
    margin-bottom: 15px;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 210px;
`

export const Button = styled.button`
  width: 100px;
  color: ${props => props.delete ? '#ffffff' : '#000000'};
  background-color: ${props => props.delete ? 'red' : '#F6F6F6'};
  
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  
  font-size: 0.875rem;
  padding: 10px 15px;
`