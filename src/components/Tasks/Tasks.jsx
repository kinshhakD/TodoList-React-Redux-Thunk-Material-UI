import { Box, List, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { MiddlewareActions } from '../../redux/Actions/Actions';
import { TasksContext } from '../../Context';
import { CategoryPage } from '../Pagination/CategoryPage';
import {
  completedTasksSelector, notCompletedTasksSelector,
  tasksSelector, searchValueSelector,
} from '../../Selectors/todosSelectors';
import SearchTasks from './SearchTasks';
import CategoryTasks from './CategoryTasks';

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

  const tasks = useSelector(tasksSelector);

  const completedTasksSel = useSelector(completedTasksSelector);

  const notCompletedTasksSel = useSelector(notCompletedTasksSelector);

  const searchValue = useSelector(searchValueSelector);

  const paginationList = (list = []) => list.slice(firstTaskIndex, lastTaskIndex);

  const paginationAllTasks = paginationList(tasks);

  const paginationCompletedTasks = paginationList(completedTasksSel);

  const paginationNotCompletedTasks = paginationList(notCompletedTasksSel);

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
      completedTasksSel,
      notCompletedTasksSel,
      filterTasks,
      pagination,
      paginationAllTasks,
      paginationCompletedTasks,
      paginationNotCompletedTasks,
      setPagination,
      removeTask,
      completedTask,
    }}
    >
      <Box>
        <List className={styles.list}>
          {
            searchValue.length > 0 ? <SearchTasks /> : <CategoryTasks />
          }
        </List>
        {
        !searchValue && <CategoryPage />
        }
      </Box>
    </TasksContext.Provider>
  );
};

Tasks.propTypes = {
  filterTasks: PropTypes.string.isRequired,
};

export { Tasks };
