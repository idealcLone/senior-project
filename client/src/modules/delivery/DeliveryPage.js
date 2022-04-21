import React from 'react';
import { MainGrid, GridItem, Filters, SearchBar } from '../../styles';
import { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router';
import api from '../../utils/api';

const DeliveryPage = () => {
  const history = useHistory();

  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const onCafeClick = cafe => {
    history.push(`/delivery/${cafe.id}`);
  };

  const getCafes = useCallback(() => {
    api
      .get('/restaurants/')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    getCafes();
  }, [getCafes]);

  useEffect(() => {
    setFiltered(data.filter(cafe => cafe.name.toLowerCase().includes(searchText.toLowerCase())));
  }, [data, searchText]);

  return (
    <div className="container">
      <Filters>
        <SearchBar
          placeholder={'Enter cafe name'}
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      </Filters>

      <MainGrid>
        {filtered.map(cafe => (
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
