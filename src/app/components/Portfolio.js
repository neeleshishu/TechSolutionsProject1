import React from 'react'
import Image from 'next/image'
import AttachFileIcon from '@mui/icons-material/AttachFile';

const Portfolio = () => {
  return (
    <div id='Portfolio'>
      <div className='portfolio background container p-10 py-14 flex flex-col items-center gap-4'>
<h1 className='text-sky-800 text-lg bg-sky-100 max-w-fit rounded-full py-1 px-5'>Portfolio</h1>
<h1 className=' text-4xl font-bold text-center p-4'>Check our <span className='text-blue-500'>Portfolio</span></h1>

  <div className='portfolio_blocks container grid grid-cols-2 gap-8'>
  <div className='card relative hover:bg-gradient'><Image src="/pics/astronova.png" alt='' height={500} width={600}/>
  <div className='content'>
  <ul className='scis'>
    <li>
        <a href='https://www.astronovafoundation.com'>Link Attached <AttachFileIcon/></a>
    </li>
  </ul>
  </div>
  </div>
  <div className='card relative hover:bg-gradient'><Image src="/pics/reassist.jpg" alt='' height={500} width={600}/>
  <div className='content'>
  <ul className='scis'>
    <li>
        <a href='https://www.realassist.ai/'>Link Attached <AttachFileIcon/></a>
    </li>
  </ul>
  </div>
  </div>
  
  <div className='card relative hover:bg-gradient'><Image src="/pics/medlet.png" alt='' height={500} width={600}/>
  <div className='content'>
  <ul className='scis'>
    <li>
        <a href='https://medletservices.com/'>Link Attached <AttachFileIcon/></a>
    </li>
  </ul>
  </div>
  </div>
  <div className='card relative hover:bg-gradient'>
  <Image src="/pics/Pelican.jpg" alt='' height={500} width={600}/>
  <div className='content'>
  <ul className='scis'>
    <li>
        <a href='https://pelicaninvests.com/'>Link Attached <AttachFileIcon/></a>
    </li>
  </ul>
  </div>
  </div>

  <div className='card relative hover:bg-gradient'>
  <Image src="/pics/lemonade.jpg" alt='' height={500} width={600}/>
  <div className='content'>
  <ul className='scis'>
    <li>
        <a href='https://lemonade.careers/'>Link Attached <AttachFileIcon/></a>
    </li>
  </ul>
  </div>
  </div>
  <div className='card relative hover:bg-gradient'>
  <Image src="/pics/Hawkeye.jpg" alt='' height={500} width={600}/>
  <div className='content'>
  <ul className='scis'>
    <li>
        <a href='https://hawkeyetransact3.bubbleapps.io/new_login_signup'>Link Attached <AttachFileIcon/></a>
    </li>
  </ul>
  </div>
  </div>
  <div className='card relative hover:bg-gradient'>
  <Image src="/pics/nitecapp.jpg" alt='' height={500} width={600}/>
  <div className='content'>
  <ul className='scis'>
    <li>
        <a href='https://www.nitecapp.io/'>Link Attached <AttachFileIcon/></a>
    </li>
  </ul>
  </div>
  </div>
  </div>
  </div>
    </div>
  
  )
}

export default Portfolio
