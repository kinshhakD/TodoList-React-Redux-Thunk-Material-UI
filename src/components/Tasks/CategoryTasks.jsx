import React, { useContext } from 'react';

import { TasksContext } from '../../Context';
import { Task } from './Task';

function CategoryTasks() {
  const {
    removeTask,
    completedTask,
    filterTasks,
    tasks,
    paginationAllTasks,
    completedTasksSel,
    paginationCompletedTasks,
    notCompletedTasksSel,
    paginationNotCompletedTasks,
  } = useContext(TasksContext);
  return (
    <>
      {
          filterTasks === 'allTasks'
          && tasks.length > 0
          && paginationAllTasks.map((task) => (
            <Task
              text={task.text}
              key={task.id}
              onRemove={() => removeTask(task)}
              onComplete={() => completedTask(task)}
              completed={task.completed}
              id={task.id}
            />
          ))
          }
      {
          filterTasks === 'completed'
          && completedTasksSel.length > 0
          && paginationCompletedTasks.map((task) => (
            <Task
              text={task.text}
              key={task.id}
              onRemove={() => removeTask(task)}
              onComplete={() => completedTask(task)}
              completed={task.completed}
              id={task.id}
            />
          ))
          }
      {
          filterTasks === 'notCompleted'
          && notCompletedTasksSel.length > 0
          && paginationNotCompletedTasks.map((task) => (
            <Task
              text={task.text}
              key={task.id}
              onRemove={() => removeTask(task)}
              onComplete={() => completedTask(task)}
              completed={task.completed}
              id={task.id}
            />
          ))
          }
    </>
  );
}

export default CategoryTasks;
