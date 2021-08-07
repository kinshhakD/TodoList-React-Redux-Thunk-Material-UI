import { Box, List, ListItem } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Pagination } from '@material-ui/lab';
import { MiddlewareActions } from '../../redux/Actions/Actions';
import Task from './Task';

const Tasks = ({
  tasksAll, tasksCompleted, tasksNotCompleted,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [tasksPerPage] = useState(3);

  const lastTaskIndex = currentPage * tasksPerPage;

  const firstTaskIndex = lastTaskIndex - tasksPerPage;

  const tasks = useSelector((store) => store.tasks.tasks);

  const completedList = useSelector((store) => store.tasks.completedTasks);

  const notCompletedList = useSelector((store) => store.tasks.notCompletedTasks);

  const paginationList = (list = []) => list.slice(firstTaskIndex, lastTaskIndex);

  const changePage = (event, newPage) => setCurrentPage(newPage);

  const paginationAllTasks = paginationList(tasks);

  const paginationCompletedTasks = paginationList(completedList);

  const paginationNotCompletedTasks = paginationList(notCompletedList);

  const dispatch = useDispatch();

  const removeTask = (task) => {
    dispatch(MiddlewareActions.removeTask(task));
  };

  const completedTask = (task) => dispatch(MiddlewareActions.completedTask(task));

  return (
    <Box>
      <List>
        {
        tasksAll
        && tasks.length > 0
           && paginationAllTasks.map((task) => (
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
         && paginationCompletedTasks.map((task) => (
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
         && paginationNotCompletedTasks.map((task) => (
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
      </List>
      <Box display="flex" justifyContent="center">
        {
          tasksAll ? (
            tasks.length > 3 ? (
              <Pagination
                defaultPage={1}
                page={currentPage}
                onChange={changePage}
                count={Math.ceil(tasks.length / tasksPerPage)}
              />
            ) : null
          )
            : tasksCompleted
              ? (completedList.length > 3
                ? (
                  <Pagination
                    defaultPage={1}
                    page={currentPage}
                    onChange={changePage}
                    count={Math.ceil(completedList.length / tasksPerPage)}
                  />
                ) : null)
              : tasksNotCompleted
                ? (notCompletedList.length > 3
                  ? (
                    <Pagination
                      defaultPage={1}
                      page={currentPage}
                      onChange={changePage}
                      count={Math.ceil(notCompletedList.length / tasksPerPage)}
                    />
                  ) : null)
                : null
        }
      </Box>
    </Box>
  );
};
Tasks.propTypes = {
  tasksAll: PropTypes.bool,
  tasksCompleted: PropTypes.bool,
  tasksNotCompleted: PropTypes.bool,

};

export default Tasks;
