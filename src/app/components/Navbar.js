import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Link, animateScroll as scroll } from "react-scroll";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = () => {

  const [isFixed, setIsFixed] = useState(false);

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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

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
    <div>
      <div className={`upper_navbar ${isFixed ? 'hidden' : ''} container flex justify-between p-4 items-center nav_background`}>
        <div className='container contact_navbar flex gap-4'>
        <p>
  <a href="mailto:info@triontechsolution.com">
    <EmailIcon /> - info@triontechsolution.com
  </a>
</p>
<p>
  <a href="tel:+977-9768431742">
    <CallIcon /> +977-9768431742
  </a>
</p>
        </div>
        <div className='social_navbar flex gap-3'>
        <a href='https://twitter.com/trion_tech2'>
                    <TwitterIcon className='icons_socialmedia cursor-pointer hover:bg-sky-600'
                    /></a>
                    <a href='https://www.facebook.com/triontechsolution509/'>
                    <FacebookIcon className='icons_socialmedia cursor-pointer hover:bg-sky-600'/>
                    </a>
                    <a href='https://twitter.com/trion_tech'>
                    <InstagramIcon className='icons_socialmedia cursor-pointer hover:bg-sky-600'/>
                    </a>
                    <a href='https://www.linkedin.com/company/trion-techsolution/'>
                    <LinkedInIcon className='icons_socialmedia cursor-pointer hover:bg-sky-600'/>
                    </a>
        </div>
      </div>
      <nav className={`container ${isFixed ? 'fixed top-0' : ''} z-10 bg-white p-4 py-6 flex justify-between items-center`}>
        <div className="navbar_logo flex items-center">
          <Link to='Home' className="cursor-pointer">
          <Image src="/pics/main_logo.png" alt='' height={70} width={100}/>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden px-2 py-1 bg-orange-500 text-white rounded-md hover:bg-orange-600"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>

        {/* Mobile Menu */}
        <ul
          className={`lg:hidden absolute top-16 left-0 z-10 w-full bg-slate-200 ${isMobileMenuOpen ? 'block' : 'hidden'
            }`}
        >
          <li className={`relative  cursor-pointer`}>
            <Link to="Home" spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block p-2 font-semibold" onClick={handleMenuItemClick}>
              Home
            </Link>

          </li>
          <li className={`relative  cursor-pointer`}>
            <Link to="About" spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block p-2 text-black font-semibold" onClick={handleMenuItemClick}>
              About
            </Link>

          </li>
          <li className={`relative  cursor-pointer`}>
            <Link to="Services" spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block p-2 text-black font-semibold" onClick={handleMenuItemClick}>
              Services
            </Link>

          </li>
          <li className={`relative  cursor-pointer`}>
            <Link to="Portfolio" spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block p-2 text-black font-semibold" onClick={handleMenuItemClick}>
              Portfolio
            </Link>
          </li>
          <li className={`relative  cursor-pointer`}>
            <Link to="Team" spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block p-2 text-black font-semibold" onClick={handleMenuItemClick}>
              Team
            </Link>

          </li>
          <li className={`relative  cursor-pointer`}>
            <Link to="Contact" spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block p-2 text-black font-semibold" onClick={handleMenuItemClick}>
              Contact
            </Link>

          </li>
        </ul>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-4">
          <li className={`relative  cursor-pointer`}>
            <Link to="Home" className="font-semibold leading-18 "
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>

          </li>
          <li className={`relative  cursor-pointer`}>
            <Link to="About" spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="font-semibold leading-18">
              About
            </Link>

          </li>
          <li className={`relative  cursor-pointer`}>
            <Link to="Services" spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="font-semibold leading-18">
              Services
            </Link>

          </li>
          <li className={`relative  cursor-pointer`}>
            <Link to="Portfolio" spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="font-semibold leading-18" >
              Portfolio
            </Link>

          </li>
          <li className={`relative  cursor-pointer`}>
            <Link to="Team" spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="font-semibold leading-18" >
              Team
            </Link>

          </li>
          <li className={`relative  cursor-pointer`}>
            <Link to="Contact" spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              className="font-semibold leading-18" >
              Contact
            </Link>

          </li>
        </ul>


      </nav>
    </div>
  )
}

export default Navbar
