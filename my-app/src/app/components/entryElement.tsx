'use state'

const entryElement = () => {
    return (
    <div className="flex-row items-start mx-auto w-4/5 h-auto shadow-md flex  bg-blue-800 bg-opacity-10">
        <div className="flex-1 flex-col w-1/2 mx-auto">
            <div className="pt-2 text-center font-roboto font-semibold text-2xl ">About me</div>
            <p className="pl-4 pr-12 text-lg font-roboto">I am a graduate from the University of Puget Sound and CoFounder of Gandit Games Partnership. My interests lie in understanding the world through nature and society. I have a passion to create engaging and thought-provoking experiences through technology.</p>
            <p className="pt-2"></p>
            <p className="pl-4 pr-12 text-lg font-roboto"> As Cofounder of Gandit Games Partnership. I strive to create innovative and immersive gaming experiences that challenge players' perspectives and encourage critical thinking.</p>
            <p className="pt-2"></p>
            <p className="pl-4 pr-12 text-lg font-roboto">If you are interested in collaborating or learning more about my work, feel free to reach out!</p>
        </div>
        <div className="flex-1 flex-col w-1/2 mx-auto">
            <div className="pt-2 text-center font-roboto font-semibold text-2xl">Skills</div>
            <ul className="list-disc pl-4 pr-12 text-lg font-roboto">
                <p className="font-bold">Languages/Scripting</p>
                <li>JavaScript, Python3, Java,C, C#, SQLLite, Git, Bash</li>
                <p className="font-bold">Applications</p>
                <li>Excel, Adobe Premier Pro, Unity, Github, VSCode, Jira</li>
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