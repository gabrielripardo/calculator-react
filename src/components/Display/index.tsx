import "./styles.css";

interface props {
  children: string;
  expression: string;
}

export default function Display({ children, expression }: props) {
  const getFontSize = () => {
    if (children.length > 11) {
      const size = 10 + (children.length - 11);
      return `calc(2.5rem - ${size}px)`;
    }

    return "2.5rem";
  };

  return (
    <div className="content" style={{ fontSize: getFontSize() }}>
      <div className="expression">{expression}</div>
      {children}
    </div>
  );
}
