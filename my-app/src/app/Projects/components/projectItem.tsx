'use client'

const ProjectItem = ({ project }: { project: { title: string; body: string; link: string } }) => {
  return (
        <div className="p-2">
            <div className="p-5 font-mono shadow-2xl bg-blue-800 bg-opacity-10">
              <div className="text-2xl w-full"> {project.title}</div>
              <div className="pt-2"></div>
              {(project.link == "private") ? <div>Private Repository</div> : <a className="hover:text-green-500" href={project.link} target="_blank" rel="noopener noreferrer">View Code</a>}
              <div className="pt-5"></div>
              <p className="text-l">{project.body}</p>
            </div>
        </div>
  );
};

export default ProjectItem;