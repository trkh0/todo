"use client";

import React from "react";
import TaskItem from "./TaskItem";

const HomeContents = ({ task_data }) => {
  const currentDate = new Date();

  const [todayFilter, setTodayFilter] = React.useState(false);
  let tasks = task_data.data;

  if (todayFilter) {
    tasks = task_data.data.filter(
      (task) =>
        task.due_date.slice(8, 10) == currentDate.getDate() &&
        task.due_date.slice(5, 7) == currentDate.getMonth() + 1 &&
        task.due_date.slice(0, 4) == currentDate.getFullYear()
    );
  }

  const tasks_unfinished = tasks.filter((task) => task.status === 1);
  const tasks_in_progress = tasks.filter((task) => task.status === 2);
  const tasks_finished = tasks.filter((task) => task.status === 3);

  return (
    <div className="p-3">
      <div class=""></div>
      <div
        class="accordion accordion-flush border mb-4"
        id="accordionFlushExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
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
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div class="form-check form-switch d-flex">
                <p>All</p>
                <div className="ps-5">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    checked={todayFilter}
                    onChange={() => setTodayFilter(!todayFilter)}
                  />
                </div>
                <p>Today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        <div className="w-100 tw-max-w-96 px-2">
          <p>Tasks</p>
          {tasks_unfinished.map((task) => (
            <TaskItem
              id={task.id}
              created_at={task.created_at}
              due_date={task.due_date}
              user_id={task.user_id}
              title={task.title}
              description={task.description}
              status={task.status}
            />
          ))}
        </div>
        <div className="w-100 tw-max-w-96 px-2">
          <p>In Progress</p>
          {tasks_in_progress.map((task) => (
            <TaskItem
              id={task.id}
              created_at={task.created_at}
              due_date={task.due_date}
              user_id={task.user_id}
              title={task.title}
              description={task.description}
              status={task.status}
            />
          ))}
        </div>
        <div className="w-100 tw-max-w-96 px-2">
          <p>Done</p>
          {tasks_finished.map((task) => (
            <TaskItem
              id={task.id}
              created_at={task.created_at}
              due_date={task.due_date}
              user_id={task.user_id}
              title={task.title}
              description={task.description}
              status={task.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContents;
