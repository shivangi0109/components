import { useState } from 'react';

function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  }

  // Only sort data if sortOrder && sortBy are not null
  // Make a copy of the 'data' prop
  // Find the correct sortValue function and use it for sorting

  let sortedData = data;
  if (sortOrder && sortBy) {
    const {sortValue } = config.find(column => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const ValueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if (typeof valueA === 'string'){
        return valueA.localeCompare(ValueB) * reverseOrder;
      } else {
        return (valueA - ValueB) * reverseOrder;
      }
    });
  }

  return {
    sortOrder,
    sortBy,
    sortedData,
    handleClick
  }
}

export default useSort;