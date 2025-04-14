import React from 'react';

const CategoryFood = ({food}) => {
    const {strMealThumb,strMeal}=food
    return (
        <div className='border-2 border-[#9538E2] p-2 md:p-4 rounded-xl space-y-2'>
            <img className='w-52 h-42 md:w-78 md:h-50 mx-auto object-cover rounded-xl' src={strMealThumb} alt="" />
            <p className='text-lg font-semibold'>{strMeal}</p>
        </div>
    );
};

export default CategoryFood;