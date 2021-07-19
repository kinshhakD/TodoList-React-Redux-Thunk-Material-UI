import React, { useState } from 'react';
import {
  Container,
} from '@material-ui/core';
import './App.css';
import Tasks from './components/Tasks/Tasks';
import FormTask from './components/FormTask/FormTask';
import ButtonsTasks from './components/ButtonsTasks/ButtonsTasks';

function App() {
  const [allTasks, setAllTasks] = useState(true);

  const [completedTasks, setCompletedTasks] = useState(false);

  const [notCompletedTasks, setNotCompletedTasks] = useState(false);

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
        <FormTask />
        <ButtonsTasks
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
