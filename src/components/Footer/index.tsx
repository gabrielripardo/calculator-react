import "./styles.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        &copy; {new Date().getFullYear()}{" "}
        <span>Created by Gabriel Ripardo</span>
      </div>
    </footer>
  );
}
