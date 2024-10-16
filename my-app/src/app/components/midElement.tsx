'use client'
import PaperBlock from "./paperBlock";
import MyLinks from "./myLinks";
const midElement = () => {
    return (
        <div className="justify-start mx-auto flex-1 flex-row p-2">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="text-center pt-2 text-center font-roboto font-semibold text-2xl ">Check out some of my papers if you like Philosophy!</div>
            <br></br>
            <br></br>
            <PaperBlock/>
        </div>
    )
}
export default midElement;