import { NavLink } from "react-router-dom";
export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Oups, la page que vous demandez n’existe pas.</p>
      <NavLink to="/">Retour à l’accueil</NavLink>
    </div>
  );
}
