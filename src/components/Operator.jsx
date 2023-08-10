import React from 'react';
import PropTypes from 'prop-types';

const Operator = ({ handleClick }) => (
  <>
    <div className="operation">
      <button type="button" onClick={() => handleClick('÷')}>÷</button>
      <button type="button" onClick={() => handleClick('x')}>x</button>
      <button type="button" onClick={() => handleClick('-')}>-</button>
      <button type="button" onClick={() => handleClick('+')}>+</button>
      <button type="button" onClick={() => handleClick('=')}>=</button>
    </div>
    <div className="top">
      <button type="button" onClick={() => handleClick('AC')} className="clear">AC</button>
      <button type="button" onClick={() => handleClick('+/-')}>+/-</button>
      <button type="button" onClick={() => handleClick('%')}>%</button>
    </div>
  </>
);

Operator.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Operator;
