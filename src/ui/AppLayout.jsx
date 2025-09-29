import { Outlet, NavLink, Link } from "react-router-dom";

export default function AppLayout() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="header" role="banner">
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
              to="/about"  // ← aligne avec le router
              className={({ isActive }) =>
                isActive ? "header__link is-active" : "header__link"
              }
            >
              À propos
            </NavLink>
          </nav>
        </div>
      </header>

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
