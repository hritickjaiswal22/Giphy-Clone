import React, { useState } from 'react';

import '../styles/Header.css';

const Header = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const onInputSubmit = (event) => {
    event.preventDefault();
    props.fetchSearchValue(searchValue);
  };

  return (
    <header>
      <section className="HeaderSection">
        <h1 className="HeaderTitle">GIPHY</h1>
        <div className="HeaderLinks">
          <form onSubmit={onInputSubmit}>
            <input
              value={searchValue}
              onChange={(event) => {
                setSearchValue(event.target.value);
              }}
              className="HeaderInput"
            ></input>
          </form>
        </div>
      </section>
    </header>
  );
};

export default Header;
