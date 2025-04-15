import React from 'react';
import { useLoaderData } from 'react-router';
import Category from './category/Category';

const Categories = () => {
    const categoriesPromise = useLoaderData()
    const categories = categoriesPromise.categories

    return (
        <div className='mt-6 px-2 mx-auto text-center space-y-4'>
            <p className='font-semibold text-xl md:text-2xl'>Total Categories {categories.length}</p>
            <div className='flex flex-wrap gap-1 md:gap-2 justify-center items-center'>
                {
                    categories.map(category => <Category key={category.idCategory} category={category}></Category>)
                }
            </div>
            <p className='font-semibold text-xl md:text-2xl '>If You Would like to get Categories Foods select One of the above</p>

        </div>
    );
};

export default Categories;