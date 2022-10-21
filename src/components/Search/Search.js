import React, { useState, useEffect } from 'react';
// import { BASE_URL } from '../../config';
import SearchItems from './SearchItems';
import '../Search/Search.scss';

function Search({ isSearchOn, handleSearchBarOn }) {
  const [userInput, setUserInput] = useState('');
  const [userSearch, setUserSearch] = useState([]);

  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

  useEffect(() => {
    fetch(`${PROXY}/products/1000?search=${userInput}`)
      .then(response => response.json())
      .then(result => {
        setUserSearch(result.products_data);
      });
  }, [PROXY, userInput]);

  const handleChange = e => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const filterInputValue = userSearch.filter(search => {
    return search.name.includes(userInput);
  });

  return (
    <div
      className={
        isSearchOn ? 'searchBarContainer active' : 'searchBarContainer default'
      }
    >
      <div className="searchBarWrapper">
        <div className="searchBarHeader">
          <input
            type="text"
            placeholder="검색어를 입력해주세요"
            onChange={handleChange}
          />
          <i className=" fa fa-light fa-magnifying-glass fa-2x" />
        </div>
        <div className="searchResultContainer">
          {userInput.length > 0 ? (
            filterInputValue.map(list => {
              return (
                // eslint-disable-next-line react/jsx-key
                <SearchItems
                  key={list.id}
                  list={list}
                  handleSearchBarOn={handleSearchBarOn}
                />
              );
            })
          ) : (
            <div className="searchBarRecentContainer">
              <section className="searchBarRecentItems">
                <h3>검색어를 입력해주세요</h3>
              </section>
            </div>
          )}
        </div>
        <i className="fa fa-duotone fa-xmark fa-2x" onClick={handleSearchBarOn}>
          X
        </i>
      </div>
    </div>
  );
}

export default Search;
