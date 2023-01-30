import "./styles.css";

interface props {
  label: string;
  value: number;
  className: string;
  setDigit: any;
}

export default function Button({ label, value, className, setDigit }: props) {
  return (
    <button className={className} onClick={() => setDigit(value)}>
      {label}
    </button>
  );
}
