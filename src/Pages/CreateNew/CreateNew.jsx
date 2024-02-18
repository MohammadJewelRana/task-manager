import React from 'react';
import Title from '../../Shared/Title';

const CreateNew = () => {


    
    return (
        <div>


            <Title heading={'Create New'}></Title>

            <form action="">
                <div className=' shadow-lg py-24 px-12 '>
                    <input type="text" className='text-black px-12 py-8 text-xl bg-white border  w-full h-12 rounded-lg mb-12 ' placeholder='Task Name' />

                    <textarea placeholder="Task Description" className="text-black px-12 py-8 text-xl bg-white border    rounded-lg   mb-4  w-full  h-44 " ></textarea>

                    <button className='bg-pink-600 px-8 py-2 text-white text-2xl rounded-lg font-semibold float-right transition-all duration-300 hover:bg-pink-400'> Create</button>

                </div>
            </form>




        </div>
    );
};

export default CreateNew;