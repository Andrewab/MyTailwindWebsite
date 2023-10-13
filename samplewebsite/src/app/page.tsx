import Header from './components/Header';
import FrontPage from './components/FrontPage';
import SecondPage from './components/SecondPage'
import ThirdPage from './components/ThirdPage';
import ImageCycler from './components/ImageCycler';
//import {useClient} from 'next/react';

export default function Home() {

  const imagePaths = [
    './images/Fireplace1.jpg',
    './images/Fireplace2.jpg',
  ];
  return (
    <div>
      <Header/> 
      <FrontPage/>
      <SecondPage/>
      <ThirdPage/> 
          <img src={imagePaths[0]} layout={'fill'} objectFit={'contain'} alt="Image" />
    </div>
  )
}

/*
<Header/>
<FrontPage/>
<SecondPage/>
<ThirdPage/>
*/