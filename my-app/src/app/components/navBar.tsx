'use client';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [showHomeButton, setShowHomeButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Always set showHomeButton to true
      setShowHomeButton(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-blue-800 bg-opacity-95 flex items-center justify-between">
      {showHomeButton && (
        <div
          className="pr-2 cursor-pointer italic text-white hover:underline text-2xl font-roboto font-semibold p-2"
          onClick={scrollToTop}
        >
          Home
        </div>
      )}
    </div>
  );
};

export default Navbar;
