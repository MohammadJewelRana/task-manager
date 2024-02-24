import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layout/HomeLayout.jsx'
import Home from '../Pages/Home/Home.jsx';
import Dashboard from '../Pages/Dashboard/Dashboard.jsx';
import SideLayout from '../Layout/SideLayout.jsx';
import CreateNew from '../Pages/CreateNew/CreateNew.jsx'
import NewTask from '../Pages/NewTask/NewTask.jsx'
import Progress from '../Pages/Progress/Progress.jsx'
import Complete from '../Pages/Completed/Completed.jsx'
import Cancel from '../Pages/Cancel/Cancel.jsx'
import Login from '../Pages/Login_Reg/Login.jsx';
import Registration from '../Pages/Login_Reg/Registration.jsx';

 const router=createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                children:[
                    {
                        path:'/',
                        element:<Dashboard></Dashboard>
                    },
                    {
                        path:'/createNew',
                        element:<CreateNew></CreateNew>
                    },
                    {
                        path:'/newTask',
                        element:<NewTask></NewTask>
                    },
                    {
                        path:'/progress',
                        element: <Progress></Progress>
                    },
                    {
                        path:'/complete',
                        element: <Complete></Complete>
                    },
                    {
                        path:'/cancel',
                        element: <Cancel></Cancel>
                    },

    
                ]
               
 
            },

     

        ]
    },

 

    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/registration',
        element:<Registration></Registration>
    }




 ])
export default router;