import React, {useEffect, useState} from 'react';
import './App.scss';

import Thumbnail from './components/thumbnail/Thumbnail';

import absolute from './assets/absolute.jpg';
import ciportal01 from './assets/ciportal01.jpg';
import ciportal02 from './assets/ciportal02.jpg';
import edwardbeale from './assets/edwardbeale.jpg';
import invitation from './assets/invitation.gif';
import jjcar from './assets/j&jcar.jpg';
import kerrysmith from './assets/kerrysmith.gif';
import lacasalinga from './assets/lacasalinga.jpg'
import marketstreettavern from './assets/marketstreettavern.jpg';
import melboptical from './assets/melboptical.gif';
import prodirt from './assets/prodirt.jpg';
import retroscooters from './assets/retro_scooters.jpg';
import sidepanelsmall from './assets/side_panel_small.jpg';
import starlight01 from './assets/starlight01.gif';
import starlight02 from './assets/starlight02.jpg';
import sydneyspa from './assets/sydneyspa.jpg';
import xbox from './assets/xbox.jpg';


function App() {
  let isLoaded = false;
  const [isLoading, setIsLoading] = useState(true);
  const [showImage, setShowImage] = useState('');
  const images: string[] = [
    absolute,
    ciportal01,
    ciportal02,
    edwardbeale,
    invitation,
    jjcar,
    kerrysmith,
    lacasalinga,
    marketstreettavern,
    melboptical,
    prodirt,
    retroscooters,
    sidepanelsmall,
    starlight01,
    starlight02,
    sydneyspa,
    xbox,
  ];

  useEffect(() => {
    if (!isLoaded) {
      cacheImages(images);
    }
  });

  const handleClick = (image: string) => {
    setShowImage(image);
  };

  const handleClose = () => {
    setShowImage('');
  }

  const cacheImages = async (srcArray: string[]) => {
    try {
      const promises = await srcArray.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            console.log('Loaded ', img);
            resolve(img);
          };
          img.onerror = () => reject();
        })
      });
      await Promise.all(promises);
      setIsLoading(false);
      isLoaded = true;
    } catch (error) {
      console.log(JSON.stringify(error, ["message", "arguments", "type", "name"]));
    }
  }
  
  return (
    <div className="App absolute w-full">
      {isLoading 
      ? 
      <div>isLoading</div> 
      :
      <div>
      <div className="p-1 grid grid-flow-row grid-cols-2 sm:grid-cols-4 gap-1">
        {images.map((image, index) => <div key={index} className="text-center"><Thumbnail key={index} image={image} onClick={handleClick}></Thumbnail></div>)}
      </div>
      {showImage !== '' && 
        <div 
          onClick={handleClose} 
          className="fixed p-4 top-0 left-0 bg-black bg-opacity-80 w-full h-full">
            <img className="m-auto h-auto max-h-full w-auto" src={showImage} alt="" /></div>
      }
      </div>
      }
    </div>
  );
}

export default App;
