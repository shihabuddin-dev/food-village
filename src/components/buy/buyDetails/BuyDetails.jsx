import React from 'react';

const BuyDetails = ({ food }) => {
    const { strMeal, strCategory, strMealThumb, strInstructions, strArea } = food
    return (
        <div className='text-justify'>
            <button className="btn bg-[#9538E2] text-white" onClick={() => document.getElementById('my_modal_1').showModal()}>Show Details</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className='border-2 border-[#9538E2] p-2 rounded-xl'>
                        <img className='w-52 md:w-78 mx-auto object-cover rounded-xl' src={strMealThumb} alt="" />
                        <div className='py-2 space-y-2'>
                            <div className='text-justify space-y-1'>
                                <p className='text-lg font-semibold'>Name: <span className='font-normal'>{strMeal}</span></p>
                                <p className='text-lg font-semibold'>Category: <span className='font-normal'>{strCategory}</span></p>
                                <p className='text-lg font-semibold'>Countries: <span className='font-normal'>{strArea}</span></p>
                                <small> <span className='text-base font-semibold'>Description:</span> {strInstructions}</small>
                            </div>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn bg-[#9538E2] text-white">Close</button>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>






        </div>
    );
};

export default BuyDetails;