import React from "react";
import { Grid, Box, Typography,useMediaQuery,useTheme } from "@mui/material";
import Paso1A from "../Etapa1Paso1A/Paso1A";
import Paso1B from "../Etapa1Paso1B/Paso1B";
import Paso1C from "../Etapa1Paso1C/Paso1C";
import Paso1D from "../Etapa1Paso1D/Paso1D";
import Etapa2Paso1A from "../Etapa2Paso1/Etapa2Paso1A";
import CuadroTexto from "../../CuadroTexto/CuadroTexto";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Boton from "../../Boton.jsx/Boton";
import url from "../../../pdfs/AyB.pdf";

function GridTitulacion() {
  const theme = useTheme();
     const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
     
  return (
    <>
      <Box
        sx={{ flexGrow: 1, px: { xs: 2, sm: 5, md: 10, lg: 15 }, py: 2, mt: 5 }}
      >
        <Grid container gap={2}>
          <Grid item xs={12}>
            <SectionTitle
              text="Titulación"
              textSx={{
                fontSize: { xs: "24px", sm: "32px", md: "42px" },
                marginTop: 0,
              }}
              boxSx={{ my: 0, mb: 2 }}
            />
             <Box sx={{ 
              display: "flex", 
              width: "100%", 
              justifyContent: isSmallScreen ? "center" : "flex-end" 
            }}>
              <Boton
                texto="Descargar formato A y B"
                pdfUrl={url}
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
              <CuadroTexto texto="REQUISITOS Y PROCESOS PARA LA TITULACIÓN, EN SÓLO 3 PASOS." />
            </Box>
            <Paso1A />
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
          <Grid item xs={12} sx={{ width: "auto", height: "auto" }}>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                marginTop: 2,
                fontStyle: "italic",
              }}
            >
              Importante: espera el correo de confirmación para pasar al paso 2.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default GridTitulacion;
