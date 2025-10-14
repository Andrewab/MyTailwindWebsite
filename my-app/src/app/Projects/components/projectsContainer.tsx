'use client'
import { useEffect, useState } from 'react';
import ProjectItem from './projectItem';

const ProjectsContainer = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    //try fetching data from the text file
    useEffect(() => {
        async function fetchData() {
        try {
            const response = await fetch('/projectFiles/projects.txt');
            const data = await response.json();
            console.log('Fetched Data', data);
            setProjects(data);
            setLoading(false);
        } catch (error) {
            console.log('Breaking on PHILPAPERS', error);
            setError(true);
            setLoading(false);
        }
        }
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading..</div>;
    }

    if (error) {
        return <div>Error fetching data</div>;
    }
    return (
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-3 p-5 lg:w-4/5">
            {projects.map((project,index) => (
                <ProjectItem project={project} key={index} />
            ))}
        </div>
      </div>
    );
};

export default ProjectsContainer;