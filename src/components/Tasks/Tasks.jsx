import { Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { MiddlewareActions } from '../../redux/Actions/Actions';
import Task from './Task';
import {
  addTask, deleteTask, fetchTasks, isCompletedTask,
} from '../../reduxToolkit/asyncThunk';
import { completedTask } from '../../reduxToolkit/tasksReducer';

const Tasks = ({
  tasksAll, tasksCompleted, tasksNotCompleted,
}) => {
  const tasks = useSelector((store) => store.tasks.tasks);

  const listCompletedTasks = tasks.filter((task) => task.completed);

  const listNotCompletedTasks = tasks.filter((task) => !task.completed);

  // console.log(tasks);

  const dispatch = useDispatch();
  const removeTask = (task) => dispatch(deleteTask(task));

  const finishedTask = (task) => dispatch(isCompletedTask(task));

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <Box>
      {
        tasksAll
        && tasks.length > 0
        && tasks.map((task) => (
          <Task
            text={task.text}
            key={task.id}
            onRemove={() => removeTask(task)}
            onComplete={() => finishedTask(task)}
            completed={task.completed}
            id={task.id}
          />
        ))
      }
      {
        tasksCompleted
        && listCompletedTasks.length > 0
        && listCompletedTasks.map((task) => (
          <Task
            text={task.text}
            key={task.id}
            onRemove={() => removeTask(task)}
            onComplete={() => finishedTask(task)}
            completed={task.completed}
            id={task.id}
          />
        ))
      }
      {
        tasksNotCompleted
        && listNotCompletedTasks.length > 0
        && listNotCompletedTasks.map((task) => (
          <Task
            text={task.text}
            key={task.id}
            onRemove={() => removeTask(task)}
            onComplete={() => finishedTask(task)}
            completed={task.completed}
            id={task.id}
          />
        ))
      }
    </Box>
  );
};
Tasks.propTypes = {
  tasksAll: PropTypes.bool,
  tasksCompleted: PropTypes.bool,
  tasksNotCompleted: PropTypes.bool,

};

export default Tasks;
