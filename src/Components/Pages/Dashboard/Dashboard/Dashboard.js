import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faList, faCommentDots, faListCheck, faPlus, faUserPlus, faDatabase } from '@fortawesome/free-solid-svg-icons'


const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-cyan-50 p-12">

                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-56 text-base-content bg-base-100">


                    {/* -------------- USER -------------- */}
                    <li>
                        <Link to='/dashboard'>
                            <span>
                                <FontAwesomeIcon
                                    icon={faCartShopping} className='text-primary' />
                            </span>
                            Book
                        </Link>
                    </li>

                    <li>
                        <Link to='/dashboard/bookingList'>
                            <span>
                                <FontAwesomeIcon
                                    icon={faList} className='text-primary' />
                            </span>
                            Booking List
                        </Link>
                    </li>


                    <li>
                        <Link to='/dashboard/review'>
                            <span>
                                <FontAwesomeIcon
                                    icon={faCommentDots} className='text-primary' />
                            </span>
                            Review
                        </Link>
                    </li>


                    {/* -------------- USER -------------- */}
                    <li>
                        <Link to='/dashboard/orderList'>
                            <span>
                                <FontAwesomeIcon
                                    icon={faListCheck} className='text-primary' />
                            </span>
                            Order list
                        </Link>
                    </li>

                    <li>
                        <Link to='/dashboard/addService'>
                            <span>
                                <FontAwesomeIcon
                                    icon={faPlus} className='text-primary' />
                            </span>
                            Add service
                        </Link>
                    </li>


                    <li>
                        <Link to='/dashboard/makeAdmin'>
                            <span>
                                <FontAwesomeIcon
                                    icon={faUserPlus} className='text-primary' />
                            </span>
                            Make Admin
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard/manageService'>
                            <span>
                                <FontAwesomeIcon
                                    icon={faDatabase} className='text-primary' />
                            </span>
                            Manage Services
                        </Link>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;


