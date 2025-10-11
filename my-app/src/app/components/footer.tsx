'use client'
import Secret from "./secret";

const footer = () => {
    return (
        <div className="flex items-center absolute  w-full bg-black h-10 ">
            <Secret />
        </div>
    )
}
export default footer;