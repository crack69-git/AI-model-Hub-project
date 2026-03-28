import React from 'react';
import { ShoppingCart } from 'lucide-react';
import logo from '../../assets/logo.png';

const NavBar = () => {
    return (
        <div className='px-4 py-5'>
            <div className='flex justify-between '>
                <div className='flex items-center gap-2'>
                    <img src={logo} alt="Logo" className='w-10 h-10' />
                    <p className='text-xl font-bold'>AI Hub</p>
                </div>
                <div className='items-center gap-4 hidden text-sm sm:flex'>
                    <a className='hover:bg-gray-200 p-2 rounded-3xl cursor-pointer'>Home</a>
                    <a className='hover:bg-gray-200 p-2 rounded-3xl cursor-pointer'>About</a>
                    <a className='hover:bg-gray-200 p-2 rounded-3xl cursor-pointer'>Services</a>
                    <a className='hover:bg-gray-200 p-2 rounded-3xl cursor-pointer'>Contact</a>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='border rounded-full p-2 border-gray-300 bg-gray-100 cursor-pointer'>
                        <ShoppingCart className='text-red-600' />
                    </div>
                    <button className='border px-5 py-2 rounded-3xl cursor-pointer bg-red-500 text-white hover:bg-red-600 font-bold'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;