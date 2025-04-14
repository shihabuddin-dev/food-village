import React from 'react';

const Food = ({food}) => {
    const {strCategoryThumb,strCategory}=food
    return (
        <div className='border-2 border-[#9538E2] rounded-xl space-y-1 p-2'>
            <img className='w-48 md:w-78 mx-auto object-cover' src={strCategoryThumb} alt="food images" />
           <h4 className='text-lg font-semibold'>{strCategory}</h4>
           <button className='btn bg-[#9538E2] text-white'>Details</button>
        </div>
    );
};

export default Food;