import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ buttonName,color,wide }) {
  return (
    <button type="button">
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.bool,
  wide: PropTypes.bool,
};
