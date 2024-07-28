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
    <div className="card text-bg-secondary mb-3 w-100">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <h5 className="card-title">Secondary card title</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default TaskItem;
