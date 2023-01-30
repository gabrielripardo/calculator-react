import "./styles.css";

interface props {
  children: string;
}

export default function Display({ children }: props) {
  return <div className="content">{children}</div>;
}
