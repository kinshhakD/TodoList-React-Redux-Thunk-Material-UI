import { Box, Button } from '@material-ui/core';
import React from 'react';
import ButtonTask from './ButtonTask';

const LinkTasks = ({ tasksAll, tasksCompleted, tasksNotCompleted }) => (
  <Box mb={20} display="flex" justifyContent="space-evenly">
    <ButtonTask text="All" onClick={tasksAll} />
    <ButtonTask text="Completed" color="primary" onClick={tasksCompleted} />
    <ButtonTask text="Not completed" color="secondary" onClick={tasksNotCompleted} />
  </Box>
);

export default LinkTasks;
