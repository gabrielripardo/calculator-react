import "./styles.css";
import Button from "../Button";
import Display from "../Display";
import { useState } from "react";

export default function Calculator() {
  const [digit, setDigit] = useState("");

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
          <Button
            label="1"
            value={1}
            className="numeric"
            setDigit={setValue}
          ></Button>
          <Button
            label="2"
            value={2}
            className="numeric"
            setDigit={setValue}
          ></Button>
          <Button
            label="3"
            value={3}
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
