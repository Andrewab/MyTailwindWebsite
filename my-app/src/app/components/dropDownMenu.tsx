import Link from "next/link";
import React from 'react';

interface DropDownMenuProps {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    showDropDownMenu: boolean;
  }

const DropDownMenu: React.FC<DropDownMenuProps> = ({ onMouseEnter, onMouseLeave, showDropDownMenu }) => {
  return (
    <div className={`inline-block border-2 border-gray-800 relative left-2 dropdown-menu ${showDropDownMenu ? 'slide-down' : 'slide-up'}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Link href="extraFiles/MyResume.pdf">
        My Resume
      </Link>
      <style jsx>{`
        @keyframes slide-down {
          0% {
            transform: scaleY(0);
          }
          100% {
            transform: scaleY(1);
          }
        }

        @keyframes slide-up {
          0% {
            transform: scaleY(1);
          }
          100% {
            transform: scaleY(0);
          }
        }

        .dropdown-menu {
          animation-duration: 0.3s;
          animation-timing-function: ease-out;
          transform-origin: top;
        }

        .slide-down {
          animation-name: slide-down;
        }

        .slide-up {
          animation-name: slide-up;
        }
      `}</style>
    </div>
  );
};

export default DropDownMenu;
