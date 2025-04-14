import { Globe, PhoneIncoming } from 'lucide-react';
import React from 'react';

const Contact = () => {
    return (
        <div className='mt-6 text-center space-y-2'>
        
            <h4 className='text-xl font-semibold'>Contact Us</h4>
            <p className='flex gap-2 justify-center items-center'>    <PhoneIncoming /> 01740-520249</p>
            <a className='flex gap-2 justify-center items-center' href="https://shihabuddin-dev.vercel.app/" target='blank'> <Globe /> Developer Website</a>
        </div>
    );
};

export default Contact;