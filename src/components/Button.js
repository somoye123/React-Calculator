import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ buttonName, color, wide, clickHandler }) {
  const handleClick = buttonName => clickHandler(buttonName);

  return (
    <button
      type="button"
      className={`${color ? 'gray' : 'orange'} button text-center text-black ${wide && 'button1'}`}
      onClick={() => handleClick(buttonName)}
    >
      {buttonName}
    </button>
  );
}

Button.defaultProps = {
  color: false,
  wide: false,
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.bool,
  wide: PropTypes.bool,
};
