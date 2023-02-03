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
  const [expression, setExpression] = useState("");

  const numbersDigits: NumberDigit[] = [];
  for (let i = 1; i <= 9; i++) {
    numbersDigits.push({ label: String(i), value: i });
  }

  const setValue = (value: string) => {
    if (digit.length < 16) {
      if (operator == "") {
        setNumLeft(numLeft + value);
        setDigit(numLeft + value);
      } else {
        setNumRight(numRight + value);
        setDigit(numRight + value);
      }
    }
  };

  const handleOperation = (operator: string) => {
    setOperator(operator);
    setExpression(numLeft + " " + operator);
    setDigit(numLeft);
  };

  const handleComma = () => {
    if (operator == "") {
      setNumLeft(numLeft + ",");
      setDigit(numLeft + ",");
    } else {
      setNumRight(numRight + ",");
      setDigit(numRight + ",");
    }
  };

  const cleanCalc = () => {
    setNumLeft("");
    setNumRight("");
    setOperator("");
  };

  const clean = () => {
    cleanCalc();
    setExpression("");
    setDigit("");
  };

  const calc = () => {
    const num1 = Number(numLeft.replace(",", "."));
    const num2 = Number(numRight.replace(",", "."));

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
    const rsl = String(calc()).replace(".", ",");
    setExpression(expression + " " + digit);
    setDigit("= " + rsl);
    cleanCalc();
    setNumLeft(rsl);
  };

  const deleteDigit = () => {
    const digitCur = digit.substring(0, digit.length - 1);
    setDigit(digitCur);

    if (numLeft !== "" && numRight === "") {
      setNumLeft(numLeft.substring(0, numLeft.length - 1));
    } else {
      setNumRight(numRight.substring(0, numRight.length - 1));
    }
  };

  return (
    <div className="container">
      <Display expression={expression}>{digit !== "" ? digit : "0"}</Display>
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
            setOperator={deleteDigit}
          ></Operator>
          <Operator
            label="/"
            value="/"
            className="operator"
            setOperator={handleOperation}
          ></Operator>
          <Operator
            label="*"
            value="*"
            className="operator"
            setOperator={handleOperation}
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
            label=","
            value={0}
            className="numeric"
            setDigit={handleComma}
          ></Digit>
        </div>
        <div className="side-operators">
          <Operator
            label="-"
            value="-"
            className="operator"
            setOperator={handleOperation}
          ></Operator>

          <Operator
            label="+"
            value="+"
            className="operator tall"
            setOperator={handleOperation}
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
