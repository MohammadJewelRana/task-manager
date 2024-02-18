import React from 'react';
import Sidebar from '../../Shared/Sidebar';
import { Outlet } from 'react-router-dom';
import SideLayout from '../../Layout/SideLayout';

const Home = () => {
    return (
        <div className='flex gap-8'>

            <div className='hidden md:block transition-all duration-500 md:w-[280px]  bg-gray-100 h-screen  '>

              <Sidebar></Sidebar>

            </div>

            <div className='mt-32 ml-8'>
           
                {/* <SideLayout></SideLayout> */}

               <Outlet> </Outlet>

            </div>

        </div>
    );
};

export default Home;