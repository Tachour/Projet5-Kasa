// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";          
import Home from "./pages/Home.jsx";
import Logement from "./pages/logement.jsx"; // 👈 casse corrigée (fichier en minuscule)
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },          // 👈 Home en route index
      { path: "about", element: <About /> },
      { path: "a-propos", element: <About /> },
      { path: "logement/:id", element: <Logement /> }, // 👈 route de détail ajoutée
      { path: "404", element: <NotFound /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
