import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Collapse from "../components/Collapse.jsx";
import NotFound from "./NotFound.jsx";

export default function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  // id inconnu -> 404
  if (!logement) return <NotFound />;

  const { title, location, pictures, tags, host, rating, description, equipments } = logement;

  return (
    <main className="logement">
      {/* Galerie simple (tu pourras mettre un vrai Carousel plus tard) */}
      <div className="logement__gallery">
        {pictures?.[0] && (
          <img
            src={pictures[0]}
            alt={title}
            className="logement__cover"
          />
        )}
      </div>

      <header className="logement__top">
        <div className="logement__info">
          <h1 className="logement__title">{title}</h1>
          <p className="logement__location">{location}</p>
          <ul className="logement__tags">
            {tags.map((t) => (
              <li key={t} className="tag">{t}</li>
            ))}
          </ul>
        </div>

        <div className="logement__side">
          <div className="host">
            <span className="host__name">{host.name}</span>
            <img className="host__picture" src={host.picture} alt={host.name} />
          </div>

          <div className="rating" aria-label={`Note ${rating} sur 5`}>
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} aria-hidden="true" className={i < Number(rating) ? "star is-on" : "star"}>
                ★
              </span>
            ))}
          </div>
        </div>
      </header>

      <section className="logement__details">
        <Collapse title="Description">
          <p>{description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul className="equipments">
            {equipments.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </Collapse>
      </section>
    </main>
  );
}
