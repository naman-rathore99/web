import React from 'react'
import Homeslider from './Homeslider'
const images = [
  {
    src: '/banner_1.jpg',
    alt: 'Banner 1',
  },
  {
    src: '/banner_2.jpg',
    alt: 'Banner 2',
  },
  {
    src: '/banner_3.jpg',
    alt: 'Banner 3',
  },
];

const Hero = () => {
  return (
    <div className="hero bg-white h-screen w-full">
      <Homeslider  images={images} />
    </div>
  )
}

export default Hero