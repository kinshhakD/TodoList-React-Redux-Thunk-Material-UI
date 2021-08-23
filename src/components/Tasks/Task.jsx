import React, { useState } from 'react';
import {
  TextField,
  Paper,
  ListItem,
  makeStyles,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { MiddlewareActions } from '../../redux/Actions/Actions';
import { ButtonsListItem } from '../Buttons/ButtonsListItem';

const useStyles = makeStyles({
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '40px',
    padding: 0,
  },
});

const Task = ({
  text, onRemove, onComplete, completed, id,
}) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const [editTask, setEditTask] = useState(false);

  const [inputEditTask, setInputEditTask] = useState(text);

  const handleChange = ({ target }) => setInputEditTask(target.value);

  const onEditTask = () => {
    if (editTask) {
      setEditTask(!editTask);
      setInputEditTask(text);
    }
    setEditTask(!editTask);
  };

  const postEditTask = (task) => {
    dispatch(MiddlewareActions.editTask(task));
    setEditTask(false);
  };

  const postOrEdit = editTask ? () => postEditTask({ id, newText: inputEditTask }) : onComplete;

  return (
    <ListItem className={styles.listItem}>
      {
        editTask
          ? <TextField value={inputEditTask} onChange={handleChange} fullWidth className="input__edit" />
          : (
            <Paper className={completed ? 'completed' : undefined}>
              {text}
            </Paper>
          )
      }
      <ButtonsListItem
        postOrEdit={postOrEdit}
        onEditTask={onEditTask}
        onRemove={onRemove}
      />
    </ListItem>
  );
};

Task.propTypes = {
  text: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export { Task };
