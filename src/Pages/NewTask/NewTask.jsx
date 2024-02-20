import React, { useEffect, useState } from "react";
import Title from "../../Shared/Title";
import TaskCard from "../../Shared/TaskCard";
import useTask from "../../hooks/useTask";

const NewTask = () => {


    const [tasks, taskLoading, refetch] = useTask();

    const newStatusTask = tasks.filter(item => item.status === 'new');
    // console.log(newStatusTask);

    return (
        <div>
            <Title heading={"  New Task"}></Title>

            <TaskCard taskData={newStatusTask}> </TaskCard>

        </div>
    );
};

export default NewTask;
