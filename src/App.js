import React, { useState } from 'react';
import './App.css';
import LookerEmbed from './LookerEmbed';
import StreamlitEmbed from './StreamlitEmbed';
import DataFilter from './DataFilter';

function App() {
  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = (newFilterValue) => {
    setFilterValue(newFilterValue);
  };

  return (
    <div className="App">
      <h1>Data Visualization App with Looker Studio</h1>
      
      {/* Filter Dropdown */}
      <DataFilter onFilterChange={handleFilterChange} />

      {/* Embed Looker Studio with optional query params */}
      <LookerEmbed filter={filterValue} />
      <StreamlitEmbed filter={filterValue} />
    </div>
  );
}

export default App;
