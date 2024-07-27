import React from "react";

const TaskItem = ({
  id,
  created_at,
  due_date,
  user_id,
  title,
  description,
  status,
}) => {
  return (
    <div>
      <p>{description}</p>
    </div>
  );
};

export default TaskItem;
