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
  height: 100%;
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

export const Nav = styled.nav`
  width: 100%;
  background-color: #F6F6F6;
  
  a {
    color: #000;
  }

  .container {
    max-width: 80%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 2.5rem;
      font-weight: 700;
      cursor: pointer;
    }

    > ul {
      height: 100%;
      list-style: none;
      display: flex;
      padding-right: 100px;

      > li {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 2rem;
        cursor: pointer;

        :hover {
          background-color: #c3c3c3;
        }
      }
    }

    .navbar-auth {
      height: 100%;
      cursor: pointer;

      > div {
        height: 100%;
        display: flex;
        align-items: center;
      }

      a {
        padding-right: .2rem;
      }

      .dropdown {
        z-index: 2;
        list-style: none;
        position: absolute;
        border: 1px solid #000;
        padding: 20px 0;
        width: 150px;
        background-color: #fff;

        li {
          width: 100%;
          padding-left: 15px;
          line-height: 2;

          :hover {
            background-color: #c3c3c3;
          }
        }
      }
    }
  }
`