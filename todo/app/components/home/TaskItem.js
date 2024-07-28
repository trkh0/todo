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
  console.log(id);
  return (
    <>
      <div
        class="modal fade"
        id={"taskModal" + id}
        tabindex="-1"
        aria-labelledby="taskModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="taskModalLabel">
                {title}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">{description}</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
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
