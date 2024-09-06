"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

interface ImageData {
  src: string;
  alt: string;
}

interface ImageSliderProps {
  images?: ImageData[]; // Make images optional
}

const HomeSlider: React.FC<ImageSliderProps> = ({ images = [] }) => { // Default to empty array
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Move to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Move to the previous image
  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Update slider size if needed
  useEffect(() => {
    if (sliderRef.current) {
      const { width } = sliderRef.current.getBoundingClientRect();
      sliderRef.current.style.transform = `translateX(-${currentIndex * width}px)`;
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="relative overflow-hidden rounded-md">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500"
          style={{ display: 'flex', flexDirection: 'row' }}
        >
          {images.length > 0 ? (
            images.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-full h-60 relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover"
                />
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center w-full h-60">
              <span>No images available</span>
            </div>
          )}
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={goToPrevious}
          className="bg-gray-800 text-white p-2 rounded-full"
          disabled={images.length <= 1}
        >
          {"<"}
        </button>
        <button
          onClick={goToNext}
          className="bg-gray-800 text-white p-2 rounded-full"
          disabled={images.length <= 1}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;
