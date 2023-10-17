import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const Herosection = () => {

  const [isFixed, setIsFixed] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 2 * 30) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Function to handle the scroll event and update the active menu item
    const handleScroll = () => {
        const sections = document.querySelectorAll('section'); // Change this selector to match your sections
        let scrollPosition = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                setActiveMenuItem(index);
            }
        });
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <div id='Home' className=' flex justify-center items-center'>
      <div className={`${isFixed ? ' mt-24' : ''} herosection container px-16 flex items-center justify-center`}>
      <div className='flex-1 flex flex-col justify-center'>
      <h1 className=' py-3 text-5xl font-bold'>Welcome to <span className=' text-blue-500'>Trion Tech Solution</span></h1>
      <p className=' text-xl'>Simplifying Complexity, Maximizing Efficiency,
Building tomorrow tech Today.</p>
      <div className='flex py-7 items-center gap-6'>
      <button className="lg:block bg-blue-500 text-white px-6 py-2 rounded-md">
          Get Started 
        </button>      
      </div>
       </div>
       <div className='flex-1 flex items-center justify-center'>
       <Image src='/pics/herosection.gif' alt='' height={400} width={400} />
       </div>
       </div>
    </div>
  )
}

export default Herosection
