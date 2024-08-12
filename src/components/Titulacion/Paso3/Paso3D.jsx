import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

function Paso3D() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ m: '0', p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold'}}>
        MENCIÓN HONORÍFICA:
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
        <Box sx={{ flex: 1, mr: isMobile ? 0 : 2, mb: isMobile ? 2 : 0 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            A. Recibo de pago por $466 pesos, por concepto de Mención Honorífica, realizar el pago en el departamento de Tesorería UABC.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            B. 2 Fotografías tamaño título (blanco y negro, fondo blanco en papel mate con retoque, NO instantáneas, NO digitales).
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            C. Kardex y enviarlo a titulacion.ftmtij@uabc.edu.mx (Solicitarlo en Servicios Escolares) NO PRESENTAR EL DE INTERNET.
          </Typography>
          <Typography variant="body1">
            NOTA: Son acreedores a Mención Honorífica los alumnos que cumplen con estos 4 criterios:
          </Typography>
          <ul>
            <li>Promedio mayor a 90.</li>
            <li>No haberse dado de baja.</li>
            <li>No haber repetido alguna materia.</li>
            <li>No haber realizado algún extraordinario.</li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}

export default Paso3D;
