import { Box, List, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { MiddlewareActions } from '../../redux/Actions/Actions';
import Task from './Task';
import { TasksContext } from '../../Context';
import CategoryPage from '../Pagination/CategoryPage';

const useStyles = makeStyles({
  list: {
    minHeight: '300px',
  },
});

const Tasks = ({ filterTasks }) => {
  const styles = useStyles();

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

  const paginationAllTasks = paginationList(tasks);

  const paginationCompletedTasks = paginationList(completedList);

  const paginationNotCompletedTasks = paginationList(notCompletedList);

  const removeTask = (task) => {
    dispatch(MiddlewareActions.removeTask(task));
  };

  const completedTask = (task) => dispatch(MiddlewareActions.completedTask(task));

  useEffect(() => {
    setPagination({ ...pagination, currentPage: 1 });
  }, [filterTasks]);
  return (
    <TasksContext.Provider value={{
      tasks,
      completedList,
      notCompletedList,
      filterTasks,
      pagination,
      setPagination,
    }}
    >
      <Box>
        <List className={styles.list}>
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
        <CategoryPage />
      </Box>
    </TasksContext.Provider>
  );
};
Tasks.propTypes = {
  filterTasks: PropTypes.string,
};

export default Tasks;
