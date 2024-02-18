import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Login from '../Pages/Login_Reg/Login';
import Registration from '../Pages/Login_Reg/Registration';

const HomeLayout = () => {
    return (
        <div>
            {/* <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer> */}

            <Login></Login>
            {/* <Registration></Registration> */}

        </div>
    );
};

export default HomeLayout;