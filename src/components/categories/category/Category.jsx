import React from 'react';
import { NavLink } from 'react-router';

const Category = ({ category }) => {
    const { strCategory } = category

    return (
        <div>
            <NavLink to={`${strCategory}`}>
                <button className='btn bg-[#9538E2] text-white'>{strCategory}</button>
            </NavLink>
        </div>
    );
};

export default Category;