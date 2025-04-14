import React from 'react';
import { NavLink } from 'react-router';
import './header.css'

const Header = () => {
    return (
        <div className="navbar bg-[#9538E2] text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="mr-2 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#9538E2] rounded-box z-1 mt-3 w-52 px-4 shadow">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/foods'>Foods</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                    </ul>
                </div>
                <a className="text-xl md:text-2xl font-bold">Food Village</a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-4 space-x-4 text-xl font-semibold">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/foods'>Foods</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to='/buy'> <a className="btn btn-sm md:btn btn-primary md:btn-primary md:text-sm">Buy Now</a></NavLink>
            </div>
        </div>
    );
};

export default Header;