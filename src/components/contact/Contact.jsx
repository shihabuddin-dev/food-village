import { Globe, PhoneIncoming } from 'lucide-react';
import React from 'react';

const Contact = () => {
    return (
        <div className='mt-6 text-center space-y-1'>
            <h4 className='text-2xl md:text-3xl'>Contact Me</h4>
            <img className='w-[250px] md:w-[600px] mx-auto' src="https://i.postimg.cc/7647fGQ4/contact.png" alt="" />
            <div className='flex justify-center items-center gap-8'>
                <p className='flex gap-2 justify-center items-center'>    <PhoneIncoming /> 01740-520249</p>
                <a className='flex gap-2 justify-center items-center' href="https://shihabuddin-dev.vercel.app/" target='blank'> <Globe /> Developer Website</a>
            </div>
        </div>
    );
};

export default Contact;