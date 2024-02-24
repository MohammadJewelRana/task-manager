import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useTask from './useTask';

const useSpecificTask = () => {

    const [tasks, taskLoading, refetch] = useTask();

    const {user}=useContext(AuthContext);
    // console.log(user?.email);

    const allTask=tasks.filter(item=>item.email=== user?.email);
    // console.log(allTask);
    const newStatusTask = allTask.filter(item => item.status === 'new');
    const completeStatusTask = allTask.filter(item => item.status === 'completed');
    const cancelStatusTask = allTask.filter((item) => item.status === "cancel");
    const progressStatusTask = allTask.filter(item => item.status === 'progress');


    return [allTask,newStatusTask,completeStatusTask,cancelStatusTask,progressStatusTask];
};

export default useSpecificTask;