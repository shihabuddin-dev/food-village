import React from 'react';
import { useLoaderData } from 'react-router';
import Food from './Food';

const Foods = () => {
    const foodsPromise = useLoaderData()
    const foods = foodsPromise.categories
    return (
        <div className='text-center mt-6 px-2'>
            <h4 className='text-xl font-semibold'>Total Foods {foods.length}</h4>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                {
                    foods.map(food => <Food key={food.id} food={food}></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;