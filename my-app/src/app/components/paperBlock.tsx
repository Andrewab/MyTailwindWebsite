'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface DataItem {
  link: string;
  title: string;
  body: string;
}

function PaperBlock() {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/philPaperPDFs/philosophyPapers.txt');
        const data = await response.json();
        console.log('Fetched Data', data);
        setData(data);
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
    <div className='grid grid-cols-3 gap-5 justify-center p-5% ml-20 mr-20 mb-20 mt-5'>
      {data.map((item, index) => (
        <div className='border-4 border-black border-solid rounded-lg w-full max-w-500 h-400 bg-purple-500 bg-opacity-50 shadow-md font-serif flex bg-b0c4de overflow-auto flex-col ' key={index}>
          <div className='text-center font-semibold font-roboto text-2xl text-gray-200 bg-blue-600  hover:text-green-500 w-full p-1'>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
          </div>
          <div className="font-roboto text-xl p-7">
            <div>{item.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PaperBlock;
