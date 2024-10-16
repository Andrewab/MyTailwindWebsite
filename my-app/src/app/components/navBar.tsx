'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import DropDownMenu from './dropDownMenu';
import MyLinks from './myLinks';

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isOverHomeButton, setIsOverHomeButton] = useState(false);
  const [isOverDropDown, setIsOverDropDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // You can add your scroll handling logic here if needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-blue-800 bg-opacity-95 flex items-center justify-between">
      <div className='fixed top-0'>
        <img
          src="/images/menuBars.png"
          className="w-16 h-16 hover-pulse"

          alt="Home"

          onClick={() => setShowDropDown(true)}
        />
      <style jsx>{`
        @keyframes pulse {
          0% {
            filter: hue-rotate(0deg);
          }
          100% {
            filter: hue-rotate(360deg);
          }
        }

        .hover\:pulse:hover {
          animation: pulse 2s linear infinite;
        }
      `}</style>
        {showDropDown && (
          <DropDownMenu
            onMouseLeave={() => setShowDropDown(false)}
            showDropDownMenu={showDropDown}
          />
        )}

      </div>
      <div className='fixed right-2'>
        <MyLinks />
      </div>

    </div>
  );
};

export default Navbar;
