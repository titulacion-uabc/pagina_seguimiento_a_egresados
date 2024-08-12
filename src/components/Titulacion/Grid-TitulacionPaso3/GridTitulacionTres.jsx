import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Paso3U from "../Paso3/Paso3U";
import Paso3D from "../Paso3/Paso3D";
import Paso3T from "../Paso3/Paso3T";
import Flechas from "../../Flechas/Flechas";
import Boton from "../../Boton.jsx/Boton";
import pdf from "../../../pdfs/Pasos Titulación-GENERAL.pdf";

function GridTitulacionTres() {
  return (
    <>
      <Box
        sx={{ flexGrow: 1, px: { xs: 2, sm: 5, md: 10, lg: 15 }, py: 2, mt: 5 }}
      >
        <Grid container gap={2}>
          <Grid
            item
            xs={12}
            sx={{ width: "100%", display: "flex", justifyContent: "end" }}
          >
            <Boton texto="Descarga pasos de titulacion general" pdfUrl={pdf} />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ border: "1px solid #00673D", width: "auto", height: "auto" }}
          >
            <Typography
              variant="h4"
              component="h4"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                marginBottom: 2,
                mt: "30px",
                fontSize: { xs: "20px", sm: "24px", md: "28px" },
              }}
            >
              PASO 3 - PRESENTAR ANTE COORDINACIÓN DE TITULACIÓN FTYM
            </Typography>
            <Paso3U />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ border: "1px solid #00673D", height: "auto" }}
          >
            <Paso3D />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ border: "1px solid #00673D", height: "auto" }}
          >
            <Paso3T />
          </Grid>
          <Grid item xs={12} sx={{ width: "auto", height: "auto", mt: 2 }}>
            <Flechas
              textoIzquierda="Regresar al paso 1 y 2"
              textoDerecha="Regresar a inicio"
              rutaIzquierda="/pasos-titulacion"
              rutaDerecha="/Seguimiento-de-Egresados-UABC"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default GridTitulacionTres;
