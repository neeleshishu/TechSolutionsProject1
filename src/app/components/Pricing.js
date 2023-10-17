import React from 'react'


const Pricing = () => {
    return (
        <div>
            <div className='pricing container p-10 py-14 flex flex-col items-center gap-4'>
                <h1 className='text-sky-800 text-lg bg-sky-100 max-w-fit rounded-full py-1 px-5'>PRICING</h1>
                <h1 className='p-4 text-4xl font-bold text-center'>Check our <span className='text-blue-500'>Pricing</span></h1>
                
                <div className="price_website container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    <div className="price_blocks flex flex-col border-2 rounded-xl p-8 gap-5 items-center overflow-hidden">
                        <div>
                            <h1 className="price_color bg-slate-200 text-slate-600 text-center font-bold text-2xl">Web development Package</h1>
                      </div>
                       

                        <p className='text-lg text-center'>Attractive and Dynamic Design</p>
                       <p className='text-sm'>
                        Responsive
                        </p>
                        <p className='text-sm'>
                        Complete Deployment
                        </p>
                        <p className='text-sm'>
                        Cloud Management 
                        </p>
                        <p className='text-sm'>
                        SEO Optimized
                        </p>
                        <p className='text-sm'>
                        CI/CD Pipeline
                        </p>
                       
                        <button className="flex items-center gap-2 border-2 px-6 py-2 rounded-md text-white bg-sky-600">
                            Buy Now

                        </button>
                    </div>


                    <div className="price_blocks flex flex-col border-2 rounded-xl p-8 gap-5 items-center overflow-hidden">
                    <div>
                            <h1 className="price_color bg-slate-200 text-slate-600 text-center font-bold text-2xl">Application Development </h1>
                      </div>
                       

                        <p className='text-lg text-center'>Mobile friendly Design</p>
                       <p className='text-sm'>
                       Complex designs
                        </p>
                        <p className='text-sm'>
                        Android and IOS application
                        </p>
                        <p className='text-sm'>
                        Ecommerce Application
                        </p>
                        <p className='text-sm'>
                        CMS applications
                        </p>
                        <p className='text-sm'>
                        App Store and Play store Setup
                        </p>
                       
                        <button className="flex items-center gap-2 border-2 px-6 py-2 rounded-md text-white bg-sky-600">
                            Buy Now

                        </button>
                    </div>

                    <div className="price_blocks flex flex-col border-2 rounded-xl p-8 gap-5 items-center overflow-hidden">
                    <div>
                            <h1 className="price_color bg-slate-200 text-slate-600 text-center font-bold text-2xl">WordPress and Bubble.io</h1>
                      </div>
                       

                        <p className='text-lg text-center'>Blog and News Portal websites</p>
                       <p className='text-sm'>
                       Responsive Design and Mobile friendly
                        </p>
                        <p className='text-sm'>
                        Ecommerce Website with admin Dashboard
                        </p>
                        <p className='text-sm'>
                        Portfolio and Agency Website
                        </p>
                        <p className='text-sm'>
                        SEO Optimized
                        </p>
                        <p className='text-sm'>
                        CMS applications
                        </p>
                        
                       
                        <button className="flex items-center gap-2 border-2 px-6 py-2 rounded-md text-white bg-sky-600">
                            Buy Now

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
