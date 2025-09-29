import { Link } from "react-router-dom";

export default function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <div className="card__media">
        {cover && <img src={cover} alt="" loading="lazy" />}
      </div>
      <h3 className="card__title">{title}</h3>
      <span className="card__overlay" aria-hidden="true" />
    </Link>
  );
}