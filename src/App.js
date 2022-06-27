import React, { useState } from 'react';
import Input from './components/Input/index.js';
import './App.css';

function App() {

  const [heigth, setHeigth] = useState(0);
  const [weigth, setWeigth] = useState(0);

  function calculateBmi() {
    let bmi = parseFloat(weigth) / (parseFloat(heigth / 100) * parseFloat(heigth / 100));
    
    if(weigth > 0 && heigth > 0) {
      if(bmi < 18.5) {
        return <span>Your BMI is {bmi.toFixed(2)} ! You're underweigth !</span>
      }
      else if(bmi >= 18.5 && bmi <= 24.9) {
        return <span>Your BMI is {bmi.toFixed(2)} ! You have a normal weigth !</span>
      }
      else if(bmi >= 25 && bmi <= 29.9) {
        return <span>Your BMI is {bmi.toFixed(2)} ! You're overweigth !</span>
      }
      else if(bmi >= 30 && bmi <= 34.9) {
        return <span>Your BMI is {bmi.toFixed(2)} ! You have obesity level 1 !</span>
      }
      else if(bmi >= 35 && bmi <= 39.9) {
        return <span>Your BMI is {bmi.toFixed(2)} ! You have obesity level 2 !</span>
      }
      else {
        return <span>Your BMI is {bmi.toFixed(2)} ! You have obesity level 3 or morbid!</span>
      }
    }
    return;
  }

  return (
    <>
      <main>
        <div className='container'>
          <h2>BMI Calculator</h2>

          <div className='input-field'>
            <label htmlFor='.heigth'>Heigth(m): </label>
            <Input className='input heigth'
                   min='0'
                   max='300'
                   value={heigth}
                   onChange={(element) => setHeigth(element.target.value)} />
            <span>{parseFloat(heigth / 100)} m</span>
          </div>

          <div className='input-field'>
            <label htmlFor='.weigth'>Weigth(kg): </label>
            <Input className='input weigth'
                   min='0'
                   max='500'
                   value={weigth}
                   onChange={(element) => setWeigth(element.target.value)} />
            <span>{weigth} kg</span>
          </div>

          <div className='output'>
            {calculateBmi()}
          </div>
        </div>
    </main>
    </>
  );
}

export default App;
