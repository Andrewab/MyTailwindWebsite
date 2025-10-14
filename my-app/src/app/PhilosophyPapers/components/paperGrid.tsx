'use client'
import PaperItem from "./paperItem";
import { useEffect, useState } from 'react';

const PaperGrid = () => {
    const [papers, setPapers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    //try fetching data from the text file
    useEffect(() => {
        async function fetchData() {
        try {
            const response = await fetch('/philPaperPDFs/philosophyPapers.txt');
            const data = await response.json();
            console.log('Fetched Data', data);
            setPapers(data);
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
                {papers.map((paper,index) => (
                    <PaperItem paper={paper} key={index} />
                ))}
            </div>
        </div>
    );
};
export default PaperGrid;