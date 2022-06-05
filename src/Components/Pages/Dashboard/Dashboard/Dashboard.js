import React from 'react';
import { Link, Outlet } from 'react-router-dom';

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
                    {/* For Both ( USER & ADMIN ) */}
                    <li><Link to='/dashboard'>Book</Link></li>
                    <li><Link to='/dashboard/bookingList'>Booking List</Link></li>
                    <li><Link to='/dashboard/review'>Booking List</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;


