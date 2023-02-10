import { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./styles.scss";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout-wrapper">
      <div className="main-wrapper">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}
