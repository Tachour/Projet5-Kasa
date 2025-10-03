import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";

export default function AppLayout() {
  return (
    <>
      <Header />

      <main id="content">
        <Outlet />
      </main>

      <footer className="footer" role="contentinfo">
        <div className="footer__inner">
          <img src="/footer-logo.svg" alt="Kasa" className="footer__logo" />
          <p className="footer__copy">© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}
