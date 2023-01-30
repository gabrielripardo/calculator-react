import "./styles.css";
import Digit from "../Digit";
import Operator from "../Operator";
import Display from "../Display";
import { useState } from "react";
import { NumberDigit } from "../../models/NumberDigit";

export default function Calculator() {
  const [numLeft, setNumLeft] = useState("");
  const [numRight, setNumRight] = useState("");
  const [digit, setDigit] = useState("");
  const [operator, setOperator] = useState("");

  const numbersDigits: NumberDigit[] = [];
  for (let i = 1; i <= 9; i++) {
    numbersDigits.push({ label: String(i), value: i });
  }

  const setValue = (value: string) => {
    setDigit(digit + value);
    if (operator == "") {
      setNumLeft(numLeft + value);
    } else {
      setNumRight(numRight + value);
    }
  };

  const setOperation = (operator: string) => {
    setOperator(operator);
    setDigit(numLeft + " " + operator + " ");
  };

  const clean = () => {
    setNumLeft("");
    setNumRight("");
    setDigit("");
    setOperator("");
  };

  const calc = () => {
    const num1 = Number(numLeft);
    const num2 = Number(numRight);

    switch (operator) {
      case "/":
        return num1 / num2;
      case "*":
        return num1 * num2;
      case "-":
        return num1 - num2;
      case "+":
        return num1 + num2;
    }
  };

  const showResult = () => {
    setDigit(String(calc()));
  };

  return (
    <div className="container">
      <Display>{digit !== "" ? digit : "0"}</Display>
      <div className="keyboard">
        <div className="top-operators">
          <Operator
            label="Ac"
            value="cc"
            className="cleaner"
            setOperator={clean}
          ></Operator>
          <Operator
            label="<-"
            value="backspace"
            className="cleaner"
            setOperator={setValue}
          ></Operator>
          <Operator
            label="/"
            value="/"
            className="operator"
            setOperator={setOperation}
          ></Operator>
          <Operator
            label="*"
            value="*"
            className="operator"
            setOperator={setOperation}
          ></Operator>
        </div>
        <div className="numerics">
          {numbersDigits.map((digit: NumberDigit) => (
            <Digit
              key={digit.label}
              label={digit.label}
              value={digit.value}
              className="numeric"
              setDigit={setValue}
            ></Digit>
          ))}
          <Digit
            label="0"
            value={0}
            className="numeric"
            setDigit={setValue}
          ></Digit>
          <Digit
            label="."
            value={0}
            className="numeric"
            setDigit={setValue}
          ></Digit>
        </div>
        <div className="side-operators">
          <Operator
            label="-"
            value="-"
            className="operator"
            setOperator={setOperation}
          ></Operator>

          <Operator
            label="+"
            value="+"
            className="operator tall"
            setOperator={setOperation}
          ></Operator>

          <Operator
            label="="
            value="equal"
            className="result tall"
            setOperator={showResult}
          ></Operator>
        </div>
      </div>
    </div>
  );
}
