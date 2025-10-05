import Banner from "../components/Banner.jsx";
import Card from "../components/Card.jsx";
import logements from "../data/logements.json";

export default function Home() {

  return (
    <>
      <Banner
        title="Chez vous, partout et ailleurs"
        imageSrc="/banner-home.svg"
      />

      <section className="cards-grid">
        {logements.map(({ id, title, cover, pictures }) => (
          <Card
            key={id}
            id={id}
            title={title}
            cover={cover || pictures?.[0] || ""}
          />
        ))}
      </section>
    </>
  );
}
