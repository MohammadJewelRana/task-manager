import React from 'react';

const Title = ({heading}) => {
    return (
        <div className='my-12 text-center bg-slate-200 rounded-lg shadow-md w-full p-4'>
            <p className='text-4xl font-bold text-red-600 '>{heading}</p>

        </div>
    );
};

export default Title;