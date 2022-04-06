import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  z-index: 2;
  width: 1000px;
  height: 600px;
  background-color: #ffffff;
  padding: 10px;

  .dialog-header {
    width: 100%;
    text-align: center;
    padding: 10px 0;
    font-weight: 700;
  }

  .bold {
    font-weight: 700;
  }

  .dialog-body {
    height: 80%;
    width: 100%;
    overflow-y: auto;

    /* width */
    ::-webkit-scrollbar {
      width: 4px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #fff;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    .image-field {
      flex: 1;

      img {
        display: block;
        max-width: 400px;
        max-height: 400px;
      }
    }

    hr {
      margin: 10px 0;
    }

    .lectures {
      h2 {
        text-align: center;
        margin-bottom: 5px;
      }
      ul {
        list-style: none;

        li {
          padding: 5px 0;
        }
      }
    }

    .form-data {
      display: flex;
      flex-wrap: wrap;

      .centered {
        display: flex;
        align-items: center;
      }

      .field {
        flex: 50%;
        align-items: center;

        ul {
          list-style: none;
        }

        label {
          display: block;
          margin-bottom: 2px;
        }

        input[type='text'],
        input[type='number'],
        input[type='time'] {
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

        Button {
          margin-left: 10px;
          height: 30px;
        }

        textarea {
          padding: 0.5rem;
        }
      }

      .syllabus-field {
        padding-right: 40px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;

        label {
          flex: 100%;
        }

        .submit-syllabus {
          padding: 0.5rem 1rem;
          background-color: cornflowerblue;
          color: #fff;
          cursor: pointer;
          border-radius: 5px;
          display: flex;
          align-items: center;
        }
      }
    }
  }
`;

export const CheckboxGroup = styled.ul`
  list-style: none;

  display: inline-flex;
  flex-direction: row;
`;

export const CheckboxItem = styled.li`
  width: 100px;
  height: 30px;
  border: 1px solid #000000;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => (props.checked ? '#fff' : '#000')};
  background-color: ${props => (props.checked ? '#1A5DAB' : '#fff')};

  border-right: none;

  :last-child {
    border-right: 1px solid #000000;
  }

  :hover {
    cursor: pointer;
  }
`;

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
`;

export const Button = styled.button`
  width: 100px;
  color: ${props => (props.delete ? '#ffffff' : '#000000')};
  background-color: ${props => (props.delete ? 'red' : '#F6F6F6')};

  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);

  font-size: 0.875rem;
  padding: 10px 15px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
