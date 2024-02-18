import React from 'react';
import Title from '../../Shared/Title';

const Dashboard = () => {
    return (


        <div>

 <Title heading={'Dashboard'}></Title>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='border shadow-lg p-4  md:w-96 md:h-32  text-center flex flex-col items-center justify-center rounded-lg'>
                    <h1 className='text-2xl font-semibold mb-2'>Total Completed</h1>
                    <p className='font-bold text-xl'> 3 </p>
                </div>
                <div className='border shadow-lg p-4  md:w-96 md:h-32  text-center flex flex-col items-center justify-center rounded-lg'>
                    <h1 className='text-2xl font-semibold mb-2'>Total Progress</h1>
                    <p className='font-bold text-xl'> 3 </p>
                </div>

                <div className='border shadow-lg p-4  md:w-96 md:h-32  text-center flex flex-col items-center justify-center rounded-lg'>
                    <h1 className='text-2xl font-semibold mb-2'>Total Undefined</h1>
                    <p className='font-bold text-xl'> 3 </p>
                </div>

                <div className='border shadow-lg p-4  md:w-96 md:h-32  text-center flex flex-col items-center justify-center rounded-lg'>
                    <h1 className='text-2xl font-semibold mb-2'>Total New</h1>
                    <p className='font-bold text-xl'> 3 </p>
                </div>






            </div>
        </div>
    );
};

export default Dashboard;