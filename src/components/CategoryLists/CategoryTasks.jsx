import { Box } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import ButtonTask from './CategoryBtn';

const CategoryTasks = ({ tasksAll, tasksCompleted, tasksNotCompleted }) => (
  <Box mb={20} display="flex" justifyContent="space-evenly">
    <ButtonTask text="All" onClick={tasksAll} />
    <ButtonTask text="Completed" color="primary" onClick={tasksCompleted} />
    <ButtonTask text="Not completed" color="secondary" onClick={tasksNotCompleted} />
  </Box>
);

CategoryTasks.defaultProps = {
  tasksAll: true,
  tasksCompleted: false,
  tasksNotCompleted: false,
};

CategoryTasks.propTypes = {
  tasksAll: PropTypes.bool,
  tasksCompleted: PropTypes.bool,
  tasksNotCompleted: PropTypes.bool,

};

export default CategoryTasks;
