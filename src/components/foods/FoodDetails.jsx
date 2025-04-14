import React, { use } from 'react';

const FoodDetails = ({fetchFoods}) => {
    const foods=use(fetchFoods)
    console.log(foods)
    return (
        <div>
            <h4>aa</h4>
        </div>
    );
};

export default FoodDetails;