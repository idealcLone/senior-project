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

      > li {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        height: 100%;
        
        a {
          height: 100%;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
        }

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
        z-index: 4;
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

export const Calculator = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  table {
    width: 50%;

    tr {
      background-color: #f6f6f6;

      td {
        width: 33%;
        
        input, select {
          padding: .5rem 1rem;
          border: none;
          outline: none;
        }
        
        input[name="name"] {
          width: 95%;
        }

        input[name="credits"] {
          width: 40%;
          text-align: center;
        }

        input[name="total"] {
          width: 40%;
          text-align: center;
        }
      }

      .delete-data {
        cursor: pointer;
      }
    }
  }
  
  .button-group {
    margin-top: 20px;
    display: flex;
    width: 410px;
    justify-content: space-between;
  }
  
  .button {
    display: inline;
    width: 200px;
    background-color: cornflowerblue;
    color: #fff;
    border-radius: 5px;
    padding: .5rem 1rem;
    text-align: center;
    margin-bottom: 20px;
    cursor: pointer;
  }
  
  .calculate-gpa {
    background-color: lightcoral !important;
  }
  
  .calculated-gpa {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: limegreen;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 600;
    font-size: 1.25rem;
  }
`