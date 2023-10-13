//import { useClient } from 'next/react';

const ImageCycler = () => {
  // List of preset image paths
  const imagePaths = [
    './images/Fireplace1.jpg',
    './images/Fireplace2.jpg',
  ];

  return (
        <button className="ImageCycler" onClick={onClick}>
          <img src={imagePaths[0]} layout={'fill'} objectFit={'contain'} alt="Image" />
        </button>
  );
};

export default ImageCycler;
