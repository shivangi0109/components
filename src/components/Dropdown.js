import { useEffect, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      console.log(event.target);
    }

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // Close Dropdown
    setIsOpen(false);
    // What option did the user click on?
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return <div key={option.value} onClick={() => handleOptionClick(option)} className="hover:bg-sky-100 rounded cursor-pointer p-1">{option.label}</div>
  });

  return (
    <div className="w-48 relative">
      <Panel onClick={handleClick} className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full">
        {value?.label || 'Select...'}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}

export default Dropdown;