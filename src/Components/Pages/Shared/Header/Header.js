import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo.png'


const Header = () => {
    return (
        <div className='bg-secondary'>
            <div className="navbar  mx-auto pt-16 lg:px-32">

                <div className="navbar-start">

                    {/* --------------- Phone --------------- */}
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to=''>About us</Link></li>
                            <li><Link to=''>Projects</Link></li>
                            <li><Link to=''>Contact</Link></li>
                            <li > <Link to=''>Admin</Link></li>
                            <Link to='' className="btn btn-primary px-11">Login</Link>
                        </ul>
                    </div>

                    {/* --------------- Logo --------------- */}
                    <Link to='' className="btn btn-ghost normal-case text-xl">
                        <img className='w-32' src={logo} alt="" />
                    </Link>

                </div>

                {/* --------------- Deskstop --------------- */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to=''>About us</Link></li>
                        <li><Link to=''>Projects</Link></li>
                        <li><Link to=''>Contact</Link></li>
                        <li > <Link to=''>Admin</Link></li>
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <Link to='' className="btn btn-primary px-11">Login</Link>
                </div>


            </div>

        </div>
    );
};

export default Header;