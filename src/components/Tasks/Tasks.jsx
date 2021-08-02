import { Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MiddlewareActions } from '../../redux/Actions/Actions';
import Task from './Task';

const Tasks = ({
  tasksAll, tasksCompleted, tasksNotCompleted,
}) => {
  const tasks = useSelector((store) => store.tasks.tasks);

  const listCompletedTasks = tasks.filter((task) => task.completed);

  const listNotCompletedTasks = tasks.filter((task) => !task.completed);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MiddlewareActions.fetchTasks());
  }, []);

  const removeTask = (task) => {
    dispatch(MiddlewareActions.removeTask(task));
  };

  const completedTask = (task) => dispatch(MiddlewareActions.completedTask(task));

  return (
    <Box>
      {
        tasksAll
          && tasks.map((task) => (
            <Task
              text={task.text}
              key={task.text}
              onRemove={() => removeTask(task)}
              onComplete={() => completedTask(task)}
              completed={task.completed}
              id={task.id}
            />
          ))
      }
      {
        tasksCompleted && listCompletedTasks.map((task) => (
          <Task
            text={task.text}
            key={task.text}
            onRemove={() => removeTask(task)}
            onComplete={() => completedTask(task)}
            completed={task.completed}
            id={task.id}
          />
        ))
      }
      {
        tasksNotCompleted && listNotCompletedTasks.map((task) => (
          <Task
            text={task.text}
            key={task.text}
            onRemove={() => removeTask(task)}
            onComplete={() => completedTask(task)}
            completed={task.completed}
            id={task.id}
          />
        ))
      }
    </Box>
  );
};

export default Tasks;
