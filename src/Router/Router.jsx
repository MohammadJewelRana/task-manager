import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layout/HomeLayout.jsx'

 const router=createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>
    }
 ])
export default router;