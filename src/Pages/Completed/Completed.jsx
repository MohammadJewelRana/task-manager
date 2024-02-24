import React from 'react';
 
import Title from '../../Shared/Title';
import useTask from '../../hooks/useTask';
import TaskCard from '../../Shared/TaskCard';
import useSpecificTask from '../../hooks/useSpecificTask';

const Completed = () => {

    const [allTask,newStatusTask,completeStatusTask,cancelStatusTask,progressStatusTask]=useSpecificTask()


    return (
        <div>
            <Title heading={"  Completed Task"}></Title>
            <TaskCard taskData={completeStatusTask}> </TaskCard>
          
        </div>
    );
};

export default Completed;