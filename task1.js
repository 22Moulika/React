import React, { useState } from 'react';

function Task1() {
  const [counter, setCounter] = useState(0);
  const [circleColor, setCircleColor] = useState('yellow');

  const increaseCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
    setCircleColor(getRandomColor());
  };

  const getRandomColor = () => {
    const colors = ['red', 'blue', 'green', 'orange', 'purple'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div>
      <div
        style={{
          width: '10%',
          height: '10%',
          borderRadius: '50%',
          backgroundColor: circleColor,
          margin: 'auto',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>{counter}</h2>
        <p style={{ textAlign: 'center' }}>Current Color: {circleColor}</p>
      </div>
      <button onClick={increaseCounter}>Increase Counter</button>
      {/* Implement Button 
