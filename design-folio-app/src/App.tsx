import React, { useEffect, useState } from "react";
import "./App.scss";

import Thumbnail from "./components/thumbnail/Thumbnail";

import absolute from "./assets/absolute.jpg";
import ciportal01 from "./assets/ciportal01.jpg";
import ciportal02 from "./assets/ciportal02.jpg";
import edwardbeale from "./assets/edwardbeale.jpg";
import invitation from "./assets/invitation.gif";
import jjcar from "./assets/j&jcar.jpg";
import kerrysmith from "./assets/kerrysmith.gif";
import lacasalinga from "./assets/lacasalinga.jpg";
import marketstreettavern from "./assets/marketstreettavern.jpg";
import melboptical from "./assets/melboptical.gif";
import prodirt from "./assets/prodirt.jpg";
import retroscooters from "./assets/retro_scooters.jpg";
import sidepanelsmall from "./assets/side_panel_small.jpg";
import starlight01 from "./assets/starlight01.gif";
import starlight02 from "./assets/starlight02.jpg";
import sydneyspa from "./assets/sydneyspa.jpg";
import xbox from "./assets/xbox.jpg";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showImage, setShowImage] = useState("");
  const [images] = useState([
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
  ]);

  useEffect(() => {
    const cacheImages = async function (srcArray: string[]) {
      try {
        const promises = await srcArray.map((src) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
              resolve(img);
            };
            img.onerror = () => reject();
          });
        });
        await Promise.all(promises);
        setTimeout(() => {
          setIsLoading(false);
        }, 10000);
      } catch (error) {
        console.log(
          JSON.stringify(error, ["message", "arguments", "type", "name"])
        );
      }
    };

    cacheImages(images);
  }, [images]);

  const handleClick = (image: string) => {
    setShowImage(image);
  };

  const handleClose = () => {
    setShowImage("");
  };

  return (
    <div className="App absolute w-full">
      {isLoading ? (
        <div className="fixed h-full w-full transition-opacity duration-1000 ease-in-out">
          <div className="loading-spinner animate-spin text-gray-400">
            <svg
              height="40"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
      ) : (
        <div>
          <div className="p-1 grid grid-flow-row grid-cols-2 sm:grid-cols-4 gap-1">
            {images.map((image, index) => (
              <div key={index} className="text-center">
                <Thumbnail
                  key={index}
                  image={image}
                  onClick={handleClick}
                ></Thumbnail>
              </div>
            ))}
          </div>
          {showImage !== "" && (
            <div
              onClick={handleClose}
              className="fixed p-4 top-0 left-0 bg-black bg-opacity-80 w-full h-full"
            >
              <img
                className="m-auto h-auto max-h-full w-auto"
                src={showImage}
                alt=""
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
