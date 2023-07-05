import {useState} from 'react';
import './ToggleGroup.css';

function ToggleGroup({options}) {
  const [activeOption, setActiveOption] = useState(options[0]);

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="toggle-group flex gap-2">
      {options.map((option) => (
        <button
          key={option}
          className={option === activeOption ? 'active text-sm' : 'text-sm'}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default ToggleGroup;