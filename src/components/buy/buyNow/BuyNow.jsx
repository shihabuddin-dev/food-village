import React from 'react';
import { NavLink } from 'react-router';

const BuyNow = ({ food }) => {
    const { strMeal, strMealThumb, strSource, strYoutube, strInstructions } = food
    return (
        <div className='border-2 border-[#9538E2] rounded-xl p-2'>
            <img className='w-52 md:w-78 mx-auto object-cover rounded-xl' src={strMealThumb} alt="" />
            <div className='py-2 text-center space-y-2'>
                <div>
                    <p className='text-lg font-semibold'>{strMeal}</p>
                    <small>{strInstructions.slice(0, 110)}.......</small>
                </div>
                <div className='flex justify-center items-center flex-wrap gap-2'>

                    <NavLink to='buy-details'>
                        <a
                            target='blank'
                            className='btn bg-[#9538E2] text-white'>Show Details
                        </a>
                    </NavLink>

                    <a href={strYoutube && strYoutube}
                        className='btn bg-[#9538E2] text-white'>{strYoutube ? 'Process' : 'Not Found'}</a>
                    <a href={strSource && strSource}
                        className='btn bg-[#9538E2] text-white'>{strSource ? 'Buy Now' : 'Stock Out'}</a>
                </div>

            </div>
        </div>
    );
};

export default BuyNow;