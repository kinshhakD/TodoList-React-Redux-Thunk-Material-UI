import { MenuItem, Select } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

function TasksPerPage({ onChangeTasksPerPage, tasksPerPage, allLength }) {
  return (
    <Select
      value={tasksPerPage}
      onChange={onChangeTasksPerPage}
    >
      <MenuItem value="1">1</MenuItem>
      <MenuItem value="2">2</MenuItem>
      <MenuItem value="3">3</MenuItem>
      <MenuItem value="4">4</MenuItem>
      <MenuItem value="5">5</MenuItem>
      <MenuItem value={allLength}>Show all</MenuItem>
    </Select>
  );
}

TasksPerPage.propTypes = {
  onChangeTasksPerPage: PropTypes.func.isRequired,
  tasksPerPage: PropTypes.number.isRequired,
  allLength: PropTypes.number.isRequired,
};

export default TasksPerPage;
