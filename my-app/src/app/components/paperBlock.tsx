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
    <div className='grid grid-cols-3 gap-5 justify-center p-5% mb-20'>
      {data.map((item, index) => (
        <div className='mt-5 p-10 w-full max-w-500 h-400 bg-purple-500 bg-opacity-50 shadow-md font-serif text-18 flex bg-b0c4de overflow-auto flex-col' key={index}>
          <Link href={item.link}>
            <div className='hover:text-blue-500'>{item.title}</div>
          </Link>
          <br />
          <br />
          {item.body}
        </div>
      ))}
    </div>
  );
}

export default PaperBlock;
