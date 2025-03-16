import React, { useState, useEffect } from 'react';

function ColorBlock() {
  const [color, setColor] = useState('red');

  const toggleColor = () => {
    setColor(prevColor => (prevColor === 'red' ? 'blue' : 'red'));
  };

  useEffect(() => {
    console.log(`Поточний колір: ${color}`);
  }, [color]);

  const blockStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: color,
    margin: '20px auto',
    borderRadius: '10px',
    transition: '0.3s'
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={blockStyle}></div>
      <button onClick={toggleColor}>
        Змінити колір
      </button>
    </div>
  );
}

export default ColorBlock;
