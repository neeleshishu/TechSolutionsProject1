import React from 'react'
import Image from 'next/image'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import GroupIcon from '@mui/icons-material/Group';

const Clients = () => {
  return (
    <>
    <div className='Clients container p-10 py-14 flex flex-col items-center gap-4'>
<h1 className='text-sky-800 text-lg bg-sky-100 max-w-fit rounded-full py-1 px-5'>Client</h1>
<h1 className=' text-4xl font-bold text-blue-500'>Our Clients</h1>
<p className='text-lg text-center pb-3'>Trusted by Innovative enterprises, scale-up and startups companies</p>

    <div className='clients flex justify-evenly items-center container gap-4'>
    <div className='Clients_block relative flex justify-center items-center flex-col background p-8'>
      <SentimentSatisfiedAltIcon className='icons_client'/>
      <p className=' text-3xl font-bold'>232</p>
      <p>Happy Clients</p>
    </div>
    <div className='Clients_block relative flex justify-center items-center flex-col background  p-8'>
      <LibraryBooksIcon className='icons_client'/>
      <p className=' text-3xl font-bold'>521</p>
      <p>Projects</p>
    </div>
    <div className='Clients_block relative flex justify-center items-center flex-col background  p-8'>
      <HeadsetMicIcon className='icons_client'/>
      <p className=' text-3xl font-bold'>1463</p>
      <p>Hours Of Support</p>
    </div>
    <div className='Clients_block relative flex justify-center items-center flex-col background  p-8'>
      <GroupIcon className='icons_client'/>
      <p className=' text-3xl font-bold'>15</p>
      <p>Hard Workers</p>
    </div>
    </div>
    <div className='client_logo container flex justify-between items-center p-8 gap-4'>
      <Image className=' transform scale-100 hover:scale-110 transition-transform' src="/pics/client-1.png" alt='' height={150} width={100}/>
      <Image className=' transform scale-100 hover:scale-110 transition-transform' src="/pics/client-2.webp" alt='' height={150} width={100}/>
      <Image className=' transform scale-100 hover:scale-110 transition-transform h-8' src="/pics/client-7.svg" alt='' height={150} width={100}/>
      <Image className=' transform scale-100 hover:scale-110 transition-transform' src="/pics/client-4.svg" alt='' height={150} width={100}/>
      <Image className=' transform scale-100 hover:scale-110 transition-transform' src="/pics/client-5.svg" alt='' height={150} width={100}/>
      <Image className=' transform scale-100 hover:scale-110 transition-transform' src="/pics/client-6.svg" alt='' height={150} width={100}/>
      <Image className=' transform scale-100 hover:scale-110 transition-transform' src="/pics/client-3.jpeg" alt='' height={150} width={100}/>
    </div>
    </div>
    </>
  )
}

export default Clients
