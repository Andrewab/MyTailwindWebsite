

const PaperItem = ({ paper } : {paper: {title: string, body: string, link: string}}) => {
    return (
        <div className="p-2">
            <div className="p-5 font-mono shadow-2xl bg-blue-800 bg-opacity-10">
              <div className="text-2xl w-full"> {paper.title}</div>
              <div className="pt-2"></div>
                <a className="hover:text-green-500" href={paper.link} target="_blank" rel="noopener noreferrer">View Paper</a>
              <div className="pt-5"></div>
              <p className="text-xl">{paper.body}</p>
            </div>
        </div>
    );
};
export default PaperItem;


