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
    filterTasks, tasks, completedTasksSel, notCompletedTasksSel, pagination, setPagination,
  } = useContext(TasksContext);

  const styles = useStyles();

  const { currentPage, tasksPerPage } = pagination;

  const changePage = (event, newPage) => setPagination({
    ...pagination,
    currentPage: newPage,
  });

  const changeTasksPerPage = ({ target }) => setPagination({
    currentPage: 1,
    tasksPerPage: +target.value,
  });

  return (
    <>
      {
        filterTasks === 'allTasks'
        && (
          <Box display="flex" justifyContent="center">
            {
              tasks.length > tasksPerPage && (
                <Pagination
                  className={styles.pagination}
                  defaultValue={1}
                  page={currentPage}
                  onChange={changePage}
                  count={Math.ceil(tasks.length / tasksPerPage)}
                />
              )
            }
            <TasksPerPage
              tasksPerPage={tasksPerPage}
              onChangeTasksPerPage={changeTasksPerPage}
              allLength={tasks.length}
            />
          </Box>
        )
      }
      {
        filterTasks === 'completed' && (
          <Box display="flex" justifyContent="center">
            {
              completedTasksSel.length > tasksPerPage && (
                <Pagination
                  className={styles.pagination}
                  defaultValue={1}
                  page={currentPage}
                  onChange={changePage}
                  count={Math.ceil(completedTasksSel.length / tasksPerPage)}
                />
              )
           }
              {/* если нет пагинации то и нет компонента TasksPerPage */}
            <TasksPerPage
              tasksPerPage={tasksPerPage}
              onChangeTasksPerPage={changeTasksPerPage}
              allLength={completedTasksSel.length}
            />
          </Box>
        )
      }
      {
        filterTasks === 'notCompleted' && (
          <Box display="flex" justifyContent="center">
            {
              notCompletedTasksSel.length > tasksPerPage && (
                <Pagination
                  className={styles.pagination}
                  defaultValue={1}
                  page={currentPage}
                  onChange={changePage}
                  count={Math.ceil(notCompletedTasksSel.length / tasksPerPage)}
                />
              )
            }
            <TasksPerPage
              onChangeTasksPerPage={changeTasksPerPage}
              tasksPerPage={tasksPerPage}
              allLength={notCompletedTasksSel.length}
            />
          </Box>
        )
      }
    </>
  );
}

export { CategoryPage };
