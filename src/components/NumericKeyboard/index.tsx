import "./styles.scss";
import Digit from "../Digit";

interface props {
  setDigit: any;
}

export default function NumericKeyboard({ setDigit }: props) {
  return (
    <div className="numerics">
      <Digit
        label="7"
        value={7}
        className="numeric"
        setDigit={setDigit}
      ></Digit>
      <Digit
        label="8"
        value={8}
        className="numeric"
        setDigit={setDigit}
      ></Digit>
      <Digit
        label="9"
        value={9}
        className="numeric"
        setDigit={setDigit}
      ></Digit>
      <Digit
        label="4"
        value={4}
        className="numeric"
        setDigit={setDigit}
      ></Digit>
      <Digit
        label="5"
        value={5}
        className="numeric"
        setDigit={setDigit}
      ></Digit>
      <Digit
        label="6"
        value={6}
        className="numeric"
        setDigit={setDigit}
      ></Digit>
      <Digit
        label="1"
        value={1}
        className="numeric"
        setDigit={setDigit}
      ></Digit>
      <Digit
        label="2"
        value={2}
        className="numeric"
        setDigit={setDigit}
      ></Digit>
      <Digit
        label="3"
        value={3}
        className="numeric"
        setDigit={setDigit}
      ></Digit>
    </div>
  );
}
