import Banner from "../components/Banner.jsx";
import Card from "../components/Card.jsx";
import logements from "../data/logements.json";

export default function Home() {
  const homeTitle = (
    <>
      Chez vous,<br className="br-mobile" /> partout et ailleurs
    </>
  );

  return (
    <>
      <Banner className="banner--home" title={homeTitle} imageSrc="/banner-home.svg" />
      <section className="cards-grid" aria-label="Liste des logements">
        {logements.map(({ id, title, cover, pictures }) => (
          <Card key={id} id={id} title={title} cover={cover || pictures?.[0] || ""} />
        ))}
      </section>
    </>
  );
}
