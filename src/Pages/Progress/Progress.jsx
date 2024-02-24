import React from 'react';
import Swal from 'sweetalert2';
import Title from '../../Shared/Title';
import TaskCard from '../../Shared/TaskCard';
import useTask from '../../hooks/useTask';
import useSpecificTask from '../../hooks/useSpecificTask';

const Progress = () => {

 
    const [allTask,newStatusTask,completeStatusTask,cancelStatusTask,progressStatusTask]=useSpecificTask()

    // const [tasks, taskLoading, refetch] = useTask();
    // const progressStatusTask = tasks.filter(item => item.status === 'progress');
    // console.log(newStatusTask);

    return (
        <div>

            <Title heading={"  In Progress"}></Title>

            <TaskCard taskData={progressStatusTask}></TaskCard>
 
        </div>
    );
};

export default Progress;