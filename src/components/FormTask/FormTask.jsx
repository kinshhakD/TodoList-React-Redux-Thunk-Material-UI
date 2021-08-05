import React, { useState } from 'react';
import {
  Box, Button, createStyles, FormControl, makeStyles, TextField, withStyles,
} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import { MiddlewareActions } from '../../redux/Actions/Actions';
// import { newTask } from '../../reduxToolkit/tasksReducer';
import { addTask } from '../../reduxToolkit/asyncThunk';

const useStyles = makeStyles(() => createStyles({
  form: {
    flexDirection: 'row',
  },
}));

const FormTask = () => {
  const classes = useStyles();
  const [taskInput, setTaskInput] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTaskInput(e.target.value);
  };

  const clearInput = () => setTaskInput('');

  const postTask = () => {
    if (taskInput) {
      const taskObj = {
        text: taskInput,
        completed: false,
      };

      dispatch(addTask(taskObj));
      setTaskInput('');
    }
  };

  return (
    <Box mb={20}>
      <FormControl fullWidth className={classes.form}>
        <TextField data-testid="input-new" id="standard-basic" label="Task" fullWidth fontSize={24} onChange={handleChange} value={taskInput} role="textbox" />
        <Box display="flex">
          <Button onClick={clearInput}>
            <CloseIcon fontSize="large" />
          </Button>
          <Button onClick={postTask}>
            <DoneIcon cursor="pointer" fontSize="large" />
          </Button>

        </Box>
      </FormControl>
    </Box>
  );
};

export default FormTask;
