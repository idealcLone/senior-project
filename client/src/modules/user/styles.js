import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 30%;
  min-width: 350px;
  margin: 100px auto 0;
  padding: 20px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;

  .field {
    width: 80%;
    margin: 0 auto 30px;

    label {
      display: block;
      margin-bottom: 20px;
    }

    input {
      width: 100%;
      padding: 10px;
    }

    select {
      width: 100%;
      padding: 10px;
      outline: none;
    }

    .submit-btn {
      width: 60%;
      padding: 10px 0;
      text-align: center;
      border: 1px solid #000;
      margin: 0 auto;
      border-radius: 5px;
      background: #F6F6F6;
      cursor: pointer;
    }
  }
`