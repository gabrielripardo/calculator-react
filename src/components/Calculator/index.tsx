import "./styles.css";
import Button from "../Button";
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
          <Button
            label="Ac"
            value={0}
            className="cleaner"
            setDigit={setValue}
          ></Button>
          <Button
            label="<-"
            value={0}
            className="cleaner"
            setDigit={setValue}
          ></Button>
          <Button
            label="/"
            value={0}
            className="operator"
            setDigit={setValue}
          ></Button>
          <Button
            label="*"
            value={0}
            className="operator"
            setDigit={setValue}
          ></Button>
        </div>
        <div className="numerics">
          {numbersDigits.map((digit: Number) => (
            <Button
              key={digit.label}
              label={digit.label}
              value={digit.value}
              className="numeric"
              setDigit={setValue}
            ></Button>
          ))}
          <Button
            label="0"
            value={0}
            className="numeric"
            setDigit={setValue}
          ></Button>
          <Button
            label="."
            value={0}
            className="numeric"
            setDigit={setValue}
          ></Button>
        </div>
        <div className="side-operators">
          <Button
            label="-"
            value={0}
            className="operator"
            setDigit={setValue}
          ></Button>

          <Button
            label="+"
            value={0}
            className="operator tall"
            setDigit={setValue}
          ></Button>

          <Button
            label="="
            value={0}
            className="result tall"
            setDigit={setValue}
          ></Button>
        </div>
      </div>
    </div>
  );
}
