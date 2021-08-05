import React, { useState } from 'react';
import {
  Box, Button, TextField, Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { MiddlewareActions } from '../../redux/Actions/Actions';

const Task = ({
  text, onRemove, onComplete, completed, id,
}) => {
  const [editTask, setEditTask] = useState(false);

  const [inputEditTask, setInputEditTask] = useState(text);

  const dispatch = useDispatch();

  const handleChange = (e) => setInputEditTask(e.target.value);

  const onEditTask = () => {
    if (editTask) {
      setEditTask(!editTask);
      setInputEditTask(text);
    }
    setEditTask(!editTask);
  };

  const postEditTask = (task) => dispatch(MiddlewareActions.editTask(task));

  return (

    <Box mb={10} fontSize={24} display="flex" justifyContent="space-between">
      {
          editTask
            ? <TextField value={inputEditTask} onChange={handleChange} fullWidth className="input__edit" />
            : (
              <Typography data-testid="title-task" variant="h5" className={completed ? 'completed' : null}>
                {text}
              </Typography>
            )
      }
      <Box display="flex">
        <Button onClick={editTask
          ? () => postEditTask({ id, newText: inputEditTask }) : onComplete}
        >
          <DoneIcon cursor="pointer" className="icon__task" />
        </Button>
        <Button onClick={onEditTask}>
          <EditIcon cursor="pointer" className="icon__task" />
        </Button>
        <Button onClick={onRemove}>
          <DeleteIcon cursor="pointer" />
        </Button>
      </Box>
    </Box>

  );
};

Task.propTypes = {
  text: PropTypes.string,
  onRemove: PropTypes.func,
  onComplete: PropTypes.func,
  completed: PropTypes.bool,
  id: PropTypes.number,

};

export default Task;
