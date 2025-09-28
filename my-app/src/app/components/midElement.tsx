'use client'
import PaperBlock from "./paperBlock";
import MyLinks from "./myLinks";
const midElement = () => {
    return (
        <div className="justify-start mx-auto flex-1 flex-row p-2">
            <div className="text-center pt-2 text-center font-roboto font-semibold text-2xl mt-20">Check out some of my papers if you like Philosophy!</div>
            <PaperBlock/>
        </div>
    )
}
export default midElement;