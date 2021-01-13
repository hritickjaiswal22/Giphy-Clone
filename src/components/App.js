import React, { useState } from 'react';

import Header from './Header';
import GifGallery from './GifGallery';

import '../styles/App.css';

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  const fetchSearchValue = (value) => {
    setSearchValue(value);
  };

  return (
    <main>
      <Header fetchSearchValue={fetchSearchValue} />
      <GifGallery searchValue={searchValue} />
    </main>
  );
};

export default App;
