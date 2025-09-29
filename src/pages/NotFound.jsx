import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="notfound">
      <h1 className="notfound__code">404</h1>
      <p className="notfound__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="notfound__link">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}
