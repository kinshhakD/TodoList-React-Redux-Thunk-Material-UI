import React, { useState } from 'react';
import { Box, TextField, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import { useDispatch } from 'react-redux';
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
          editTask ? <TextField value={inputEditTask} onChange={handleChange} fullWidth className="input__edit" /> : (
            <Typography variant="h5" className={completed ? 'completed' : null}>
              { text }
            </Typography>
          )
        }

      <Box display="flex">
        <DoneIcon cursor="pointer" className="icon__task" onClick={editTask ? () => postEditTask({ id, newText: inputEditTask }) : onComplete} />
        <EditIcon cursor="pointer" className="icon__task" onClick={onEditTask} />
        <DeleteIcon cursor="pointer" onClick={onRemove} />
      </Box>
    </Box>

  );
};
export default Task;
