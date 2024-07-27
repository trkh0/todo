import React from 'react';
import TaskItem from './TaskItem';

const HomeContents = ( {task_data} ) => {
    return (
        <div>
            {task_data.data.map((task) => (
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
    );
};

export default HomeContents;