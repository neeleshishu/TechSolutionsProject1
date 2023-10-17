import React from 'react';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import DescriptionIcon from '@mui/icons-material/Description';
import SpeedIcon from '@mui/icons-material/Speed';
import PublicIcon from '@mui/icons-material/Public';


const Whatwework = () => {

  return (
    <div >
      <div className="whatweworkpage py-16 px-16">

        <div className="whatwework_blocks container flex items-start gap-8">

          <div
            className="block_work work_blocks bg-white rounded-lg p-4 flex justify-center flex-col gap-4 border-solid"
            
          >

            <SportsBasketballIcon className='icons' />
            <h2 className="text-lg font-semibold">
              Lorem Ipsum</h2>
            <p className="text-gray-600">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>


          <div
            className="block_work work_blocks bg-white rounded-lg p-4 flex justify-center flex-col gap-4 border-solid"
            
          >
            <DescriptionIcon className='icons' />
            <h2 className="text-lg font-semibold">
              Sed ut perspiciatis</h2>
            <p className="text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>


          <div
            className="block_work work_blocks bg-white rounded-lg p-4 flex justify-center flex-col gap-4 border-solid"
            
          >
            <SpeedIcon className='icons' />
            <h2 className="text-lg font-semibold">
              Magni Dolores</h2>
            <p className="text-gray-600">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
          </div>

          <div
            className="block_work work_blocks bg-white rounded-lg p-4 flex justify-center flex-col gap-4 border-solid"
            
          >
            <PublicIcon className='icons' />
            <h2 className="text-lg font-semibold">Nemo Enim</h2>
            <p className="text-gray-600">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Whatwework
