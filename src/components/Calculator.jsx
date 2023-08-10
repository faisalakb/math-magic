import React, { useState } from 'react';
import Operator from './Operator';
import calculation from '../logic/calculate';

const Calculator = () => {
  const [objData, setObj] = useState({
    total: '',
    next: '',
    operation: '',
  });

  const setValue = (btnName) => {
    const setdata = calculation(objData, btnName);
    setObj(setdata);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setObj({ ...objData, next: inputValue });
  };

  const DisplayInp = () => (
    <>
      <input
        id="inpID"
        type="text"
        value={`${objData.total || ''}${objData.operation || ''}${objData.next || ''}`}
        onChange={handleInputChange}
        className="inp"
      />
    </>
  );

  return (

    <div className="calculator">
      <DisplayInp />
      <Operator className="operationContainer" handleClick={setValue} />
      <div className="numbers">
        <button type="button" onClick={() => setValue('7')}>7</button>
        <button type="button" onClick={() => setValue('8')}>8</button>
        <button type="button" onClick={() => setValue('9')}>9</button>
        <button type="button" onClick={() => setValue('4')}>4</button>
        <button type="button" onClick={() => setValue('5')}>5</button>
        <button type="button" onClick={() => setValue('6')}>6</button>
        <button type="button" onClick={() => setValue('1')}>1</button>
        <button type="button" onClick={() => setValue('2')}>2</button>
        <button type="button" onClick={() => setValue('3')}>3</button>
      </div>
      <div className="zeroDiv">
        <button type="button" onClick={() => setValue('0')} className="zero">0</button>
        <button type="button" onClick={() => setValue('.')}>.</button>
      </div>
    </div>
  );
};

export default Calculator;
