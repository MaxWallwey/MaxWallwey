import React from 'react';
import { specialImages, images, videos } from './media';
import { Spacer } from '@chakra-ui/react';

const MosaicGrid = () => {
  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap4 pl-4 pr-4">
        {videos.map((src, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <video
              width="750"
              height="500"
              controls
              preload="auto"
              playsInline
              className="w-full object-cver rounded-lg"
            >
              <source src={src} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
      <div className="mb-4 break-inside-avoid pl-4 pr-4 text-3xl flex justify-center">
        <a>
          Thank you all for coming to our special day <br />
        </a>
      </div>
      <div className="mb-4 break-inside-avoid pl-4 pr-4">
        <img src={specialImages[0]} className="w-full object-cver rounded-lg" />
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap4 pl-4 pr-4">
        {images.map((src, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <img src={src} className="w-full object-cver rounded-lg" />
          </div>
        ))}
      </div>
    </>
  );
};

export default MosaicGrid;
