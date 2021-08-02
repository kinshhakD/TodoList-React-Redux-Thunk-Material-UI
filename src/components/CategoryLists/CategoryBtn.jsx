import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const CategoryBtn = ({ text, onClick, color }) => (
  <Button variant="contained" onClick={onClick} color={color}>{text}</Button>
);

CategoryBtn.defaultProps = {
  text: '',
  onClick: () => {},
  color: 'white',
};

CategoryBtn.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
};

export default CategoryBtn;
