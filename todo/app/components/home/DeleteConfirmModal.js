import React from 'react';
import { deleteTask } from './actions';

const DeleteConfirmModal = ( {task_id} ) => {

    return (
        <div
            className="modal fade"
            id={"confirmDelete" + task_id}
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
                    <input type="hidden" name="task-id-delete" value={task_id} />
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
    );
};

export default DeleteConfirmModal;