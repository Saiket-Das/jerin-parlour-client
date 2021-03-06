import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';



const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className='mx-auto py-9 lg:px-36'>
            <div className='mt-20'>
                <h2 className='text-4xl font-bold text-center'>Our Awesome <span className='text-primary'>Services</span></h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-28'>
                {
                    services.map(service =>
                        <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                }
            </div>


            <div className='flex justify-center mt-12'>
                <button className="btn btn-primary">
                    <Link to='/services'>
                        Explore more
                    </Link>
                </button>

            </div>
        </div>
    );
};

export default Services;