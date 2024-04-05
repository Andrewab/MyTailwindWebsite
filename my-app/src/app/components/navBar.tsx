'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import DropDownMenu from './dropDownMenu';
const Navbar = () => {
  //const [showHomeButton, setShowHomeButton] = useState(true);
  const [showDropDown, setShowDropDown] = useState(false);
  const [isOverHomeButton, setIsOverHomeButton] = useState(false);
  const [isOverDropDown, setIsOverDropDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Always set showHomeButton to true
      //setShowHomeButton(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleLeave_ = (item:string)=> {
    if (item == "dropDownMenu") {
      setIsOverDropDown(false);
      console.log("Not over DropDown");
    }
    else if (item == "homeButton") {
      setIsOverHomeButton(false);
      console.log("Not over Home button");
    }
    if(!isOverDropDown && !isOverHomeButton) {
      console.log("removing dropdown");
      setShowDropDown(false);
    }
    //console.log("checking dropdown: ",isOverDropDown, isOverHomeButton);
  }
  const handleLeave = () => {
    if(!isOverDropDown) {
      setShowDropDown(false);
    }
    console.log("leaving",isOverDropDown,isOverHomeButton);
  };
  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-blue-800 bg-opacity-95 flex items-center justify-between">
      <div className='fixed top-0'>
        <Image
          src="/images/menuBars.png"
          width={67}
          height={67}
          alt="Home"
          className="pr-2 cursor-pointer italic text-white hover:underline text-2xl font-roboto font-semibold p-2"
          onClick={scrollToTop}
          onMouseEnter={() => { setShowDropDown(true); setIsOverHomeButton(true);}}
          onMouseLeave={() => {setIsOverHomeButton(false);handleLeave();}}
        />
        {showDropDown && (
          <DropDownMenu
            onMouseEnter={() => {setIsOverDropDown(true);if(!isOverDropDown){setShowDropDown(false)} }}
            onMouseLeave={() => {setIsOverDropDown(false);setShowDropDown(false);}}
            showDropDownMenu={showDropDown}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;


/*
        <div
          className="pr-2 cursor-pointer italic text-white hover:underline text-2xl font-roboto font-semibold p-2"
          onClick={scrollToTop}
        >Home</div>

*/