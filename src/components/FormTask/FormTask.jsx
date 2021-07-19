import React, { useState } from 'react';
import { Box, FormControl, TextField } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import { MiddlewareActions } from '../../redux/Actions/Actions';

const FormTask = () => {
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

      dispatch(MiddlewareActions.postTask(taskObj));
      setTaskInput('');
    }
  };

  return (
    <Box mb={20}>
      <FormControl fullWidth>
        <TextField id="standard-basic" label="Task" fullWidth fontSize={24} onChange={handleChange} value={taskInput} />
        <Box>
          <CloseIcon cursor="pointer" fontSize="large" onClick={clearInput} />
          <DoneIcon cursor="pointer" fontSize="large" onClick={postTask} />
        </Box>
      </FormControl>
    </Box>
  );
};

export default FormTask;
