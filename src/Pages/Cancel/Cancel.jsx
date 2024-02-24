import React from "react";

import Title from "../../Shared/Title";
import useTask from "../../hooks/useTask";
import TaskCard from "../../Shared/TaskCard";
import useSpecificTask from "../../hooks/useSpecificTask";

const Cancel = () => {
  const [allTask,newStatusTask,completeStatusTask,cancelStatusTask,progressStatusTask]=useSpecificTask()

  return (
    <div>
      <Title heading={"  Canceled Task"}></Title>

      <TaskCard taskData={cancelStatusTask} ></TaskCard>
    </div>
  );
};

export default Cancel;
