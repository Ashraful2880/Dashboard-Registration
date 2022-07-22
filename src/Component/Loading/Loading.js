import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div>
                <div className='animate-spin rounded-full h-14 w-14 border-b-2 border-green-900'></div>
                <h4 className="text-md font-semibold mt-4">Loading...</h4>
            </div>
        </div>
    );
};

export default Loading;