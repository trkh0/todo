"use client";

import React from "react";
import TaskItemArchived from "./TaskItemArchived";

const ArchivedContents = ({ task_data }) => {
  const currentDate = new Date();

  const [todayFilter, setTodayFilter] = React.useState(false);
  const [orderFilter, setOrderFilter] = React.useState(2);
  const [searchFilter, setSearchFilter] = React.useState("");
  let tasks = task_data.data;

  if (todayFilter) {
    tasks = task_data.data.filter(
      (task) =>
        task.due_date.slice(8, 10) == currentDate.getDate() &&
        task.due_date.slice(5, 7) == currentDate.getMonth() + 1 &&
        task.due_date.slice(0, 4) == currentDate.getFullYear()
    );
  }

  if (orderFilter == 1) {
    tasks = tasks.sort((a, b) => (a.due_date > b.due_date ? 1 : -1));
  } else if (orderFilter == 2) {
    tasks = tasks.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
  }

  if (searchFilter) {
    tasks = tasks.filter((task) => task.title.includes(searchFilter));
  }

  return (
    <div className="p-3">
      <div
        className="accordion accordion-flush border mb-4"
        id="filterAccordion"
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Filter tasks
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#filterAccordion"
          >
            <div className="accordion-body d-flex align-items-center flex-wrap justify-content-center">
              <div className="form-check form-switch d-flex align-items-center mb-3">
                <span>All</span>
                <div className="ps-5">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    checked={todayFilter}
                    onChange={() => setTodayFilter(!todayFilter)}
                  />
                </div>
                <span>Today</span>
              </div>
              <div className="mx-5 d-flex flex-row align-items-center mb-3">
                <label className="text-nowrap pe-2 fs-6 align-middle">
                  Order by:
                </label>
                <select
                  className="form-select form-select-sm"
                  aria-label="Small select example"
                  onChange={(e) => setOrderFilter(e.target.value)}
                  defaultValue={orderFilter}
                >
                  <option disabled key="1">
                    Order tasks
                  </option>
                  <option value="2" key="2">
                    Created
                  </option>
                  <option value="1" key="3">
                    Due date
                  </option>
                </select>
              </div>
              <div class="input-group mb-3 d-flex align-items-center mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">
                  Search
                </span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="search-input"
                  aria-describedby="search-input-desc"
                  onChange={(e) => setSearchFilter(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        <div className="w-100 px-2">
          <p className="fs-3">Archived tasks</p>
          <div className="d-flex flex-wrap">
            <p hidden={tasks.length ? true : false}>No task found!</p>
            {tasks.map((task) => (
              <div className=" tw-max-w-96 w-100 px-2">
                <TaskItemArchived
                  key={task.id}
                  id={task.id}
                  created_at={task.created_at}
                  due_date={task.due_date}
                  user_id={task.user_id}
                  title={task.title}
                  description={task.description}
                  status={task.status}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchivedContents;
