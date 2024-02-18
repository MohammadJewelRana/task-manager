import React from 'react';
import { Outlet } from 'react-router-dom';

const SideLayout = () => {
    return (
        <div>
            
 
            <Outlet></Outlet>

        </div>
    );
};

export default SideLayout;