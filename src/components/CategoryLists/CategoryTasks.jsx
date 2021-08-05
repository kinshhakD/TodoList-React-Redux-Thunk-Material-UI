import { Box, Button } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const CategoryTasks = ({ tasksAll, tasksCompleted, tasksNotCompleted }) => (
  <Box mb={20} display="flex" justifyContent="space-evenly">
    <Button onClick={tasksAll} color="default">All</Button>
    <Button onClick={tasksCompleted} color="primary">Show Completed</Button>
    <Button onClick={tasksNotCompleted} color="secondary">Show not Completed</Button>
  </Box>
);

CategoryTasks.propTypes = {
  tasksAll: PropTypes.func,
  tasksCompleted: PropTypes.func,
  tasksNotCompleted: PropTypes.func,

};

export default CategoryTasks;
