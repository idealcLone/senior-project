import styled from "styled-components";

export const Mask = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: inherit;
`

export const SearchBar = styled.input`
  display: flex;
  padding: 10px 15px;
  min-width: 300px;
  align-items: center;
  border-radius: 25px;
  border: 1px solid #000;
`