import "./styles.css";

interface props {
  label: string;
  value: number;
  className: string;
  setOperator: any;
}

export default function Digit({ label, value, className, setOperator }: props) {
  return (
    <button className={className} onClick={() => setOperator(value)}>
      {label}
    </button>
  );
}
