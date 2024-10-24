import React, { useState } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io'; // Import the down arrow icon
import Option1Page from './Option1Page'; // Import your option pages
import Option2Page from './Option2Page';
import Option3Page from './Option3Page';
import Option4Page from './Option4Page';

const Navbar = () => {
  const [hoveredOption, setHoveredOption] = useState(null);

  const handleMouseEnter = (option) => {
    setHoveredOption(option);
  };

  const handleMouseLeave = () => {
    setHoveredOption(null);
  };

  const renderOptionPage = () => {
    switch (hoveredOption) {
      case 'Option 1':
        return <Option1Page />;
      case 'Option 2':
        return <Option2Page />;
      case 'Option 3':
        return <Option3Page />;
      case 'Option 4':
        return <Option4Page />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="bg-black h-16 flex justify-between items-center px-4">
        {/* Logo */}
        <img src="https://o9solutions.com/wp-content/uploads/2020/09/o9-logo.svg" alt="Your Logo" className="h-8 mr-4" />

        {/* Options */}
        <ul className="flex list-none justify-center">
          <li onMouseEnter={() => handleMouseEnter("Option 1")} onMouseLeave={handleMouseLeave} className="cursor-pointer text-white mr-4 relative">
            Solutions <IoIosArrowDropdown className="absolute top-1/2 right-0 transform -translate-y-1/2" />
          </li>
          <li onMouseEnter={() => handleMouseEnter("Option 2")} onMouseLeave={handleMouseLeave} className="cursor-pointer text-white mr-4 relative">
            Industries <IoIosArrowDropdown className="absolute top-1/2 right-0 transform -translate-y-1/2" />
          </li>
          <li onMouseEnter={() => handleMouseEnter("Option 3")} onMouseLeave={handleMouseLeave} className="cursor-pointer text-white mr-4 relative">
            Resources <IoIosArrowDropdown className="absolute top-1/2 right-0 transform -translate-y-1/2" />
          </li>
          <li onMouseEnter={() => handleMouseEnter("Option 4")} onMouseLeave={handleMouseLeave} className="cursor-pointer text-white mr-4 relative">
            Company <IoIosArrowDropdown className="absolute top-1/2 right-0 transform -translate-y-1/2" />
          </li>
        </ul>

        {/* Request a Demo Button */}
        <button className="bg-white text-black px-4 py-2 rounded cursor-pointer">Request a Demo</button>
      </div>

      {/* Content */}
      {hoveredOption && (
        <div className="bg-white p-4">
          {renderOptionPage()}
        </div>
      )}
    </div>
  );
};

export default Navbar;
