import React, { useContext } from 'react';
import Title from '../../Shared/Title';
import useTask from '../../hooks/useTask';
import useUSer from '../../hooks/useUSer';
import { AuthContext } from '../../Provider/AuthProvider';

const Dashboard = () => {

    const [tasks, taskLoading, refetch] = useTask();

    // const [users, userLoading, userRefetch]=useUSer();
    // console.log(users);
  

    const {user}=useContext(AuthContext);
    // console.log(user?.email);

    const allTask=tasks.filter(item=>item.email=== user?.email);
    // console.log(allTask);
 



    const newStatusTask = allTask.filter(item => item.status === 'new');
    const completeStatusTask = allTask.filter(item => item.status === 'completed');
    const cancelStatusTask = allTask.filter(item => item.status === 'cancel');
    const progressStatusTask = allTask.filter(item => item.status === 'progress');


    // console.log(newStatusTask);

    return (


        <div className='mb-12'>

            <Title heading={'Dashboard'}></Title>


            <div className='border shadow-lg p-4 w-full mb-12   md:h-32  text-center flex flex-col items-center justify-center rounded-lg'>
                    <h1 className='text-2xl font-semibold mb-2'>Total Tasks</h1>
                    <p className='font-bold text-xl'> {allTask.length} </p>
                </div>



            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
             
            <div className='border shadow-lg p-4  md:w-96 md:h-32  text-center flex flex-col items-center justify-center rounded-lg'>
                    <h1 className='text-2xl font-semibold mb-2'>Total New</h1>
                    <p className='font-bold text-xl'> {newStatusTask.length} </p>
                </div>

             
                <div className='border shadow-lg p-4  md:w-96 md:h-32  text-center flex flex-col items-center justify-center rounded-lg'>
                    <h1 className='text-2xl font-semibold mb-2'>Total Completed</h1>
                    <p className='font-bold text-xl'> {completeStatusTask.length} </p>
                </div>
                <div className='border shadow-lg p-4  md:w-96 md:h-32  text-center flex flex-col items-center justify-center rounded-lg'>
                    <h1 className='text-2xl font-semibold mb-2'>Total Progress</h1>
                    <p className='font-bold text-xl'> {progressStatusTask.length} </p>
                </div>
 
 

                <div className='border shadow-lg p-4  md:w-96 md:h-32  text-center flex flex-col items-center justify-center rounded-lg'>
                    <h1 className='text-2xl font-semibold mb-2'>Total Canceled</h1>
                    <p className='font-bold text-xl'> {cancelStatusTask.length} </p>
                </div>





            </div>
        </div>
    );
};

export default Dashboard;