import React, { useContext } from 'react';

import { useSelector } from 'react-redux';
import { TasksContext } from '../../Context';
import { searchTasksSelector } from '../../Selectors/todosSelectors';
import { Task } from './Task';

function SearchTasks() {
  const searchTasks = useSelector(searchTasksSelector);

  const { removeTask, completedTask } = useContext(TasksContext);

  return (
    <>
      {
            searchTasks.length > 0 && searchTasks.map((task) => (
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

export default SearchTasks;
