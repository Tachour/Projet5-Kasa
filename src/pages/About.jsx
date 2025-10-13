import Collapse from "../components/Collapse.jsx";


export default function About() {
  return (
    <main className="about">
      <section className="about__banner" aria-hidden="true">
        <img src="/Image_about.svg" alt="" />
      </section>

      <div className="about__collapses">
        <Collapse title="Fiabilité">
          <p className="collapse__text">
            Les annonces sont vérifiées et régulièrement mises à jour pour vous
            garantir des informations fiables et à jour.
          </p>
        </Collapse>

        <Collapse title="Respect">
          <p className="collapse__text">
            La courtoisie et le respect guident nos échanges : hôtes et
            voyageurs s’engagent à préserver la qualité des logements.
          </p>
        </Collapse>

        <Collapse title="Service">
          <p className="collapse__text">
            Un support réactif et des outils simples vous accompagnent avant,
            pendant et après votre séjour.
          </p>
        </Collapse>

        <Collapse title="Sécurité">
          <p className="collapse__text">
            Les paiements sont sécurisés et vos données personnelles protégées
            selon les meilleures pratiques du secteur.
          </p>
        </Collapse>
      </div>
    </main>
  );
}


