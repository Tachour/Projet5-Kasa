import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Logement from "./pages/Logement.jsx";
import NotFound from "./pages/NotFound.jsx";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,              // Header + <Outlet /> + Footer
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/logement/:id", element: <Logement /> },
      { path: "*", element: <NotFound /> }, // 404
    ],
  },
]);
