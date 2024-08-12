import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

function Paso3U() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ m: '0', p: 2 }}>
      <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
        <Box sx={{ flex: 1, mr: isMobile ? 0 : 2, mb: isMobile ? 2 : 0 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Coordinación de Seguimiento a Egresados y Titulación
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            1. 4 Fotografías tamaño título (Deberán ser recientes, de frente, blanco y negro, fondo blanco en papel mate con retoque. NO se aceptan digitales e instantáneas).
            <br />
            2. Recibo de pago por $200 pesos, por concepto de Fomento a la Responsabilidad Social Universitaria, el cual deberá realizar en el departamento de Tesorería UABC.
            <br />
            3. Cimarrón Socialmente Responsable pide tu cartera con 3 boletos en el cubículo 2 de la FTYM, agendar cita: titulacion.ftmtij@uabc.edu.mx
            <br />
            4. Horarios para entrega de documentos (1 y 2) cubículo 2 de lunes a viernes de 8:00 a 21:00 horas (las indicaciones están pegadas en la puerta).
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Paso3U;
