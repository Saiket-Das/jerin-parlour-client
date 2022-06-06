import React from 'react';
import './Service.css'


const Service = (props) => {
    const { name, price, description, img } = props.service
    return (
        <div className='mt-16'>
            <div className='text-center service-card card-hover p-9'>
                <img className='w-28 mb-4 img-center' src={img} alt="" />
                <h3 className='text-2xl font-semibold'>{name}</h3>
                <p className='text-xl text-primary font-medium'>${price}</p>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default Service;