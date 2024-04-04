import { useState } from "react";

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
    return <div key={option.value} onClick={() => handleOptionClick(option)}>{option.label}</div>
  });

  return (
    <div>
      <div onClick={handleClick}>
        {value?.label || 'Select...'}
      </div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;