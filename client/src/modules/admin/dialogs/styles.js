import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  z-index: 2;
  width: 50%;
  height: 70%;
  background-color: #ffffff;
  padding: 10px;

  .dialog-header {
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }

  .dialog-body {
    max-height: 80%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    
    .field {
      width: 50%;

      label {
        display: block;
        margin-bottom: 2px;
      }

      input[type='text'] {
        width: 250px;
        height: 30px;
        padding: 5px 8px;
        margin-bottom: 15px;
        flex: 0;
      }

      select {
        width: 250px;
        height: 30px;
        padding: 5px 8px;
        outline: none;
        margin-bottom: 15px;
        flex: 1;
      }
    }
  }
`

export const CheckboxGroup = styled.ul`
  list-style: none;

  display: inline-flex;
  flex-direction: row;
`

export const CheckboxItem = styled.li`
  width: 100px;
  height: 30px;
  border: 1px solid #000000;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => props.checked ? '#fff' : '#000'};
  background-color: ${props => props.checked ? '#1A5DAB' : '#fff'};

  border-right: none;

  :last-child {
    border-right: 1px solid #000000;
  }

  :hover {
    cursor: pointer;
  }
`

export const ButtonGroup = styled.div`
  position: absolute;
  bottom: 2%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;
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