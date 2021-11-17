import styled from 'styled-components'

export const MainGrid = styled.div`
  max-width: 80%;
  margin: 50px auto;

  display: flex;
  flex-wrap: wrap;
`

export const GridItem = styled.div`
  max-width: 350px;
  flex: 33%;
  background: #fff;
  text-align: center;
  padding-bottom: 50px;
  margin-right: 50px;

  img {
    width: 300px;
  }
`

export const Filters = styled.div`
  padding-top: 50px;
  padding-bottom: 30px;

  width: 80%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .date-filters {
    display: flex;
    align-items: center;

    > div {
      padding-right: 10px;
    }

    input[type='date'] {
      width: 200px;
      height: 30px;
      padding: 15px 10px;
    }

    .separator {
      font-weight: 700;
    }
  }
`

export const SwitchWrapper = styled.div`
  position: relative;
`

export const SwitchLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`

export const Switch = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${SwitchLabel} {
    background: #000;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`

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
    
    .event-name {
      width: 100%;
      display: flex;
      align-items: flex-end;

      h2 {
        font-size: 3rem;
        font-weight: 500;
        text-transform: uppercase;
        padding-right: 50px;
      }
      
      h3 {
        font-size: 1rem;
        color: #B8B8B8;
        padding-bottom: 8px;
      }
    }
    
    .event-date {
      width: 50%;
      display: flex;
      justify-content: space-between;
    }
  }
`

export const CalendarContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 0 20px 50px;
`

export const Paper = styled.div`
  width: 100%;
  height: 100%;
  border: .5px solid rgba(0, 0, 0, .2);
`