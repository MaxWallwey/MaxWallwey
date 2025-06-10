import React from 'react';
import { specialImages, images, videos } from './media';

const MosaicGrid = () => {
  return (
    <>
      <div className="mb-4 mt-4 break-inside-avoid pl-4 pr-4">
        <Divider />
        <div className="mb-4 mt-4 break-inside-avoid pl-4 pr-4">
          <img
            src={specialImages[0]}
            className="w-full object-cver rounded-lg"
            alt={'Portrait of bride and groom'}
          />
        </div>
        <Divider />
      </div>

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

      <div className="columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap4 pl-4 pr-4">
        {images.map((src, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <img
              src={src}
              className="w-full object-cver rounded-lg"
              alt={'Wedding pictures'}
            />
          </div>
        ))}
      </div>
    </>
  );
};

const Divider = () => {
  return <hr style={{ borderTop: '4px solid black' }}></hr>;
};

export default MosaicGrid;
