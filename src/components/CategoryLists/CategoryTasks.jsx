import { Box, Button } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const CategoryTasks = ({
  filterTasks, onFilterAll, onFilterCompleted, onFilterNotCompleted,
}) => (

  <Box mb={20} display="flex" justifyContent="space-evenly">
    {
      filterTasks === 'allTasks' ? <Button disabled color="default" variant="contained">All</Button>
        : <Button onClick={onFilterAll} color="default" variant="contained">All</Button>
    }
    {
      filterTasks === 'completed' ? <Button disabled color="primary" variant="contained">Show Completed</Button>
        : <Button onClick={onFilterCompleted} color="primary" variant="contained">Show Completed</Button>
    }
    {
      filterTasks === 'notCompleted' ? <Button disabled color="secondary" variant="contained">Show not Completed</Button>
        : <Button onClick={onFilterNotCompleted} color="secondary" variant="contained">Show not Completed</Button>
    }
  </Box>
);

CategoryTasks.propTypes = {
  filterTasks: PropTypes.string,
  onFilterAll: PropTypes.func,
  onFilterCompleted: PropTypes.func,
  onFilterNotCompleted: PropTypes.func,

};

export default CategoryTasks;
