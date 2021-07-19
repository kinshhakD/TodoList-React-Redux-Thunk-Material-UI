import React from 'react';
import { Button } from '@material-ui/core';

const ButtonTask = ({ text, onClick, color }) => (
  <Button variant="contained" onClick={onClick} color={color}>{text}</Button>
);

export default ButtonTask;
