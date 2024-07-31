"use client";

import React from "react";
import { archiveTask, deleteTask, updateStatus, updateTask } from "./actions";
import EditTask from "./EditTask";

const TaskItem = ({
  id,
  created_at,
  due_date,
  user_id,
  title,
  description,
  status,
}) => {
  if (due_date != null) {
    due_date = due_date.slice(0, 10);
  } else {
    due_date = null;
  }
  const [newTitle, setNewTitle] = React.useState(title);
  const [newDescription, setNewDescription] = React.useState(description);
  const [newDueDate, setNewDueDate] = React.useState(due_date);
  const [newStatus, setNewStatus] = React.useState(status);
  const [taskId, setTaskId] = React.useState(id);
  const dateNow = new Date().toISOString().slice(0, 10);

  return (
    <>
      <EditTask
        id={id}
        due_date={newDueDate}
        title={newTitle}
        description={newDescription}
      />

      <div className="card text-bg-light mb-3 w-100">
        <a data-bs-toggle="modal" data-bs-target={"#taskModal" + id}>
          <div className="card-header">{title}</div>
          <div className="card-body">
            <p className="card-title">{description}</p>
            <div className="d-flex flex-row">
              <p className="card-text pe-2 m-0">Due date: </p>
              <p
                className={
                  "card-text " +
                  (newStatus == 1 || newStatus == 2
                    ? due_date == dateNow
                      ? "text-warning"
                      : due_date > dateNow
                      ? "text-black"
                      : "text-danger"
                    : "text-success")
                }
              >
                {due_date}
              </p>
            </div>
          </div>
        </a>
        <div className="d-flex justify-content-around p-2">
          <div className="dropdown">
            <button
              className="btn btn-outline-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Move to
            </button>
            <form>
              <input type="hidden" name="task-id" value={id} />
              <input type="hidden" name="status-input" value={newStatus} />
              <ul className="dropdown-menu">
                <li hidden={status == 1}>
                  <button
                    className="dropdown-item"
                    onClick={() => setNewStatus(1)}
                    type="submit"
                    formAction={updateStatus}
                  >
                    To-do
                  </button>
                </li>
                <li hidden={status == 2}>
                  <button
                    className="dropdown-item"
                    onClick={() => setNewStatus(2)}
                    type="submit"
                    formAction={updateStatus}
                  >
                    In progress
                  </button>
                </li>
                <li hidden={status == 3}>
                  <button
                    className="dropdown-item"
                    onClick={() => setNewStatus(3)}
                    type="submit"
                    formAction={updateStatus}
                  >
                    Done
                  </button>
                </li>
                <li hidden={status == 1 || status == 2}>
                  <button
                    className="dropdown-item"
                    type="submit"
                    formAction={archiveTask}
                  >
                    Archive
                  </button>
                </li>
              </ul>
            </form>
          </div>

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
                      formAction={deleteTask}
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
