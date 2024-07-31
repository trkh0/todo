"use client";

import React from "react";
import { updateTask } from "./actions";

const EditTask = ({ task_id, task_due_date, task_title, task_description }) => {
  if (task_due_date != null) {
    task_due_date = task_due_date.slice(0, 10);
  } else {
    //date input field requires a string, not null
    task_due_date = "";
  }
  const [dueDate, setDueDate] = React.useState(task_due_date);
  const [title, setTitle] = React.useState(task_title);
  const [description, setDescription] = React.useState(task_description);

  const [newTitle, setNewTitle] = React.useState(title);
  const [newDescription, setNewDescription] = React.useState(description);
  const [newDueDate, setNewDueDate] = React.useState(dueDate);
  const [dueDateChecked, setDueDateChecked] = React.useState(
    dueDate ? true : false
  );

  return (
    <>
      <div
        className="modal"
        id={"taskModal" + task_id}
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
                    value={newTitle}
                    onChange={(e) => {
                      setNewTitle(e.target.value);
                    }}
                  />
                </div>
                <input type="hidden" name="task-id" value={task_id} />
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
                        class="form-check-input mb-1"
                        type="checkbox"
                        id="checkboxNoLabel"
                        aria-label="due_date_checkbox"
                        checked={dueDateChecked}
                        onChange={(e) => {
                          setDueDateChecked(e.target.checked);
                          if (e.target.checked === false) {
                            setNewDueDate("");
                          } else {
                            setNewDueDate(dueDate);
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
                  onClick={() => {
                    setNewDescription(description);
                    setNewTitle(title);
                    setNewDueDate(dueDate);
                    setDueDateChecked(dueDate ? true : false);
                  }}
                >
                  Close
                </button>
                <button
                  type="submit"
                  formAction={updateTask}
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setDueDate(newDueDate);
                    setDescription(newDescription);
                    setTitle(newTitle);
                    setDueDateChecked(newDueDate ? true : false);
                  }}
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTask;
