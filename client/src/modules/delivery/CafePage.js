import React from "react";
import { useParams } from "react-router";
import KundeLogo from "../../media/img/kunde.jpg";
import HPLogo from "../../media/img/hp.png";
import freeflowLogo from "../../media/img/freeflow.png";
import magnumLogo from "../../media/img/magnum.png";
import vesnaLogo from "../../media/img/vesna.png";
import a4Logo from "../../media/img/a4.png";
import MenuItem from "./MenuItem";
import Cart from "./Cart";
import {
  CafeFilter,
  CafeFilters,
  CafeContacts,
  CafeContainer,
  CafeHeader,
  CafeTitle,
} from "./styles";
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

const CafePage = () => {
  const { id } = useParams();
  return (
    <CafeContainer>
      <div>
        <CafeHeader>
          <CafeTitle>{cafes[id]?.name}</CafeTitle>
          <CafeContacts>
            <div>Address: Block C2</div>
            <div>Contact number: +77761222773</div>
          </CafeContacts>
        </CafeHeader>
        <CafeFilters>
          <CafeFilter>Pizzas</CafeFilter>
          <CafeFilter className="active">Burgers</CafeFilter>
          <CafeFilter>Sandwiches</CafeFilter>
          <CafeFilter>Soups</CafeFilter>
        </CafeFilters>
        <div className="cafe__menu">
          <MenuItem />
          <MenuItem />
        </div>
      </div>
      <Cart />
    </CafeContainer>
  );
};

export default CafePage;
