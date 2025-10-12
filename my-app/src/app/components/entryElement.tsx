'use state'

const entryElement = () => {
    return (
    <div className="max-w-2xl m-auto">
        <div className="flex pt-5 pb-5">
            <div className="">
                <div className="shadow-xl bg-blue-800 bg-opacity-10">
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
            <div className="shadow-xl bg-blue-800 bg-opacity-10">
                <div className="">
                    <div className="pl-10 pr-10 pt-5 text-center font-mono font-semibold text-2xl text-blue-800 ">
                        <p>Skills: </p>
                    </div>
                    <div className="pl-5 pr-5 pt-5 text-l text-black font-mono text-center">
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
    </div>
    )
}
export default entryElement;