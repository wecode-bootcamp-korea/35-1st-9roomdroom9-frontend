import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchItems = ({ list, handleSearchBarOn }) => {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/products/detail/${list.id}`);
    handleSearchBarOn();
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className="searchResult" onClick={goDetail}>
      <img src={list.images[0].url} alt="searchImg" />
      <img
        className="lastImg"
        src={list.images[1]?.url || list.images[0].url}
        alt="searchImg"
      />
      <h2>{list.name}</h2>
    </div>
  );
};

export default SearchItems;
