import React from "react";
import { useParams } from "react-router";
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
import { cafes } from "./data";
import { CartProvider } from "./CartContext";

const filters = ["Pizzas", "Burgers", "Sandwiches", "Soups"];

const CafePage = () => {
  const { id } = useParams();

  const [cafe, setCafe] = React.useState({});
  const [selectedFilter, setSelectedFilter] = React.useState("Burgers");

  const getCafe = React.useCallback(() => {
    setCafe(cafes[id]);
  }, [id]);

  React.useEffect(() => {
    getCafe();
  }, [getCafe]);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <CartProvider>
      <CafeContainer>
        <div>
          <CafeHeader>
            <CafeTitle>{cafe.name}</CafeTitle>
            <CafeContacts>
              <div>Address: {cafe.location}</div>
              <div>Contact number: {cafe.phone_number}</div>
            </CafeContacts>
          </CafeHeader>
          <CafeFilters>
            {filters.map((filter) => (
              <span key={filter} onClick={() => handleFilterClick(filter)}>
                <CafeFilter className={selectedFilter === filter && "active"}>
                  {filter}
                </CafeFilter>
              </span>
            ))}
          </CafeFilters>
          <div className="cafe__menu">
            <MenuItem />
            <MenuItem />
          </div>
        </div>
        <Cart />
      </CafeContainer>
    </CartProvider>
  );
};

export default CafePage;
