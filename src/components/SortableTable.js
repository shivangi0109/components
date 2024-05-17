import { useState } from 'react';
import { GoArrowUp, GoArrowDown } from "react-icons/go";
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
        return (
          <div>
            <GoArrowUp />
            <GoArrowDown />
          </div>
        );
      }

      if (sortOrder === null) {
        return (
          <div>
            <GoArrowUp />
            <GoArrowDown />
          </div>
        );
      } else if (sortOrder === 'asc') {
        return (
          <div>
            <GoArrowUp />
          </div>
        );
      } else if (sortOrder === 'desc') {
        return (
          <div>
            <GoArrowDown />
          </div>
        );
      }
    }

    return {
      ...column,
      header: () => (
        <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(column.label)}>
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
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