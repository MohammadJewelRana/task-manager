import React, { useEffect, useState } from "react";
import Title from "../../Shared/Title";
import TaskCard from "../../Shared/TaskCard";
import useTask from "../../hooks/useTask";
import useSpecificTask from "../../hooks/useSpecificTask";

const NewTask = () => {


    const [allTask,newStatusTask,completeStatusTask,cancelStatusTask,progressStatusTask]=useSpecificTask()
    return (
        <div>
            <Title heading={"  New Task"}></Title>

            <TaskCard taskData={newStatusTask}> </TaskCard>

        </div>
    );
};

export default NewTask;
