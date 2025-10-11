'use state'

const entryElement = () => {
    return (
    <div className="flex p-10">
        <div className="pb-10">
            <div className="border-solid mx-auto w-2/6  bg-blue-800 bg-opacity-10">
                    <div className="pl-10 pr-10 pt-5 text-center font-mono font-semibold text-2xl text-blue-800 ">
                        <div >About me: </div>
                    </div>
                    <div className="p-5 text-l text-black font-mono">
                        <p>
                            CoFounder and head Unity Developer at Gandit Games Partnership.</p>
                        <p className="pt-2"></p>
                        <p>
                            Focus in game development, UI/UX design, and interactive storytelling.</p>
                        <p className="pt-2"></p>
                        <p>
                            If you are interested in collaborating or learning more about my work, feel free to reach out!</p>
                    </div>
            </div>
        </div>
        <div className="border-solid border-8 rounded-2xl border-black place-items-stretch mx-auto w-2/5  shadow-2xl flex  bg-blue-800 bg-opacity-70">
            <div className="border-solid border-2 border-black flex-1">
                <div className="pt-5 pb-5 text-center font-mono font-semibold text-4xl text-gray-200 bg-blue-600">
                    <p>Skills</p>
                </div>
                <div className="p-10 flex-col text-gray-200 text-center font-mono text-xl align-top">
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
    </div>
    )
}
export default entryElement;