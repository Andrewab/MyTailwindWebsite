'use state'

const entryElement = () => {
    return (
    <div className="flex-row border-solid border-2 border-black place-items-stretch mx-auto w-3/5  shadow-2xl flex  bg-blue-800 bg-opacity-10">
        <div className="border-solid border-2 border-black flex-1">
            <div className="pl-20 pr-20 pt-5 pb-5 text-center font-roboto font-semibold text-4xl text-gray-200 bg-blue-600">
                <div >About me</div>
            </div>
            <div className="p-10 text-2xl font-roboto indent-8">
                <p>
                    I am a graduate from the University of Puget Sound and CoFounder of Gandit Games Partnership. My interests lie in understanding the world through nature and society. I have a passion to create engaging and thought-provoking experiences through technology.</p>
                <p className="pt-2"></p>
                <p> 
                    As Cofounder of Gandit Games Partnership. I strive to create innovative and immersive gaming experiences that challenge players' perspectives and encourage critical thinking.</p>
                <p className="pt-2"></p>
                <p>
                    If you are interested in collaborating or learning more about my work, feel free to reach out!</p>
            </div>

        </div>
        <div className="border-solid border-2 border-black flex-1">
            <div className="pl-20 pr-20 pt-5 pb-5 text-center font-roboto font-semibold text-4xl text-gray-200 bg-blue-600">
                <p>Skills</p>
            </div>
            <div className=" p-10 flex-col text-center font-roboto text-xl align-top">
                    <p className="font-bold">Languages & Scripting</p>
                    <div>JavaScript - Python3 - Java - C - C# - SQLLite - Git - Bash</div>
                    <p className="font-bold">Applications</p>
                    <div>Excel - Adobe Premier Pro - Unity - Github - VSCode - Jira</div>
                    <p className="font-bold">Operating Systems</p>
                    <div>Windows 10 - MacOS - Ubuntu Linux</div>
                    <p className="font-bold">Problem Solving</p>
                    <div>List Comprehension - Algorithms - O(n) - Formal Logic(TFL)</div>
                    <p className="font-bold">Workflow Strategies</p>
                    <div>Scrum - AGILE Project Management</div>
            </div>
        </div>
    </div>
    )
}
export default entryElement;