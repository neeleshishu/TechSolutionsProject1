import React from 'react';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {

  return (
    <div id='Contact' >
      <div className='pricing container p-10 py-14 flex flex-col items-center gap-4'>
<h1 className='text-sky-800 text-lg bg-sky-100 max-w-fit rounded-full py-1 px-5'>Contact</h1>
<h1 className=' text-4xl font-bold text-blue-500'>Contact Us</h1>
<p className=' text-lg text-center pb-3'>Do you want to share your exciting business plan with us?
Please don&apos;t hesitate to get in touch with us.</p>

<div className='container flex icons_of_contact gap-4'>

          <div
            className='contact flex-1 flex flex-col justify-center items-center'
          >
        <FmdGoodIcon className=' icons_contact'/>
        <h1 className='text-xl text-gray-700'>Our Address</h1>
        <p>44100, Lattinath Marg, Bagmati Province, and
Hetauda, Nepal
</p>
    </div>
    <div className=' contact_section_block flex flex-1 gap-4'>
    <div
            className='contact flex-1 flex flex-col justify-center items-center'
          >
            <EmailIcon className=' icons_contact'/>
            <h1 className='text-xl text-gray-700'>Email Us</h1>
            <p><a href="mailto:info@triontechsolution.com">info@triontechsolution.com
  </a></p>
        </div>
        <div
            className='contact flex-1 flex flex-col justify-center items-center'>
            <CallIcon className=' icons_contact'/>
            <h1 className='text-xl text-gray-700'>Call Us</h1>
            <p> <a href="tel:+977-9768431742">+977-9768431742
  </a>
</p>
        </div>
    </div>
</div>
<div className='map_contact container flex flex-col items-center justify-center gap-4 md:flex-row'>
            <div className='w-full md:w-1/2 overflow-hidden'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453320.7423093109!2d84.4470619503913!3d27.420394445493987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb497ced46c917%3A0xafb8902c7a4532ab!2sHetauda%2C%20Nepal!5e0!3m2!1sen!2sin!4v1697477842853!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className='w-full md:w-1/2'>
                <div className="container flex flex-col items-center justify-center mx-auto">
                    <form action="mailto:info@triontechsolution.com" method="post" enctype="text/plain" className="bg-white shadow-md rounded p-6 mb-4 w-full">
                        <div className='container flex flex-col gap-4'>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                name="name"
                                placeholder="Name"
                            />
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                name="subject"
                                placeholder="Subject"
                            />
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="message"
                                rows={5}
                                placeholder="Message"
                            />
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold focus:outline-none focus:shadow-outline px-6 py-2 rounded-md"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact
