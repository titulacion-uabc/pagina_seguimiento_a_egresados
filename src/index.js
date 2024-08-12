import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Titulacion from "./pages/Titulacion";
import { CssBaseline } from "@mui/material";
import GaleriaActos from "./pages/GaleriaActos";
import GaleriaPotenciales from "./pages/GaleriaPotenciales";
import GaleriaTomas from "./pages/GaleriaTomas";
import Actos from "./pages/Actos";
import Paso3Titulacion from "./pages/TitulacionPasoTres";
import PotencialesEgresar from "./pages/PotencialesEgresar";

const router = createBrowserRouter([
  {
    path: "/Seguimiento-de-Egresados-UABC",
    element: <Inicio />,
  },
  {
    path: "/pasos-titulacion",
    element: <Titulacion />,
  },
  {
    path: "/galeria-actos-academicos",
    element: <GaleriaActos />,
  },
  {
    path: "/galeria-potenciales-egresar",
    element: <GaleriaPotenciales />,
  },
  {
    path: "/galeria-tomas-protesta",
    element: <GaleriaTomas />,
  },
  {
    path: "/actos-academicos",
    element: <Actos />,
  },
  {
    path: "/paso-tres-titulacion",
    element: <Paso3Titulacion />,
  },
  {
    path: "/potenciales-egresar",
    element: <PotencialesEgresar />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>
);
