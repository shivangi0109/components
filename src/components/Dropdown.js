import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

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
      <div onClick={handleClick} className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full">
        {value?.label || 'Select...'}
        <GoChevronDown className="text-lg" />
      </div>
      {isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;