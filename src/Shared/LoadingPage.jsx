import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center  h-96 bg-gray-200">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-red-300 h-24 w-24"></div>
      <div className='mt-12 text-2xl font-bold'>
        <p>Loading ......</p>
      </div>
    </div>
  );
};

export default LoadingPage;