import "./styles.scss";
import Digit from "../Digit";
import Operator from "../Operator";
import Display from "../Display";
import { useState } from "react";
import { Expression } from "../../models/Expression";
import Control from "../Control/";
import BackspaceIcon from "../../assets/icons/backspace-icon.svg";
import NumericKeyboard from "../NumericKeyboard";

export default function Calculator() {
  const [numLeft, setNumLeft] = useState("");
  const [numRight, setNumRight] = useState("");
  const [digit, setDigit] = useState("");
  const [operator, setOperator] = useState("");
  const [expression, setExpression] = useState<Expression>({
    numLeft: "",
    operator: "",
    numRight: "",
  });

  const handleValue = (value: string) => {
    if (digit.length < 16) {
      if (!digit.includes("=")) {
        changeValue(value, {
          numLeft: numLeft,
          numRight: numRight,
          operator: operator,
        });
      } else {
        clean();
        changeValue(value, { numLeft: "", numRight: "", operator: "" });
      }
    }
  };

  const changeValue = (value: string, expr: Expression) => {
    if (expr.operator == "") {
      setNumLeft(expr.numLeft + value);
      setDigit(expr.numLeft + value);
    } else {
      setNumRight(expr.numRight + value);
      setDigit(expr.numRight + value);
    }
  };

  const handleOperation = (operator: string) => {
    setOperator(operator);
    setExpression({ numLeft: numLeft, operator: operator, numRight: "" });
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
    setOperator("");
    setNumLeft("");
    setNumRight("");
  };

  const clean = () => {
    cleanCalc();
    setExpression({ numLeft: "", operator: "", numRight: "" });
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
    setExpression({ ...expression, numRight: numRight });
    setDigit("= " + rsl);
    cleanCalc();
    setNumLeft(rsl != "0" ? rsl : "");
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
          <Control value="cc" className="cleaner" setControl={clean}>
            <span>Ac</span>
          </Control>
          <Control
            value="backspace"
            className="cleaner"
            setControl={deleteDigit}
          >
            <img src={BackspaceIcon} alt="backspace icon" />
          </Control>
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
        <div className="main-digits">
          <NumericKeyboard setDigit={handleValue} />
          <div className="numerics-bottom">
            <Digit
              label="0"
              value={0}
              className="numeric fat zero"
              setDigit={handleValue}
            ></Digit>
            <Digit
              label=","
              value={0}
              className="numeric comma"
              setDigit={handleComma}
            ></Digit>
          </div>
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
