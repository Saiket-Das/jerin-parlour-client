import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



const MakeAdmin = () => {
    return (
        <div className='w-full bg-base-100'>
            <div className="form-control p-9 ">
                <div className="flex justify-center">

                    <div className="w-full lg:w-96 md:w-96">

                        {/* ENTER EMAIL Label  */}
                        <label className="label">
                            <span className="label-text font-semibold">Enter email</span>
                        </label>

                        {/* SEARCH input + SEARCH Button  */}
                        <div className='flex'>
                            <input type="text"
                                placeholder="abc@gmail.com" className="input input-bordered w-96" />
                            <button className="btn btn-primary mx-2">
                                <FontAwesomeIcon
                                    icon={faMagnifyingGlass} className='text-base-100 mt-1' />
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;