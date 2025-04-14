import React from 'react';

const Category = ({category}) => {
    const {strCategory}=category
    return (
        <div>
            <button className='btn btn-primary'>{strCategory}</button>
        </div>
    );
};

export default Category;