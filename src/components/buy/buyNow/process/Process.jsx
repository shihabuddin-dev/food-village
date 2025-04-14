import React from 'react';
import { useLoaderData } from 'react-router';
import ProcessVideo from './processVideo/ProcessVideo';

const Process = () => {
    const processPromise = useLoaderData()
    const process = processPromise.meals
    return (
        <div>
            {
                process.map(video => <ProcessVideo key={video.idMeal} video={video}></ProcessVideo>)
            }
        </div>
    );
};

export default Process;