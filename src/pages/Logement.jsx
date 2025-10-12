import { useParams } from "react-router-dom";
import NotFound from "./NotFound.jsx"
import logements from "../data/logements.json";
import Collapse from "../components/Collapse.jsx";
import Slideshow from "../components/Slideshow.jsx";

export default function Logement() {
  const { id } = useParams();

  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <NotFound />;
  }


  const {
    title,
    location: city,
    pictures = [],
    tags = [],
    host = { name: "", picture: "" },
    rating = "0",
    description = "",
    equipments = [],
  } = logement;

  const note = Number(rating) || 0;

  return (
    <main className="logement" id="content">
      <div className="container">
        <div className="logement__gallery">
          <Slideshow images={pictures} title={title} />
        </div>

        <header className="logement__top">
          <div className="logement__info">
            <h1 className="logement__title">{title}</h1>
            <p className="logement__location">{city}</p>

            {tags.length > 0 && (
              <ul className="logement__tags" aria-label="Étiquettes">
                {tags.map((tag) => (
                  <li key={tag} className="tag">{tag}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="logement__side">
            <div className="host">
              <span className="host__name">{host.name}</span>

              {host.picture ? (
                <img
                  className="host__picture"
                  src={host.picture}
                  alt={host.name || "Hôte"}
                  loading="lazy"
                />
              ) : (
                <div className="host__picture" aria-hidden="true" />
              )}
            </div>

            <div className="rating" role="img" aria-label={`Note ${note} sur 5`}>
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} aria-hidden="true" className={i < note ? "star is-on" : "star"}>
                  ★
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Deux panneaux */}
        <section className="logement__rows" aria-label="Détails du logement">
          <div className="logement__row">
            <Collapse title="Description">
              <p>{description}</p>
            </Collapse>
          </div>

          <div className="logement__row">
            <Collapse title="Équipements">
              <ul className="equipments">
                {equipments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </section>
      </div>
    </main>
  );
}
