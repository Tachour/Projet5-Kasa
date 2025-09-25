// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";          // ✅ bon chemin
import Home from "./pages/Home.jsx";
import Logement from "./pages/Logement.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/a-propos", element: <About /> },          // ou /about, mais sois cohérent
      { path: "/404", element: <NotFound /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

