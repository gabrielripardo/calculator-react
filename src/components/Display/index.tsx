import "./styles.css";

interface props {
  children: string;
  expression: string;
}

export default function Display({ children, expression }: props) {
  return (
    <div className="content">
      <div className="expression">{expression}</div>
      {children}
    </div>
  );
}
