import { useState } from 'react';
import Table from "./Table";

function SortableTable (props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config,data } = props;

  const handleClick = (label) => {
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

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    const getIcons = (label, sortBy, sortOrder) => {
      if (label !== sortBy) {
        return 'Show both icons';
      }
      
      if (sortOrder === null) {
        return 'Show both Icons';
      } else if (sortOrder === 'asc') {
        return 'Show up Icon';
      } else if (sortOrder === 'desc') {
        return 'Show down Icon';
      }
    }

    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </th>
      ),
    }
  });

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


  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
}

export default SortableTable;