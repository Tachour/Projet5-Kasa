export default function NotFound() {
  return (
    <main className="notfound">
      <h1 className="notfound__code">404</h1>
      <p className="notfound__text">Oups! La page que<br className="br-md" aria-hidden="true" /> vous demandez n'existe pas.</p>
      <a href="/" className="notfound__link">Retourner sur la page d’accueil</a>
    </main>
  );
}
