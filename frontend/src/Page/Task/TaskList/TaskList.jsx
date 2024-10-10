import React from "react";
import TaskCard from "../TaskCard/TaskCard";

const TaskList = () => {
  return (
    <div className="space-y-5 w-[67vw]">
      {/* {task.tasks.length > 0 ? ( */}
      <div className="space-y-2 ">
        {/* {task.tasks.map((item) => (
            <TaskCard item={item} />
          ))} */}
        {[1, 1, 1, 1].map((item) => (
          <TaskCard></TaskCard>
        ))}
      </div>
      {/* ) : (
        <div className="flex flex-col justify-center items-center h-[70vh]">
          <NotInterestedIcon sx={{ fontSize: "15rem" }} />
          <h1 className="font-bold text-xl">You Don't Have Any Pending Task</h1>
        </div>
      )} */}
    </div>
  );
};

export default TaskList;
