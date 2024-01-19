'use state'

const entryElement = () => {
    return (
    <div className="flex-row items-start mx-auto w-4/5 h-auto border border-purple-800 border-opacity-20 border-2 rounded-lg flex  bg-blue-800 bg-opacity-10">
        <div className="flex-1 flex-col w-1/2 mx-auto">
            <div className="pt-2 text-center font-roboto font-semibold text-2xl ">About me.</div>
            <p className="pl-4 pr-12 text-lg font-roboto">I am a graduate from the University of Puget Sound With a BS in Computer Science and Philosophy. My interests lie in understanding the world through nature and society. With a passion of creating software applications that are interesting, usefully, and most importantly exiting.</p>
            <p className="pt-2"></p>
            <p className="pl-4 pr-12 text-lg font-roboto"> My goals are to expand my knowledge and to learn as much as possible. New technologies, especially within the AI landscape seems effectively helpful at achieving this project. Working to create a safer and more accesible world for everyone regardless of access.</p>
            <p className="pt-2"></p>
            <p className="pl-4 pr-12 text-lg font-roboto"> A pursuit of increasing well being for all, I am fully motivated to create highly impactful tools and applications. Check out some of the links below to see what I've been woking on!</p>
        </div>
        <div className="flex-1 flex-col w-1/2 mx-auto">
            <div className="pt-2 text-center font-roboto font-semibold text-2xl">Skills</div>
            <ul className="list-disc pl-4 pr-12 text-lg font-roboto">
                <p className="font-bold">Languages/Scripting</p>
                <li>JavaScript, Python3, Java,C, C#, SQLLite, Git, Bash</li>
                <p className="font-bold">Applications</p>
                <li>Excel, Adobe Premier Pro, Unity, Github Desktop, VSCode, Jira</li>
                <p className="font-bold">Operating Systems</p>
                <li>Windows 10, MacOS, Ubuntu Linux</li>
                <p className="font-bold">Problem Solving</p>
                <li>List Comprehension, Algorithms, O(n), Formal Logic(TFL)</li>
                <p className="font-bold">Workflow Strategies</p>
                <li>Scrum, AGILE Project Management</li>
            </ul>
        </div>
    </div>
    )
}
export default entryElement;