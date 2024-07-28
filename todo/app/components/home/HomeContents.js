'use client';

import React from 'react';
import TaskItem from './TaskItem';

const HomeContents = ( {task_data} ) => {


    const tasks_unfinished = task_data.data.filter(task => task.status === 1);
    const tasks_in_progress = task_data.data.filter(task => task.status === 2);
    const tasks_finished = task_data.data.filter(task => task.status === 3);

    return (
        <div className='p-3 d-flex flex-wrap'>
            <div className='w-100 tw-max-w-96 px-2'>
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
            <div className='w-100 tw-max-w-96 px-2'>
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
            <div className='w-100 tw-max-w-96 px-2'>
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
    );
};

export default HomeContents;