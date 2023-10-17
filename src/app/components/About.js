import React from 'react';
import Image from 'next/image';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CollectionsIcon from '@mui/icons-material/Collections';


const About = () => {


  return (
    <div id='About'>
      <div className='About background p-10 py-14 flex flex-col items-center gap-4'>
<h1 className='text-sky-800 text-lg bg-sky-100 max-w-fit rounded-full py-1 px-5'>About</h1>
<h1 className=' text-4xl font-bold text-center'>Find Out More <span className='text-blue-500'>About Us</span></h1>


<div className='about_blocks flex justify-center gap-6 px-10'>
<div className=' flex-1'>
<Image src="/pics/about.jpg" alt="about" height={2000} width={1300}
/>
</div>

<div className='flex flex-col flex-1 gap-8 items-center justify-center'>
<p className=' text-2xl font-bold'>Vision of Trion Tech Solutions:</p>
<p className='text-base text-slate-700'>&quot;Our vision is to be a leading IT Service provider company in
nepal providing innovative and sustainable technology
solutions that empower businesses and individuals to thrive in
the digital era. We aim to create a future where technology
seamlessly integrates with everyday life, driving progress and
enhancing human experiences.&quot;
</p>

<div className='flex flex-col flex-1 gap-8 items-center justify-center'>
  
  
  <p className=' text-2xl font-bold'>Mission of Trion Tech Solutions:
</p>
    <p className=' text-base text-slate-700'>&quot;our mission is to deliver cutting-edge IT solutions tailored to
the unique needs of our clients. We are dedicated to fostering a
culture of creativity, excellence, and continuous learning within
our team. Through collaborative partnerships and a clientcentric approach, we strive to exceed expectations, drive
business growth, and contribute positively to the communities
we serve. Our commitment is to be a trusted ally in the pursuit
of technological advancement and success.&quot;</p>
  </div>



</div>
</div>
</div>
    </div>
  )
}

export default About
