import React from 'react';
import { useLoaderData } from 'react-router';
import BuyNow from './buyNow/BuyNow';

const Buy = () => {
    const foodsPromise = useLoaderData()
    const foods = foodsPromise.meals
    return (
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6 px-2'>
            {
                foods.map(food => <BuyNow key={food.idMeal} food={food}></BuyNow>)
            }
        </div>
    );
};

export default Buy;