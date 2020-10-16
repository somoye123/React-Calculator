import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ result, next }) {
  return (
    <div className="result d-flex">{next || (result || 0)}</div>
  );
}
Display.defaultProps = {
  result: '0',
  next: null,
};

Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
};
