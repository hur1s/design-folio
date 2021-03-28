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
    if (isLoaded) {
      return;
    }

    cacheImages(images);
  });

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
    <div className="App">
      {isLoading 
      ? 
      <div>isLoading</div> 
      :
      <div className="flex">
        {images.map((image, index) => <Thumbnail key={index} image={image}></Thumbnail>)}
      </div>
      }
    </div>
  );
}

export default App;
