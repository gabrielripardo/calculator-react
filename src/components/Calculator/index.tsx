import "./styles.css";
import Digit from "../Digit";
import Operator from "../Operator";
import Display from "../Display";
import { useState } from "react";
import { Number } from "../../models/Number";

export default function Calculator() {
  const [digit, setDigit] = useState("");

  const numbersDigits: Number[] = [];
  for (let i = 1; i <= 9; i++) {
    numbersDigits.push({ label: String(i), value: i });
  }

  const setValue = (value: string) => {
    setDigit(value);
  };

  return (
    <div className="container">
      <Display>{digit}</Display>
      <div className="keyboard">
        <div className="top-operators">
          <Operator
            label="Ac"
            value={0}
            className="cleaner"
            setOperator={setValue}
          ></Operator>
          <Operator
            label="<-"
            value={0}
            className="cleaner"
            setOperator={setValue}
          ></Operator>
          <Operator
            label="/"
            value={0}
            className="operator"
            setOperator={setValue}
          ></Operator>
          <Operator
            label="*"
            value={0}
            className="operator"
            setOperator={setValue}
          ></Operator>
        </div>
        <div className="numerics">
          {numbersDigits.map((digit: Number) => (
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
            value={0}
            className="operator"
            setOperator={setValue}
          ></Operator>

          <Operator
            label="+"
            value={0}
            className="operator tall"
            setOperator={setValue}
          ></Operator>

          <Operator
            label="="
            value={0}
            className="result tall"
            setOperator={setValue}
          ></Operator>
        </div>
      </div>
    </div>
  );
}
