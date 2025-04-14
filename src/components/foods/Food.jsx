import React, { Suspense, useState } from 'react';

const Food = ({ food }) => {
    const { strCategoryThumb, strCategory, strCategoryDescription } = food
    const [details, setDetails] = useState(false)
    return (
        <div className='border-2 border-[#9538E2] rounded-xl space-y-1 p-2'>
            <img className='w-54 md:w-78 mx-auto object-cover' src={strCategoryThumb} alt="food images" />
            <h4 className='text-lg font-semibold'>{strCategory}</h4>
            <button
                onClick={() => setDetails(!details)}
                className='btn bg-[#9538E2] text-white'>{details ? 'Hide' : 'Details'}</button>
            {
                details && <p className='px-2'>{strCategoryDescription.slice(0, 250)}</p>
            }
        </div>
    );
};

export default Food;