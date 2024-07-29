"use client";

import React from "react";
import { unarchiveTask, deleteArchivedTask } from "./actions";

const TaskItem = ({
  id,
  created_at,
  due_date,
  user_id,
  title,
  description,
  status,
}) => {
  due_date = due_date.slice(0, 10);
  const [taskId, setTaskId] = React.useState(id);

  return (
    <>
      <div className="card text-bg-light mb-3 w-100">
          <div className="card-header">{title}</div>
          <div className="card-body">
            <p className="card-title">{description}</p>
            <p className="card-text">Due date: {due_date}</p>
          </div>
        <div className="d-flex justify-content-around p-2">
          <form>
            <input type="hidden" name="task-id" value={taskId} />
            <button
              className="btn btn-outline-primary"
              type="submit"
              formAction={unarchiveTask}
            >
              Unarchive
            </button>
          </form>
          <button
            type="button"
            className="btn btn-outline-danger"
            data-bs-toggle="modal"
            data-bs-target={"#confirmDelete" + taskId}
          >
            Delete
          </button>
          <div
            className="modal fade"
            id={"confirmDelete" + taskId}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="confirmDeleteLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1
                    className="modal-title fs-5 text-black"
                    id="confirmDeleteLabel"
                  >
                    Are you sure you want to delete this task?
                  </h1>
                </div>

                <div className="modal-body">
                  <p className="text-black">This action cannot be undone!</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <form>
                    <input type="hidden" name="task-id-delete" value={taskId} />
                    <button
                      type="submit"
                      formAction={deleteArchivedTask}
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
