import React from 'react';
import overviewIMG from '../../../../assets/Image/Professionally.png'
import './Overview.css'


const Overview = () => {
    return (
        <div className='bg-secondary'>
            <div className='mx-auto py-9 lg:px-36'>
                <div className='lg:flex justify-between mt-20'>
                    {/* -------------- IMAGE -------------- */}
                    <div>
                        <img className='overview-img' src={overviewIMG} alt="" />
                    </div>

                    {/* -------------- DESCRIPTION -------------- */}
                    <div className='overview-card'>
                        <div className='text-4xl font-bold'>
                            <h2>Let us handle your</h2>
                            <h2>screen <span className='text-primary'>Professionally.</span>
                            </h2>
                        </div>

                        <p className='mt-8'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>

                        <div className='flex gap-20 mt-16'>
                            <div>
                                <h2 className='text-4xl font-bold text-primary'>500+</h2>
                                <p>Happy customers</p>
                            </div>
                            <div>
                                <h2 className='text-4xl font-bold text-primary'>16+</h2>
                                <p>Total services</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Overview;