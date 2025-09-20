import { Outlet, NavLink } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <header style={{padding:16, display:"flex", gap:16}}>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">À propos</NavLink>
      </header>

      <main style={{padding:16}}>
        <Outlet />
      </main>

      <footer style={{padding:16, textAlign:"center"}}>
        © Kasa
      </footer>
    </>
  );
}
