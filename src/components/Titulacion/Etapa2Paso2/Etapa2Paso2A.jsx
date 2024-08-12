import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

function Etapa2Paso2A() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{p: 2, m: "0" }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}>
        ETAPA 2 (DEPARTAMENTO DE SERVICIOS ESTUDIANTILES Y GESTIÓN ESCOLAR)
      </Typography>
      <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
        <Box sx={{ flex: 1, mr: isMobile ? 0 : 2, mb: isMobile ? 2 : 0 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            El responsable de titulación revisará el correo electrónico y en
            el caso de cumplir con los requisitos dará respuesta por correo electrónico A PARTIR DE QUE DÍA
            PODRÁS ACUDIR a la Unidad Académica al "Departamento de Titulación" 
            para continuar con el paso 3 y último de la titulación.
          </Typography>
        </Box>
        {!isMobile && (
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 0.3 }}>
            <img
              src={process.env.PUBLIC_URL + "/assets/Persona-icono.png"}
              alt="Icono de perfil"
              style={{ maxWidth: "100%", maxHeight: "150px" }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Etapa2Paso2A;
