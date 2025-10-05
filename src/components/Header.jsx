import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="header__inner container">
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
            A Propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
