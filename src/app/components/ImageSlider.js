import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // Number of images to show at a time
    slidesToScroll: 1,
  };

  const images = [
    
    '/pics/react.png',
    '/pics/next.png',
    '/pics/android.png',
    '/pics/node.png',
    '/pics/wordpress.png',
    '/pics/flutter.png',
  ];

  return (
    <div className="mx-auto w-4/5">
      <h2 className="text-2xl font-semibold text-center mb-4 pb-18">Technologies We Used</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-4">
            <Image src={image} alt={`Image ${index + 1}`} className="w-full h-auto rounded-lg" height={400} 
            width={400}
            layout="responsive"
            objectFit="contain" 
                 />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;

