import React, { useContext } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { TasksContext } from '../../Context';
import TasksPerPage from './TasksPerPage';

const useStyles = makeStyles({
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
  },
});

function CategoryPage() {
  const {
    filterTasks, tasks, completedList, notCompletedList, pagination, setPagination,
  } = useContext(TasksContext);

  const styles = useStyles();

  const { currentPage, tasksPerPage } = pagination;

  const changePage = (event, newPage) => setPagination({ ...pagination, currentPage: newPage });

  const changeTasksPerPage = ({ target }) => setPagination({ ...pagination, currentPage: 1, tasksPerPage: target.value });

  return (
    <>
      {
          filterTasks === 'allTasks' && tasks.length > tasksPerPage ? (
            <Box display="flex" justifyContent="center">
              <Pagination
                className={styles.pagination}
                defaultValue={1}
                page={currentPage}
                onChange={changePage}
                count={Math.ceil(tasks.length / tasksPerPage)}
              />
              <TasksPerPage
                onChangeTasksPerPage={changeTasksPerPage}
              />
            </Box>
          )
            : filterTasks === 'completed' && completedList.length > tasksPerPage ? (
              <Box display="flex" justifyContent="center">
                <Pagination
                  className={styles.pagination}
                  defaultValue={1}
                  page={currentPage}
                  onChange={changePage}
                  count={Math.ceil(completedList.length / tasksPerPage)}
                />
                <TasksPerPage
                  onChangeTasksPerPage={changeTasksPerPage}
                />
              </Box>
            ) : filterTasks === 'notCompleted' && notCompletedList.length > tasksPerPage ? (
              <Box display="flex" justifyContent="center">
                <Pagination
                  className={styles.pagination}
                  defaultValue={1}
                  page={currentPage}
                  onChange={changePage}
                  count={Math.ceil(notCompletedList.length / tasksPerPage)}
                />
                <TasksPerPage
                  onChangeTasksPerPage={changeTasksPerPage}
                  tasksPerPage={tasksPerPage}
                />
              </Box>
            ) : null
        }
    </>
  );
}

export default CategoryPage;
