import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import CategoryFood from './categoryFood/CategoryFood';

const CategoriesFood = () => {
    const foodsPromise = useLoaderData()
    const foods = foodsPromise.meals
    const navigate = useNavigate()
    return (
        <div className='mt-6 text-center space-y-2 px-2'>
            <p className='text-xl font-semibold'>Total Foods {foods.length}</p>
            <button
                onClick={() => navigate(-1)}
                className='btn bg-[#9538E2] text-white'>Back</button>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2'>
                {
                    foods.map(food => <CategoryFood key={food.id} food={food}></CategoryFood>)
                }
            </div>
        </div>
    );
};

export default CategoriesFood;