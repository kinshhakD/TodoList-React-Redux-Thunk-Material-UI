import { Box, List } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Pagination } from '@material-ui/lab';
import { MiddlewareActions } from '../../redux/Actions/Actions';
import Task from './Task';

const Tasks = ({
  filterTasks,
}) => {
  const dispatch = useDispatch();

  const [pagination, setPagination] = useState({
    currentPage: 1,
    tasksPerPage: 3,
  });

  const { currentPage, tasksPerPage } = pagination;

  const lastTaskIndex = currentPage * tasksPerPage;

  const firstTaskIndex = lastTaskIndex - tasksPerPage;

  const tasks = useSelector((store) => store.tasks.tasks);

  const completedList = useSelector((store) => store.tasks.completedTasks);

  const notCompletedList = useSelector((store) => store.tasks.notCompletedTasks);

  const paginationList = (list = []) => list.slice(firstTaskIndex, lastTaskIndex);

  const changePage = (event, newPage) => setPagination({ ...pagination, currentPage: newPage });

  const paginationAllTasks = paginationList(tasks);

  const paginationCompletedTasks = paginationList(completedList);

  const paginationNotCompletedTasks = paginationList(notCompletedList);

  const removeTask = (task) => {
    dispatch(MiddlewareActions.removeTask(task));
  };

  useEffect(() => {
    setPagination({ ...pagination, currentPage: 1 });
  }, [filterTasks]);

  const completedTask = (task) => dispatch(MiddlewareActions.completedTask(task));

  return (
    <Box>
      <List>
        {
        filterTasks === 'allTasks'
        && tasks.length > 0
          ? paginationAllTasks.map((task) => (
            <Task
              text={task.text}
              key={task.text}
              onRemove={() => removeTask(task)}
              onComplete={() => completedTask(task)}
              completed={task.completed}
              id={task.id}
            />
          ))
          : filterTasks === 'completed'
          && completedList.length > 0
            ? paginationCompletedTasks.map((task) => (
              <Task
                text={task.text}
                key={task.text}
                onRemove={() => removeTask(task)}
                onComplete={() => completedTask(task)}
                completed={task.completed}
                id={task.id}
              />
            ))
            : filterTasks === 'notCompleted'
            && notCompletedList.length > 0
              ? paginationNotCompletedTasks.map((task) => (
                <Task
                  text={task.text}
                  key={task.text}
                  onRemove={() => removeTask(task)}
                  onComplete={() => completedTask(task)}
                  completed={task.completed}
                  id={task.id}
                />
              )) : null
      }
      </List>
      <Box display="flex" justifyContent="center">

        {
          filterTasks === 'allTasks' && tasks.length > 3 ? (
            <Pagination
              defaultPage={1}
              page={currentPage}
              onChange={changePage}
              count={Math.ceil(tasks.length / tasksPerPage)}
            />
          )
            : filterTasks === 'completed' && completedList.length > 3 ? (
              <Pagination
                defaultPage={1}
                page={currentPage}
                onChange={changePage}
                count={Math.ceil(completedList.length / tasksPerPage)}
              />
            ) : filterTasks === 'notCompleted' && notCompletedList.length > 3 ? (
              <Pagination
                defaultPage={1}
                page={currentPage}
                onChange={changePage}
                count={Math.ceil(notCompletedList.length / tasksPerPage)}
              />
            ) : null
        }
      </Box>
    </Box>
  );
};
Tasks.propTypes = {
  filterTasks: PropTypes.string,
};

export default Tasks;
