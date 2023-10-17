import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div className='container background p-4'>
      <div class="container my-4 mx-auto md:px-6">
        <section class=" text-center">
          <div class="container flex flex-wrap justify-center">
            <div class="flex-basis w-full shrink-0 grow-0 md:w-10/12 md:px-3 lg:w-8/12 xl:w-6/12">
              <div class="mb-6 inline-block rounded-full bg-primary p-4 shadow-lg shadow-primary/30 dark:shadow-primary/20">
                <EmailIcon />
              </div>

              <h2 class="mb-6 text-3xl font-bold">Subscribe To Our Newsletter</h2>

              <div class="mb-6 flex-row md:mb-0 md:flex">
                <div class="relative mb-3 w-full md:mr-3 md:mb-0" data-te-input-wrapper-init>
                  <input type="text"
                    class="peer block min-h-[auto] border border-solid border-1 border-gray-400 w-full rounded py-[0.32rem] px-3 leading-[2.15]  transition-all duration-200 ease-linear focus:placeholder:opacity-100 "
                    id="exampleFormControlInput2" placeholder="Enter your email" />
                </div>
                <button type="submit"
                  className="inline-block rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal bg-sky-500"
                  data-te-ripple-init data-te-ripple-color="light">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className='footer_blocks flex container p-6 px-8 gap-4'>
        <div className='flex-1 flex flex-col gap-4'>
          <h1 className=' text-2xl'>Trion Tech Solution</h1>
          <p className='text-gray-500 text-sm'>44100, Lattinath Marg, Bagmati Province, and
            Hetauda, Nepal
          </p>
          <p className='text-sm font-bold text-gray-500 cursor-pointer'>Phone: <span className='font-light text-sm'>+1 5589 55488 55</span></p>
          <p className='text-sm font-bold text-gray-500 cursor-pointer'>Email: <span className='font-light text-sm'>info@example.com</span></p>
        </div>
        <div className='flex-1 flex flex-col gap-2'>
          <h2 className=' text-lg font-bold'>Useful Links</h2>
          <p className='text-sm flex items-center gap-2 cursor-pointer hover:text-sky-600'>Home</p>
          <p className='text-sm flex items-center gap-2 cursor-pointer hover:text-sky-600'>About us</p>
          <p className='text-sm flex items-center gap-2 cursor-pointer hover:text-sky-600'>Services</p>
          <p className='text-sm flex items-center gap-2 cursor-pointer hover:text-sky-600'>Term of service</p>
          <p className='text-sm flex items-center gap-2 cursor-pointer hover:text-sky-600'>Private policy</p>
        </div>
        <div className='flex-1 flex flex-col gap-2'>
          <h2 className=' text-lg font-bold'>Our Services</h2>
          <p className='text-sm flex items-center gap-2 cursor-pointer hover:text-sky-600'>Web Design</p>
          <p className='text-sm flex items-center gap-2 cursor-pointer hover:text-sky-600'>Web Development</p>
          <p className='text-sm flex items-center gap-2 cursor-pointer hover:text-sky-600'>Product Management</p>
          <p className='text-sm flex items-center gap-2 cursor-pointer hover:text-sky-600'>Marketing</p>
          <p className='text-sm flex items-center gap-2 cursor-pointer hover:text-sky-600'>Graphic Design</p>
        </div>
        <div className='flex-1 flex flex-col gap-4'>
          <h2 className=' text-lg font-bold'>Our Social Networks</h2>
          <p className='text-sm'>Simplifying Complexity, Maximizing Efficiency,
Building tomorrow tech Today.</p>
          <div className='container flex gap-4'>
            <a href='https://twitter.com/trion_tech2'>
              <TwitterIcon className='icons_socialmedia cursor-pointer hover:bg-sky-600'
              /></a>
            <a href='https://www.facebook.com/triontechsolution509/'>
              <FacebookIcon className='icons_socialmedia cursor-pointer hover:bg-sky-600' />
            </a>
            <a href='https://twitter.com/trion_tech'>
              <InstagramIcon className='icons_socialmedia cursor-pointer hover:bg-sky-600' />
            </a>
            <a href='https://www.linkedin.com/company/trion-techsolution/'>
              <LinkedInIcon className='icons_socialmedia cursor-pointer hover:bg-sky-600' />
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
