import React from "react";
import { MainGrid, GridItem, Filters, SearchBar } from "../../styles";
import { useState, useCallback, useEffect } from "react";
import KundeLogo from "../../media/img/kunde.jpg";
import HPLogo from "../../media/img/hp.png";
import freeflowLogo from "../../media/img/freeflow.png";
import magnumLogo from "../../media/img/magnum.png";
import vesnaLogo from "../../media/img/vesna.png";
import a4Logo from "../../media/img/a4.png";
import { useHistory } from "react-router";

const cafes = [
  {
    id: 0,
    name: "Kunde Cafe",
    img: KundeLogo,
  },
  {
    id: 1,
    name: "Health Project",
    img: HPLogo,
  },
  {
    id: 2,
    name: "Free Flow",
    img: freeflowLogo,
  },
  {
    id: 3,
    name: "Magnum",
    img: magnumLogo,
  },
  {
    id: 4,
    name: "Vesna",
    img: vesnaLogo,
  },
  {
    id: 5,
    name: "A4",
    img: a4Logo,
  },
];

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
  }, []);

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
              <img src={cafe.img} alt="" />
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
