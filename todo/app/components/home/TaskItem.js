"use client";

import React from "react";
import { updateStatus, updateTask } from "./actions";

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
  const [newTitle, setNewTitle] = React.useState(title);
  const [newDescription, setNewDescription] = React.useState(description);
  const [newDueDate, setNewDueDate] = React.useState(due_date);
  const [newStatus, setNewStatus] = React.useState(status);

  return (
    <>
      <div
        className="modal"
        id={"taskModal" + id}
        tabIndex="-1"
        aria-labelledby="taskModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="taskModalLabel">
                {title}
              </h1>
            </div>
            <form>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-default">
                    Title
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="title-input"
                    name="title-input"
                    aria-label="title-input"
                    aria-describedby="inputGroup-sizing-default"
                    value={newTitle}
                    onChange={(e) => {
                      setNewTitle(e.target.value);
                    }}
                  />
                </div>
                <input type="hidden" name="task-id" value={id} />
                <div className="input-group mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-default">
                    Description
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="description-input"
                    name="description-input"
                    aria-label="description-input"
                    aria-describedby="inputGroup-sizing-default"
                    value={newDescription}
                    onChange={(e) => {
                      setNewDescription(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-default">
                    Due date
                  </span>
                  <input
                    type="date"
                    className="form-control"
                    id="due-date-input"
                    name="due-date-input"
                    aria-label="description-input"
                    aria-describedby="inputGroup-sizing-default"
                    value={newDueDate}
                    onChange={(e) => {
                      setNewDueDate(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setNewDescription(description);
                    setNewTitle(title);
                    setNewDueDate(due_date);
                  }}
                >
                  Close
                </button>
                <button
                  type="submit"
                  formAction={updateTask}
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="card text-bg-secondary mb-3 w-100">
        <a data-bs-toggle="modal" data-bs-target={"#taskModal" + id}>
          <div className="card-header">{title}</div>
          <div className="card-body">
            <p className="card-title">{description}</p>
            <p className="card-text">Due date: {due_date}</p>
          </div>
        </a>
        <div className="d-flex justify-content-around p-2">
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Move to
            </button>
            <form>
              <input type="hidden" name="task-id" value={id}/>
              <input type="hidden" name="status-input" value={newStatus}/>
              <ul className="dropdown-menu">
                <li hidden={status == 1}>
                  <button className="dropdown-item" onClick={() => setNewStatus(1)} type="submit" formAction={updateStatus}>
                    Tasks
                  </button>
                </li>
                <li hidden={status == 2}>
                  <button className="dropdown-item" onClick={() => setNewStatus(2)} type="submit" formAction={updateStatus}>
                    In progress
                  </button>
                </li>
                <li hidden={status == 3}>
                  <button className="dropdown-item" onClick={() => setNewStatus(3)} type="submit" formAction={updateStatus}>
                    Done
                  </button>
                </li>
                <li hidden={status == 1 || status == 2}>
                  <button className="dropdown-item" onClick={() => setNewStatus(4)} type="submit" formAction={updateStatus}>
                    Archive
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
