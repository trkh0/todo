"use client";

import React from "react";
import { updateTask } from "./actions";

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

      <a data-bs-toggle="modal" data-bs-target={"#taskModal" + id}>
        <div className="card text-bg-secondary mb-3 w-100">
          <div className="card-header">{title}</div>
          <div className="card-body">
            <h5 className="card-title">Secondary card title</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default TaskItem;
