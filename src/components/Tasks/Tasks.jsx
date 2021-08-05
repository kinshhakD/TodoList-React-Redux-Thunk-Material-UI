import { Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { MiddlewareActions } from '../../redux/Actions/Actions';
import Task from './Task';

const Tasks = ({
  tasksAll, tasksCompleted, tasksNotCompleted,
}) => {
  const tasks = useSelector((store) => store.tasks.tasks);

  const completedList = useSelector((store) => store.tasks.completedTasks);

  const notCompletedList = useSelector((store) => store.tasks.notCompletedTasks);

  const dispatch = useDispatch();

  const removeTask = (task) => {
    dispatch(MiddlewareActions.removeTask(task));
  };

  const completedTask = (task) => dispatch(MiddlewareActions.completedTask(task));

  return (
    <Box>
      {
        tasksAll
        && tasks.length > 0
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
        tasksCompleted
         && completedList.length > 0
         && completedList.map((task) => (
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
        tasksNotCompleted
        && notCompletedList.length > 0
         && notCompletedList.map((task) => (
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
Tasks.propTypes = {
  tasksAll: PropTypes.bool,
  tasksCompleted: PropTypes.bool,
  tasksNotCompleted: PropTypes.bool,

};

export default Tasks;
