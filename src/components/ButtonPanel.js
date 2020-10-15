import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonPanel({ clickHandler }) {
  const Group1 = ['AC', '+/-', '%', '÷'];
  const Group2 = ['7', '8', '9', 'x'];
  const Group3 = ['4', '5', '6', '-'];
  const Group4 = ['1', '2', '3', '+'];
  const Group5 = ['0', '.', '='];

  const orangeButton = ['÷', 'x', '-', '+', '='];

  const Groups = [Group1, Group2, Group3, Group4, Group5];

  const handleClick = buttonName => clickHandler(buttonName);

  return (
    <div>
      {Groups.map(group => (
        <div className="group d-flex" key={group}>
          {group.map(char => (
            <Button
              key={char}
              buttonName={`${char}`}
              color={!orangeButton.includes(char)}
              wide={char === '0'}
              clickHandler={handleClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

ButtonPanel.defaultProps = {
  clickHandler: null,
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};
