import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Paso2A from "../Etapa1Paso2A/Paso2A";
import Paso1B from "../Etapa1Paso1B/Paso1B";
import Paso2C from "../Etapa1Paso2C/Paso2C";
import Paso1D from "../Etapa1Paso1D/Paso1D";
import Etapa2Paso2A from "../Etapa2Paso2/Etapa2Paso2A";
import Flechas from "../../Flechas/Flechas";

function GridTitulacionDos() {
  return (
    <>
      <Box
        sx={{ flexGrow: 1, px: { xs: 2, sm: 5, md: 10, lg: 15 }, py: 2, mt: 5 }}
      >
        <Grid container gap={2}>
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
                m: "30px",
                fontSize: { xs: "20px", sm: "24px", md: "28px" },
              }}
            >
              PASO 2 - CONSTANCIA DE VERIFICACIÓN DE DOCUMENTOS PARA TITULACIÓN
            </Typography>
            <Paso2A />
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
            <Paso2C />
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
            <Etapa2Paso2A />
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
              Importante: espera el correo de confirmación para pasar al paso 3.
            </Typography>
            <Flechas
              textoIzquierda="Regresar a inicio"
              textoDerecha="Avanzar a paso 3"
              rutaIzquierda="/Seguimiento-de-Egresados-UABC"
              rutaDerecha="/paso-tres-titulacion"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default GridTitulacionDos;
