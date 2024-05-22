import useSort from "../hooks/use-sort";
import { GoArrowUp, GoArrowDown } from "react-icons/go";
import Table from "./Table";

function SortableTable (props) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, handleClick } = useSort(data, config);

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

  return <Table {...props} data={sortedData} config={updatedConfig} />
}

export default SortableTable;