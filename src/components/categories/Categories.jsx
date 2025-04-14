import React from 'react';
import { useLoaderData } from 'react-router';
import Category from './category/Category';

const Categories = () => {
    const categoriesPromise = useLoaderData()
    const categories = categoriesPromise.meals

    return (
        <div className='mt-6'>
            <div className='flex flex-wrap gap-2'>
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>

        </div>
    );
};

export default Categories;