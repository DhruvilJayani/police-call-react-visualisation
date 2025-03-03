import React, { useState } from 'react';

const DataFilter = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
    onFilterChange(e.target.value);  // Trigger parent component with the new filter
  };

  const filterOptions = [
    { value: 'year', label: 'Year (REPORT_DATE)' },
    { value: 'priority', label: 'Priority' },
    { value: 'callType', label: 'Call Type' },
    { value: 'offenseType', label: 'Offense Type (CALL_TYPE / FINAL_DISPO)' },
    { value: 'timeOfDay', label: 'Time of Day (OFFENSE_TIME)' },
  ];

  return (
    <div>
      <label htmlFor="filter">Choose a filter:</label>
      <select id="filter" value={selectedFilter} onChange={handleFilterChange}>
        <option value="">Select Filter</option>
        {filterOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DataFilter;
