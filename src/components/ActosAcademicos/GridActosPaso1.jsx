import React from "react";
import { Grid, Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Paso1Actos from "./Paso1Actos";
import Paso1B from "../Titulacion/Etapa1Paso1B/Paso1B";
import Paso1C from "../Titulacion/Etapa1Paso1C/Paso1C";
import Paso1D from "../Titulacion/Etapa1Paso1D/Paso1D";
import Etapa2Paso1A from "../Titulacion/Etapa2Paso1/Etapa2Paso1A";
import CuadroTexto from "../CuadroTexto/CuadroTexto";
import SectionTitle from "../SectionTitle/SectionTitle";
import FlechaAtras from "../Flechas/FlechaAtras";
import pdf from "../../pdfs/FORMATO registro comité pro-graduación.pdf";
import Boton from "../Boton.jsx/Boton";

function GridTitulacion() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{ flexGrow: 1, px: { xs: 2, sm: 5, md: 10, lg: 15 }, py: 2, mt: 5 }}
      >
        <Grid container justifyContent="center" gap={2}>
          <Grid item xs={12}>
            <SectionTitle
              text="Actos Académicos"
              textSx={{
                fontSize: { xs: "24px", sm: "32px", md: "42px" },
                marginTop: 0,
              }}
              boxSx={{ my: 0, mb: 2 }}
            />
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: isSmallScreen ? "center" : "flex-end",
              }}
            >
              <Boton
                texto="Descargar formato registro comité pro-graduación"
                pdfUrl={pdf}
                sx={{
                  fontSize: isSmallScreen ? "0.8rem" : "1rem",
                  padding: isSmallScreen ? "8px 16px" : "10px 20px",
                }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ border: "1px solid #00673D", width: "auto", height: "auto" }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                marginBottom: 2,
                mt: "30px",
                fontSize: { xs: "20px", sm: "24px", md: "28px" },
              }}
            >
              PASO 1 - CERTIFICADO DE ESTUDIOS PROFESIONALES Y CERTIFICACIÓN DE
              PASANTE
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CuadroTexto
                texto="REQUISITOS Y PROCESOS PARA ACTOS ACADÉMICOS."
                isSmallScreen={isSmallScreen}
              />
            </Box>
            <Paso1Actos />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ border: "1px solid #00673D", height: "auto" }}
          >
            <Paso1B />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ border: "1px solid #00673D", height: "auto" }}
          >
            <Paso1C />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ border: "1px solid #00673D", height: "auto" }}
          >
            <Paso1D />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          px: { xs: 2, sm: 5, md: 10, lg: 15 },
          py: 2,
          mt: "10px",
        }}
      >
        <Grid container gap={2}>
          <Grid
            item
            xs={12}
            sx={{ border: "1px solid #00673D", width: "auto", height: "auto" }}
          >
            <Etapa2Paso1A />
          </Grid>
          <Grid
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <FlechaAtras
              textoIzquierda="Regresar a inicio"
              rutaIzquierda="/Seguimiento-de-Egresados-UABC"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default GridTitulacion;
