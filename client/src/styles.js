import styled from 'styled-components';

export const Mask = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: inherit;
`;

export const SearchBar = styled.input`
  display: flex;
  padding: 10px 15px;
  min-width: 300px;
  align-items: center;
  border-radius: 25px;
  border: 1px solid #000;
`;

export const MainGrid = styled.div`
  width: 80%;
  margin: 50px auto;

  display: flex;
  flex-wrap: wrap;
  gap: 70px;
  align-items: center;
`;

export const GridItem = styled.div`
  width: 350px;
  background: #fff;
  text-align: center;
  cursor: pointer;

  img {
    width: 350px;
    height: 430px;
    object-fit: cover;
  }
`;

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
`;
