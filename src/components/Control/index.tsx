import "./styles.scss";

interface props {
  value: string;
  className: string;
  setControl: any;
  children: JSX.Element | JSX.Element[];
}

export default function Control({
  value,
  className,
  setControl,
  children,
}: props) {
  return (
    <button className={className} onClick={() => setControl(value)}>
      {children}
    </button>
  );
}
