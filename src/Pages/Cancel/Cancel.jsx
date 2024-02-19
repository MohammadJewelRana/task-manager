import React from "react";

import Title from "../../Shared/Title";
import useTask from "../../hooks/useTask";
import TaskCard from "../../Shared/TaskCard";

const Cancel = () => {
  const [tasks] = useTask();

  const cancelStatusTask = tasks.filter((item) => item.status === "cancel");
  // console.log(newStatusTask);

  return (
    <div>
      <Title heading={"  Canceled Task"}></Title>

      <TaskCard taskData={cancelStatusTask}></TaskCard>
    </div>
  );
};

export default Cancel;
