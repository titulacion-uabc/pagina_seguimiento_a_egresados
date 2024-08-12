import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

function Etapa2Paso1A() {
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
            El responsable de la elaboración de certificados de estudios
            profesionales y certificados de pasante revisará el correo electrónico y en
            el caso de cumplir con los requisitos dará respuesta A PARTIR DE QUE DÍA
            PODRÁS ACUDIR al Departamento de Servicios Estudiantiles y Gestión
            Escolar con los siguientes requisitos:
          </Typography>
          <Typography variant="body1" component="ul" sx={{ mb: 2, pl: 3 }}>
            <li>2 Fotografías tamaño título y 2 tamaño credencial cumpliendo con las
            características solicitadas.</li>
            <li>2 copias o impresiones de Pre-solicitud (siii.uabc.mx).</li>
            <li>Impresión del correo de confirmación de documentos completos.</li>
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

export default Etapa2Paso1A;