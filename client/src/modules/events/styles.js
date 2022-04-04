import styled from 'styled-components';

export const SwitchWrapper = styled.div`
  position: relative;
`;

export const SwitchLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;

  &::after {
    content: 'Grid';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    text-indent: 30px;
    color: #f4f4f4;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const Switch = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${SwitchLabel} {
    background: #000;
    &::after {
      content: 'Calendar';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 80px;
      text-indent: -75px;
      transition: 0.2s;
    }
  }
`;

export const EventContainer = styled.div`
  padding-top: 50px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  img {
    max-width: 370px;
  }

  .event-info {
    width: calc(100% - 450px);
    display: flex;
    flex-direction: column;

    > div {
      display: flex;
      padding-bottom: 50px;
    }

    .event-header {
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;

      h2 {
        font-size: 3rem;
        font-weight: 500;
        text-transform: uppercase;
        padding-right: 50px;
      }

      h3 {
        flex: 50%;
        font-size: 1rem;
        color: #b8b8b8;
        padding-bottom: 8px;
      }

      .add-btn {
        padding: 1rem;
        background-color: blueviolet;
        color: #fff;
        font-size: 1rem;
        border-radius: 5px;
        cursor: pointer;
      }
    }

    .event-date {
      width: 50%;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const CalendarContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 0 20px 50px;
`;

export const Paper = styled.div`
  width: 100%;
  height: 100%;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
`;
