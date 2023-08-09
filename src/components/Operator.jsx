import React from 'react';

const Operator = () => (
  <>
    <div className="operation">
      <button type="button">÷</button>
      <button type="button">x</button>
      <button type="button">-</button>
      <button type="button">+</button>
      <button type="button">=</button>
    </div>
    <div className="top">
      <button type="button" className="clear">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
    </div>
  </>
);

export default Operator;
