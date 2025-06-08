import React from 'react';
import { specialImages, images, videos } from './media';

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
              className="w-full object-cver rounded-lg"
            >
              <source src={src} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
      <div className="mt-5 mb-5 flex justify-center text-black text-3xl">
        Thank you all for coming to our special day
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
