import { useEffect, useState } from "react";
import Link from "next/link";
interface MenuButtonProps {
    text: string;
    link: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ text, link }) => {
    const [isInvert, setIsInvert] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Toggle between "true" and "false" every 250 milliseconds
            setIsInvert(isInvert => !isInvert);
        }, 250);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run once on mount and clean up on unmount

    return (
        // <div className={`outline-gray-800 outline ${isInvert ? "outline-dashed" : "outline-dotted"}`}>
        //     <span className={`text-gray-800`}>
        //         {text}
        //     </span>
        // </div>
        <Link href={link} className="group relative inline-block overflow-hidden rounded border border-gray-100 bg-gray-200  px-12 py-3 text-sm font-medium text-slate-800 hover:bg-gray-300 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white">
	<span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-200 group-hover:w-full"></span>
	<span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span>
	<span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-violet-600 transition-all duration-200 group-hover:w-full"></span>
	<span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span>
	{text}
</Link>
    );
};

export default MenuButton;
