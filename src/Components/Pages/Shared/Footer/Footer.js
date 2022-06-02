import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=''>
            <footer className="footer flex justify-between  bg-primary text-content pt-16 pb-24 lg:px-36 p-8 text-white">
                <div className='pt-5'>
                    <Link to='/' className="link link-hover">H#000 (0th Floor), Road #00,</Link>
                    <Link to='/' className="link link-hover">New DOHS, Mohakhali, Dhaka, Bangladesh</Link>

                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Branding</Link>
                    <Link to='/' className="link link-hover">Design</Link>
                    <Link to='/' className="link link-hover">Marketing</Link>
                    <Link to='/' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">About us</span>
                    <p>Lorem ipsum dolor sit amet, consectetur </p>
                    <p>adipiscing elit. Purus commodo ipsum</p>
                    <p>duis laoreet maecenas. Feugiat</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;