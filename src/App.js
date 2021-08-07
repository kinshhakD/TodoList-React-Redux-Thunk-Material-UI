import React, { useEffect, useState } from 'react';
import {
  Container, makeStyles, Typography,
} from '@material-ui/core';
import './App.css';
import { useDispatch } from 'react-redux';
import Tasks from './components/Tasks/Tasks';
import FormTask from './components/FormTask/FormTask';
import CategoryTasks from './components/CategoryLists/CategoryTasks';
import { MiddlewareActions } from './redux/Actions/Actions';

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
    marginBottom: '100px',
    color: 'red',
  },
});

function App() {
  const styles = useStyles();

  const [allTasks, setAllTasks] = useState(true);

  const [completedTasks, setCompletedTasks] = useState(false);

  const [notCompletedTasks, setNotCompletedTasks] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MiddlewareActions.fetchTasks());
  }, [allTasks, completedTasks, notCompletedTasks]);

  const showAllTasks = () => {
    setAllTasks(true);
    setCompletedTasks(false);
    setNotCompletedTasks(false);
  };

  const showCompletedTasks = () => {
    setCompletedTasks(true);
    setAllTasks(false);
    setNotCompletedTasks(false);
  };

  const showNotCompletedTasks = () => {
    setNotCompletedTasks(true);
    setAllTasks(false);
    setCompletedTasks(false);
  };

  return (
    <div className="App">
      <Container>
        <Typography variant="h1" className={styles.title}>
          Todo-App
        </Typography>
        <FormTask />
        <CategoryTasks
          tasksAll={showAllTasks}
          tasksCompleted={showCompletedTasks}
          tasksNotCompleted={showNotCompletedTasks}
        />
        {
         allTasks && <Tasks tasksAll />
        }
        {
          completedTasks && <Tasks tasksCompleted />
        }
        {
          notCompletedTasks && <Tasks tasksNotCompleted />
        }
      </Container>
    </div>
  );
}

export default App;
