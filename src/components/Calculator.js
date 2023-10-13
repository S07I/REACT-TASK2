import React, { useState } from 'react';
import { create, all } from 'math.js'; // Import mathjs
// import './Calculator.css';

const math = create(all);

function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const clearInput = () => {
    setExpression('');
    setResult('');
  };

  const evaluateExpression = () => {
    try {
      setResult(math.evaluate(expression).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={expression + (result !== '' ? '=' + result : '')} readOnly />
      </div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleInput('7')}>7</button>
          <button onClick={() => handleInput('4')}>4</button>
          <button onClick={() => handleInput('1')}>1</button>
          <button onClick={() => handleInput('0')}>0</button>
          <button onClick={() => handleInput()}>   </button>

        </div>
        <div className="row">
          <button onClick={() => handleInput('8')}>8</button>
          <button onClick={() => handleInput('5')}>5</button>
          <button onClick={() => handleInput('2')}>2</button>
          <button onClick={() => handleInput('.')}>.</button>
          <button onClick={() => handleInput()}></button>

        </div>
        <div className="row">
          <button onClick={() => handleInput('9')}>9</button>
          <button onClick={() => handleInput('6')}>6</button>
          <button onClick={() => handleInput('3')}>3</button>
          <button onClick={evaluateExpression}>=</button>
          <button onClick={() => handleInput()}>  </button>

        </div>
        <div className="row">
        <button className="clear" onClick={clearInput}>✕</button>
          <button onClick={() => handleInput('/')}>÷</button>
          <button onClick={() => handleInput('*')}>x</button>
          <button onClick={() => handleInput('-')}>-</button>
          <button onClick={() => handleInput('+')}>+</button>
        </div>
      
      </div>
    </div>
  );
}

export default Calculator;

