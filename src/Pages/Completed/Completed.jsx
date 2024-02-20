import React from 'react';
 
import Title from '../../Shared/Title';
import useTask from '../../hooks/useTask';
import TaskCard from '../../Shared/TaskCard';

const Completed = () => {

    const [tasks, taskLoading, refetch] = useTask();
    // console.log(tasks);

    const completeStatusTask = tasks.filter(item => item.status === 'completed');
    // console.log(newStatusTask);


    return (
        <div>
            <Title heading={"  Completed Task"}></Title>
            <TaskCard taskData={completeStatusTask}> </TaskCard>
          
        </div>
    );
};

export default Completed;