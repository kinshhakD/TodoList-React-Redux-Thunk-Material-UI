import React, { useEffect, useState } from 'react';
import {
  Container, makeStyles, Typography,
} from '@material-ui/core';
import './App.css';
import { useDispatch } from 'react-redux';
import { Tasks } from './components/Tasks/Tasks';
import { FormTask } from './components/FormTask/FormTask';
import { CategoryButtons } from './components/Buttons/CategoryButtons';
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
  const dispatch = useDispatch();

  const [filterTasks, setFilterTasks] = useState('allTasks');

  const onFilterAll = () => setFilterTasks('allTasks');

  const onFilterCompleted = () => setFilterTasks('completed');

  const onFilterNotCompleted = () => setFilterTasks('notCompleted');

  useEffect(() => {
    dispatch(MiddlewareActions.fetchTasks());
  }, []);

  return (
    <div className="App">
      <Container>
        <Typography variant="h1" className={styles.title}>
          Todo-App
        </Typography>
        <FormTask />
        <CategoryButtons
          filterTasks={filterTasks}
          onFilterAll={onFilterAll}
          onFilterCompleted={onFilterCompleted}
          onFilterNotCompleted={onFilterNotCompleted}
        />
        <Tasks filterTasks={filterTasks} />
      </Container>
    </div>
  );
}

export default App;
