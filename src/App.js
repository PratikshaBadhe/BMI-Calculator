
// App.js
import './App.css';
import React, { useState } from 'react';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calcBmi = (event) => {
    event.preventDefault();
    if (weight === '' || height === '') {
      alert('Please enter a valid weight and height');
    } else {
      const bmi = (weight /(height)).toFixed(1);
      setBmi(bmi);
      setMessage(bmi < 25 ? 'You are underweight' : (bmi < 30 ? 'You are a healthy weight' : 'You are overweight'));
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} type="number" />
          </div>
          <div>
            <label>Height (cm)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} type="number" />
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" type="button" onClick={() => window.location.reload()}>Reload</button>
          </div>
        </form>
        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;