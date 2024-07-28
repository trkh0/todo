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
        class="modal"
        id={"taskModal" + id}
        tabindex="-1"
        aria-labelledby="taskModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="taskModalLabel">
                {title}
              </h1>
            </div>
            <form>
              <div class="modal-body">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    Title
                  </span>
                  <input
                    type="text"
                    class="form-control"
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
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    Description
                  </span>
                  <input
                    type="text"
                    class="form-control"
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
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    Due date
                  </span>
                  <input
                    type="date"
                    class="form-control"
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
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
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
                  class="btn btn-primary"
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
          <div class="dropdown">
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Move to
            </button>
            <form>
              <input type="hidden" name="task-id" value={id}/>
              <input type="hidden" name="status-input" value={newStatus}/>
              <ul class="dropdown-menu">
                <li hidden={status == 1}>
                  <button class="dropdown-item" onClick={() => setNewStatus(1)} type="submit" formAction={updateStatus}>
                    Tasks
                  </button>
                </li>
                <li hidden={status == 2}>
                  <button class="dropdown-item" onClick={() => setNewStatus(2)} type="submit" formAction={updateStatus}>
                    In progress
                  </button>
                </li>
                <li hidden={status == 3}>
                  <button class="dropdown-item" onClick={() => setNewStatus(3)} type="submit" formAction={updateStatus}>
                    Done
                  </button>
                </li>
                <li hidden={status == 1 || status == 2}>
                  <button class="dropdown-item" onClick={() => setNewStatus(4)} type="submit" formAction={updateStatus}>
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
