
import React, { useState } from "react"
import "./Form.css";

function Form() {

  const [inputValues, setInputValues] = useState("");
  const [selectedOperation, setSelectedOperation] = useState("");
  const [calculationResult, setCalculationResult] = useState("");

  function handleInputChange(event) {
    setInputValues(event.target.value);
  }

  function handleSelectChange(event) {
    setSelectedOperation(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    let numbers = inputValues.split(",").map(num => Number(num));

    if (inputValues === "" || selectedOperation === "") {
      setCalculationResult("Invalid input.");
    } else if (numbers.every(element => typeof element === "number")) {
      if (selectedOperation === "sum") {
        let sum = numbers.reduce((acc, cur) => acc + cur, 0);
        setCalculationResult(sum);
      } else if (selectedOperation === "average") {
        let sum = numbers.reduce((acc, cur) => acc + cur, 0);
        let average = sum / numbers.length;
        setCalculationResult(average);
      } else if (selectedOperation === "mode") {
        function findGCD(a, b) {
          if (b === 0) {
            return a;
          } else {
            return findGCD(b, a % b);
          }
        }
        if (numbers.length === 0) {
        }
        let mode = numbers[0];

        for (let i = 1; i < numbers.length; i++) {
          mode = findGCD(mode, numbers[i]);
        }

        setCalculationResult(mode);
      }
    } else {
      setCalculationResult("Invalid input.");
    }
  }


  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input id="values" name="values" type="text" onChange={handleInputChange} />
        <select id="operation" name="operation" onChange={handleSelectChange}>
          <option value=""></option>
          <option value="sum">Sum</option>
          <option value="average">Average</option>
          <option value="mode">Mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <p>{calculationResult}</p>

    </div>
  );
}

export default Form;
