import React, { useState } from 'react';
import {
  Box, Button, createStyles, FormControl, makeStyles, TextField,
} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import {
  MiddlewareActions,
  taskActions,
} from '../../redux/Actions/Actions';

const useStyles = makeStyles(() => createStyles({
  form: {
    flexDirection: 'row',
  },
}));

const FormTask = () => {
  const classes = useStyles();

  const [taskInput, setTaskInput] = useState('');

  const [searchTask, setSearchTask] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target }) => setTaskInput(target.value);

  const handleSearch = ({ target }) => {
    dispatch(taskActions.setSearch(target.value));
    setSearchTask(target.value);
  };

  const clearInput = () => setTaskInput('');

  const postTask = () => {
    if (taskInput) {
      const taskObj = {
        text: taskInput,
        completed: false,
      };
      dispatch(MiddlewareActions.postTask(taskObj));
      setTaskInput('');
    }
  };

  return (
    <Box mb={20} display="flex" alignItems="center" justifyContent="space-between">
      <FormControl className={classes.form}>
        <TextField data-testid="input-new" id="standard-basic" label="New task" fullWidth fontSize={24} onChange={handleChange} value={taskInput} role="textbox" />
        <Box display="flex">
          <Button onClick={clearInput}>
            <CloseIcon fontSize="large" />
          </Button>
          <Button onClick={postTask}>
            <DoneIcon cursor="pointer" fontSize="large" />
          </Button>
        </Box>
      </FormControl>
      <Box display="flex" alignItems="center">
        <TextField onChange={handleSearch} value={searchTask} label="Search tasks" />
      </Box>
    </Box>
  );
};

export { FormTask };
