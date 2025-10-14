

const PaperItem = ({ paper } : {paper: {title: string, body: string, link: string}}) => {
    return (
        <div className="p-2">
            <div className="shadow-2xl bg-blue-800 bg-opacity-10">
                <div className="text-center font-semibold font-mono text-2xl text-gray-200  hover:text-green-500 w-full p-2 bg-blue-800"><a href={paper.link} target="_blank" rel="noopener noreferrer">{paper.title}</a></div>
                <p className="font-mono text-xl p-7 ">{paper.body}</p>
            </div>
        </div>
    );
};
export default PaperItem;