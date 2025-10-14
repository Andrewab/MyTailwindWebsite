'use state'

import AboutMe from "./aboutMe";
import Skills from "./skills";

const EntryElement = () => {
    return (
    <div className="grid grid-cols-1 justify-items-center">
        <div className="p-5 xl:w-1/4 md:w-1/2"><AboutMe/></div>
        <div className="p-5 xl:w-1/3 md:w-1/2"><Skills/></div>
    </div>
    )
}
export default EntryElement;