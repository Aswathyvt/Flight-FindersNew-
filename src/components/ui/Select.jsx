import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export const Select = ({ sortBy, setSortBy }) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "price", label: "Price" },
    { value: "departureTime", label: "Departure Time" },
    { value: "duration", label: "Duration" },
  ];

  const handleSelect = (value) => {
    setSortBy(value);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative">
      {/* Selected Value Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white text-black px-4 py-2 rounded-full flex items-center border border-gray-300 shadow-sm w-40 justify-between"
      >
        <span>
          {options.find((opt) => opt.value === sortBy)?.label || "Price"}
        </span>
        <FaChevronDown
          className={`ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {/* Dropdown Options */}
      {isOpen && (
        <ul className="absolute left-0 mt-1 w-40 bg-black border border-gray-300 rounded-md shadow-lg z-50">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-4 py-2 cursor-pointer hover:bg-blue-500"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
