import styled from "styled-components";

export const FooterDiv = styled.footer`
  min-height: 125px;
  width: 100%;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #000000;
`

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Checkbox = styled.div`
  max-width: 100px;
  height: 30px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  div {
    width: 15px;
    height: 15px;
    background-color: ${props => props.checked ? '#1A5DAB' : '#fff'};
    border-radius: 3px;
    border: 1px solid #000000;
  }
`

export const Radio = styled.div`
  display: flex;
  justify-content: space-between;
  
  width: 10%;
  
  div {
    width: 15px;
    height: 15px;
    background-color: ${props => props.clicked ? '#1A5DAB' : '#fff'};
    border-radius: 50px;
    border: 1px solid #000000;
  }
`