import React from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='mt-6 text-center'>
            <h3 className='text-xl md:text-2xl font-semibold text-[#9538E2]'>This Page didn't Find</h3>
            <img className='w-[250px] md:w-[600px] mx-auto' src="https://i.ibb.co.com/VhwFF1T/404.png" alt="" />
            <button
                onClick={() => navigate(-1)}
                className='btn bg-[#9538E2] text-white'>Back to home</button>
        </div>
    );
};

export default NotFound;