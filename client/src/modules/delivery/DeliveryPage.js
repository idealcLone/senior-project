import React from "react";
import { MainGrid, GridItem, Filters, SearchBar } from "../../styles";
import { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import { cafes } from "./data";

const DeliveryPage = () => {
  const history = useHistory();

  const onCafeClick = (cafe) => {
    history.push({
      pathname: `/delivery/${cafe.id}`,
      state: {
        cafe,
      },
    });
  };

  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  const getCafes = useCallback(() => {}, []);

  useEffect(() => {
    getCafes();
  }, [getCafes]);

  useEffect(() => {
    let filtered = cafes.filter((cafe) =>
      cafe.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setData(filtered);
  }, [cafes, searchText]);

  return (
    <div className="container">
      <Filters>
        <SearchBar
          placeholder={"Enter cafe name"}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Filters>

      <MainGrid>
        {data.map((cafe) => (
          <GridItem key={cafe.id} onClick={() => onCafeClick(cafe)}>
            <div className="imgContainer">
              <img src={cafe.image} alt="" />
            </div>
            <div className="event-description">
              <div className="event-name">{cafe.name}</div>
            </div>
          </GridItem>
        ))}
      </MainGrid>
    </div>
  );
};

export default DeliveryPage;
