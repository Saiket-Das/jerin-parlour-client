import React from 'react';
import { Link } from 'react-router-dom';

const ServiceList = ({ service }) => {
    const { name, description, price, img } = service
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className='p-4'>
                <img className='sm:w-48' src={img} alt="Album" />
            </figure>


            <div className="card-body">
                <h2 className="card-title text-primary">{name}</h2>
                <p>{description}</p>
                <p>Price: <span className='font-semibold text-primary-focus'>${price}</span></p>


                <div className="card-actions justify-center">
                    <button className="btn btn-primary btn-sm">
                        <Link to='/dashboard'>
                            Book
                        </Link>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ServiceList;