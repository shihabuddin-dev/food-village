import React from 'react';

const Home = () => {
    return (
        <div className='mt-6 text-center space-y-3'>
            <h1 className='text-2xl md:text-3xl font-semibold '>Welcome to Food Village Explore Foods Here</h1>
            <p className='md:w-8/12 mx-auto text-base'><small >A bustling food village, a sensory explosion of global cuisines. From sizzling street eats to elegant gourmet dishes, vendors showcase culinary passions. Communal tables hum with chatter, fostering a vibrant, multicultural dining experience. The air, thick with fragrant spices and savory aromas, promises a feast for every palate.
            </small></p>
            <img className='w-[300px] md:w-[600px] mx-auto' src="https://i.postimg.cc/j5n67YR6/foods.png" alt="" />
        </div>
    );
};

export default Home;