
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface dataItem {
    link: string;
    title: string;
    body: string;
}
function PaperBlock () {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/philPaperPDFs/philosophyPapers.txt');
                const data = await response.json();
                console.log('Fetched Data', data)
                setData(data);
                setLoading(false);
            }
                catch(error) {
                    console.log("Breaking on PHILPAPERS");
                    setError(true);
                    setLoading(false);
                }
            }
            fetchData();
        }, []);
        if(loading) {
            return <div>Loading..</div>
        }
        if(error) {
            return <div>Error: </div>
        }
        return (
            <div className='grid grid-cols-3 gap-5 justify-center p-5% mb-20'>
            {data.map((dataItem, index) => (
            <div className='mt-5 p-10 w-full max-w-500 h-400 bg-purple-500 bg-opacity-50 rounded-lg font-serif text-18 flex bg-b0c4de overflow-auto flex-col' key={index}>
                <Link className='hover:text-blue-500' href={dataItem.link}>
                    {dataItem.title}
                </Link>
            <br/>
            <br/>
            {dataItem.body}
            </div>
            ))}
          </div>
        );
}

export default PaperBlock