import React from 'react';

export const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Szukaj po imieniu"
      value={filter}
      onChange={handleFilterChange}
    />
  );
};
