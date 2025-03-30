import React, { useState } from 'react';
import './App.css';
import LookerEmbed from './LookerEmbed';
import StreamlitEmbed from './StreamlitEmbed';
import StreamlitEmbedMap from './StreamlitEmbedMap';
import DataFilter from './DataFilter';

function App() {
  const [filter, setFilter] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = (newFilter, newValue) => {
    setFilter(newFilter);
    setFilterValue(newValue);
  };

  return (
    <div className="App">
      <h1>Data Visualization App with Looker Studio</h1>
      
      {/* Filter Dropdown */}
      <DataFilter onFilterChange={handleFilterChange} />

      {/* Embed Looker Studio and Streamlit with filters */}
      <LookerEmbed filter={filter} filterValue={filterValue} />
      <StreamlitEmbed filter={filter} filterValue={filterValue} />
      
      {/* Embed the Map Streamlit app with filters */}
      <StreamlitEmbedMap filter={filter} filterValue={filterValue} />
    </div>
  );
}

export default App;
