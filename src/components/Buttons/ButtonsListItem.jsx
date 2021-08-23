import { Button, Box } from '@material-ui/core';
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import PropTypes from 'prop-types';

function ButtonsListItem({ postOrEdit, onEditTask, onRemove }) {
  return (
    <Box display="flex">
      <Button onClick={postOrEdit}>
        <DoneIcon />
      </Button>
      <Button onClick={onEditTask}>
        <EditIcon />
      </Button>
      <Button onClick={onRemove}>
        <DeleteIcon />
      </Button>
    </Box>
  );
}

ButtonsListItem.propTypes = {
  postOrEdit: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export { ButtonsListItem };
