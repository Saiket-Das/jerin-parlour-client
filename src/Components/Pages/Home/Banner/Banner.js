import React from 'react';
import banner from '../../../../assets/Image/banner.png'


const Banner = () => {
    return (
        <div className='bg-secondary'>

            <div className=' mx-auto py-9 lg:px-36 p-8'>

                <div className='flex justify-between items-center'>

                    <div>
                        <h2 className='text-5xl font-bold mb-1.5 text-black'>BEAUTY SALON</h2>
                        <h2 className='text-5xl font-bold mb-6 text-black'>FOR EVERY WOMEN</h2>
                        <p className='w-96 text-base mb-7 text-zinc-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>

                        <button className="btn btn-primary">Get an Appoinment</button>

                    </div>

                    <div>
                        <img style={{ width: '478px' }} src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;