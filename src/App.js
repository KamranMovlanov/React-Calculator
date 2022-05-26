import './App.css';
import style from "./components/ButtonBox.module.css"
import CalcScreen from './components/CalcScreen';
import { useState } from 'react';

function App() {
  
  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("")

  const ops = ['/', '*', '+', '-', '.']
  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, "."],
  ];

  const clean = () => {
    setCalc('')
    setResult('')
  }

  const cal = (fn) => {
    return new Function('return ' + fn)();
  }


  const updateCalc = (value) => {
    
      if (
          (ops.includes(value) && calc === '') || 
          (ops.includes(value) && ops.includes(calc.slice(-1))) 
      ) { return } 
      
      setCalc(calc + value) 

      if (!ops.includes(value) && value === '=') { 
        
          setResult(cal(calc + value)) 
      }

  }

  const calculate = (e) => {
        setResult(cal(calc))
  }
  
  return (
    <div className="App">
        <div className="container">

            <CalcScreen result={result} calc={calc}/>

            <div className={style.wrapper}>
            
            <div className={style.buttons}>
            {
            btnValues.flat().map((btn, i) => {
            return (
              <button className={style.button}
                type="button" key={i} onClick={btn === "C" ? clean : () => updateCalc(btn)}>{btn}</button>)})}
            <button type="button" className={style.buttonEqual} onClick={calculate}>=</button>
            </div>
        </div >
        </div>  
    </div>
  );
}

export default App;