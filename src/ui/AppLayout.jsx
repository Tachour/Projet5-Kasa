import { Outlet, NavLink, Link } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <header className="header">
        <div className="header__inner">
          <Link to="/" className="header__logo" aria-label="Kasa, accueil">
            <img src="/logo-kasa.svg" alt="Kasa" />
          </Link>

          <nav className="header__nav" aria-label="Navigation principale">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "header__link is-active" : "header__link"
              }
            >
              Accueil
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "header__link is-active" : "header__link"
              }
            >
              À propos
            </NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
  <div className="footer__inner">
    <img src="/footer-logo.svg" alt="Kasa" className="footer__logo" />
    <p className="footer__copy">© 2020 Kasa. All rights reserved</p>
  </div>
</footer>

    </>
  );
}
