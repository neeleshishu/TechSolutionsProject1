import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import MonitorIcon from '@mui/icons-material/Monitor';
import TempleBuddhistIcon from '@mui/icons-material/TempleBuddhist';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import DescriptionIcon from '@mui/icons-material/Description';
import SpeedIcon from '@mui/icons-material/Speed';
import PublicIcon from '@mui/icons-material/Public';
import { useInView } from 'react-intersection-observer';

const Services = () => {

  return (
    <div id='Services'>
      <div className='services container p-10 py-14 flex flex-col items-center gap-4'>
<h1 className='text-sky-800 text-lg bg-sky-100 max-w-fit rounded-full py-1 px-5'>Services</h1>
<h1 className=' text-4xl font-bold text-center'>Check our <span className='text-blue-500'>Services</span></h1>
<p className='text-lg text-center pb-3'>Let’s fulfill your digitalized dream with our
affortable awesome services.</p>

<div className="container mx-auto mt-8">
      <div className="services_blocks grid grid-cols-3 gap-8 ">

      <div
            className="card_services bg-white rounded-lg p-4 flex justify-center items-center flex-col gap-4 cursor-pointer"
          >
      
    <SportsBasketballIcon className='icons-service'/>
    <h2 className="text-lg font-semibold">Web Development Services:</h2>
    <p className="text-gray-600 text-justify">Our web development services are designed to create dynamic and visually appealing websites that cater to your unique business needs. We employ the latest technologies and coding standards to build responsive, user-friendly, and SEO-optimized websites. Our team of experienced developers ensures that your website functions flawlessly across all devices and browsers.
</p>
  </div>

  <div
            className="card_services bg-white rounded-lg p-4 flex justify-center items-center flex-col gap-4 cursor-pointer"
          >
    <DescriptionIcon className='icons-service'/>
    <h2 className="text-lg font-semibold">
    Mobile App Development Services:</h2>
    <p className="text-gray-600 text-justify">Our mobile app development services encompass the creation of high-quality, user-friendly, and feature-rich applications for both Android and iOS platforms. We focus on creating seamless user experiences and ensuring your app stands out in a crowded marketplace. From concept to deployment, our team handles every aspect of app development.
</p>
  </div>

  <div
            className="card_services bg-white rounded-lg p-4 flex justify-center items-center flex-col gap-4 cursor-pointer"
          >
    <SpeedIcon className='icons-service'/>
    <h2 className="text-lg font-semibold">
    Custom Software Development:</h2>
    <p className="text-gray-600 text-justify">Our custom software development services are tailored to meet the unique requirements of your business. We design, develop, and deploy software solutions that streamline your operations, enhance productivity, and provide a competitive edge. Whether it&apos;s a CRM system, inventory management, or any other software, we&apos;ve got you covered.
</p>
  </div>

  <div
            className="card_services bg-white rounded-lg p-4 flex justify-center items-center flex-col gap-4 cursor-pointer"
          >
    <PublicIcon className='icons-service'/>
    <h2 className="text-lg font-semibold">
    E-Commerce Development:</h2>
    <p className="text-gray-600 text-justify">Our e-commerce development services empower businesses to establish and grow their online presence. We build secure and user-friendly e-commerce platforms that facilitate easy product management, order processing, and secure payment transactions. Our focus is on creating a seamless shopping experience for your customers.
</p>
  </div>

  <div
            className="card_services bg-white rounded-lg p-4 flex justify-center items-center flex-col gap-4 cursor-pointer"
          >
    <MonitorIcon className='icons-service'/>
    <h2 className="text-lg font-semibold">
    UI/UX Design Services:</h2>
    <p className="text-gray-600 text-justify">Our UI/UX design services are dedicated to creating visually engaging and intuitive user interfaces. We believe in the power of design to enhance user satisfaction and drive conversions. Our team works closely with you to craft designs that resonate with your brand and captivate your audience.
</p>
  </div>

  <div
            className="card_services bg-white rounded-lg p-4 flex justify-center items-center flex-col gap-4 cursor-pointer"
          >
    <TempleBuddhistIcon className='icons-service'/>
    <h2 className="text-lg font-semibold">
    Quality Assurance and Testing:</h2>
    <p className="text-gray-600 text-justify">Our quality assurance and testing services ensure that your software, website, or app performs flawlessly. We employ rigorous testing methodologies to identify and rectify bugs and issues. Our goal is to deliver products that meet the highest quality standards.
</p>
  </div>

  <div
            className="card_services bg-white rounded-lg p-4 flex justify-center items-center flex-col gap-4 cursor-pointer"
          >
    <TempleBuddhistIcon className='icons-service'/>
    <h2 className="text-lg font-semibold">
    No-Code Platform Service:</h2>
    <p className="text-gray-600 text-justify">Our No-Code Platform Service empowers businesses and individuals to build powerful, customized software applications without the need for traditional coding or technical expertise. With our user-friendly platform, you can turn your unique ideas into functional solutions quickly and cost-effectively. Whether you&apos;re a startup looking to streamline operations, an entrepreneur with a visionary app concept, or an established business seeking rapid digital transformation, our No-Code Platform Service is your key to unleashing your creativity and innovation.

</p>
  </div>

  <div
            className="card_services bg-white rounded-lg p-4 flex justify-center items-center flex-col gap-4 cursor-pointer"
          >
    <TempleBuddhistIcon className='icons-service'/>
    <h2 className="text-lg font-semibold">
    Machine Learning Services:</h2>
    <p className="text-gray-600 text-justify">Our machine learning services harness the power of artificial intelligence to drive data-driven insights, automation, and innovation for your business. We specialize in developing and deploying machine learning models that can analyze large datasets, make predictions, and optimize processes. Whether you&apos;re looking to enhance customer experiences, improve decision-making, or automate repetitive tasks, our machine learning experts have the expertise to deliver transformative solutions.
</p>
  </div>
      </div>
    </div>

</div>
    </div>
  )
}

export default Services
