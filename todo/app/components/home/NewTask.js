"use client";

import React from "react";
import { createTask } from "./actions";

function NewTask() {
  const date = new Date().toISOString().slice(0, 10);
  const [newTitle, setNewTitle] = React.useState("");
  const [newDescription, setNewDescription] = React.useState("");
  const [newDueDate, setNewDueDate] = React.useState(date);
  const [dueDateChecked, setDueDateChecked] = React.useState(false);

  return (
    <div>
      <a data-bs-toggle="modal" data-bs-target={"#newTaskModal"}>
        <button
          type="button"
          className="btn btn-outline-secondary w-100 my-2 p-2"
          onClick={() => {
            setNewDescription("");
            setNewTitle("");
            setNewDueDate(date);
            setDueDateChecked(false);
          }}
        >
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
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Title
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="title-input"
                    name="title-input"
                    aria-label="title-input"
                    aria-describedby="inputGroup-sizing-default"
                    required
                    value={newTitle}
                    onChange={(e) => {
                      setNewTitle(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Description
                  </span>
                  <textarea
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
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    <div className="d-flex align-items-center">
                      <input
                        className="form-check-input mb-1"
                        type="checkbox"
                        id="checkboxNoLabel"
                        aria-label="due_date_checkbox"
                        checked={dueDateChecked}
                        onChange={(e) => {
                          setDueDateChecked(e.target.checked);
                          if (e.target.checked === false) {
                            setNewDueDate("");
                          } else {
                            setNewDueDate(date);
                          }
                        }}
                      />

                      <span className="ps-2">Due date</span>
                    </div>
                  </span>
                  <input
                    type="date"
                    className="form-control"
                    id="due-date-input"
                    name="due-date-input"
                    aria-label="description-input"
                    aria-describedby="inputGroup-sizing-default"
                    disabled={!dueDateChecked}
                    value={dueDateChecked ? newDueDate : ""}
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
                  formNoValidate
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  formAction={createTask}
                  className="btn btn-primary"
                  data-bs-dismiss={newTitle ? "modal" : ""}
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
