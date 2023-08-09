import React from 'react';
import Operator from './Operator';

const Calculator = () => (

  <div className="calculator">
    <input type="text" dir="rtl" className="inp" />
    <Operator className="operationContainer" />
    <div className="numbers">
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
    </div>
    <div className="zeroDiv">
      <button type="button" className="zero">0</button>
      <button type="button">.</button>
    </div>
  </div>

);

export default Calculator;
