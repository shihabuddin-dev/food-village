import React from 'react';
import { useNavigate } from 'react-router';

const ProcessVideo = ({ video }) => {
    const { strYoutube, strMeal } = video
    const navigate = useNavigate()
    return (
        <div className='mt-6 text-center space-y-2'>
            <button
                onClick={() => navigate(-1)}
                className='btn bg-[#9538E2] text-white'>Back</button>
            <p className='text-xl font-semibold'>{strMeal}</p>
            <iframe className='mx-auto rounded-xl'
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${strYoutube}`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>

        </div>
    );
};

export default ProcessVideo;