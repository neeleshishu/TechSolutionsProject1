import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import SocialMedia from './SocialMedia';

const Team = () => {
 
  return (
    <div id='Team' >
      <div className='teams background container p-10 py-14 flex flex-col items-center gap-4'>
        <h1 className='text-sky-800 text-lg bg-sky-100 max-w-fit rounded-full py-1 px-5'>Team</h1>
        <h1 className='text-4xl font-bold text-center'>Our Hardworking <span className='text-blue-500'>Team</span></h1>
        <p className='text-lg text-center pb-3'>
        What makes us stronger and fast growing, that stands out us from other.
        </p>

        <div className="teams_blocks container flex items-start gap-8">
          <div
            className="block_work bg-white rounded-lg overflow-hidden flex justify-center flex-col gap-2 border-solid"
            
          >
            <div className='card'>
              <Image src="/pics/team-1.jpg" alt='team' height={800} width={450} />
              <SocialMedia />
            </div>
            <div className='p-4'>
              <h2 className="text-lg font-semibold">
                Walter White
              </h2>
              <p className="text-gray-600">Chief Executive Officer</p>
            </div>
          </div>

          <div
            className="block_work bg-white rounded-lg overflow-hidden flex justify-center flex-col gap-2 border-solid"
            
          >
            <div className='card'>
              <Image src="/pics/team-2.jpg" alt='team' height={800} width={450} />
              <SocialMedia />
            </div>
            <div className='p-4'>
              <h2 className="text-lg font-semibold">
                Sarah Johnson
              </h2>
              <p className="text-gray-600">Product Manager</p>
            </div>
          </div>


          <div
            className="block_work bg-white rounded-lg overflow-hidden flex justify-center flex-col gap-2 border-solid"
            
          >
            <div className='card'><Image src="/pics/team-3.jpg" alt='team' height={800} width={450} />
              <SocialMedia />
            </div>
            <div className=' p-4'>
              <h2 className="text-lg font-semibold">
                William Anderson</h2>
              <p className="text-gray-600">CTO</p>
            </div>
          </div>

          <div
            className="block_work bg-white rounded-lg overflow-hidden flex justify-center flex-col gap-2 border-solid"
            
          >
            <div className='card'><Image src="/pics/team-4.jpg" alt='team' height={800} width={450} />
              <SocialMedia />
            </div>
            <div className=' p-4'>
              <h2 className="text-lg font-semibold">Amanda Jepson</h2>
              <p className="text-gray-600">Accountant</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Team;
