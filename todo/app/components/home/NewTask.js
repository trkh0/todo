"use client";

import React from "react";
import { createTask } from "./actions";

function NewTask() {
  const date = new Date().toISOString().slice(0, 10);
  const [newTitle, setNewTitle] = React.useState("");
  const [newDescription, setNewDescription] = React.useState("");
  const [newDueDate, setNewDueDate] = React.useState(date);

  return (
    <div>
      <a data-bs-toggle="modal" data-bs-target={"#newTaskModal"}>
        <button type="button" className="btn btn-primary w-100 my-2 p-2">
          New task
        </button>
      </a>
      <div
        className="modal"
        id={"newTaskModal"}
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
                New task
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
                    setNewDescription("");
                    setNewTitle("");
                    setNewDueDate(date);
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  formAction={createTask}
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Add task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTask;