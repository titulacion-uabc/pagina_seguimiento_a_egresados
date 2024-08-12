import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function Paso3T() {
  return (
    <Box sx={{ border: '1px solid #ccc', p: 2, m: '0', textAlign: 'center' }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        Coordinación de Seguimiento a Egresados y Titulación
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body1">
          Dra. Ana María Miranda Zavala
          <br />
          <Link href="mailto:titulacion.ftmtij@uabc.edu.mx" sx={{ color: 'inherit' }}>
            titulacion.ftmtij@uabc.edu.mx
          </Link>
          <br />
          Teléfono: 664 9797578 Ext. 55521
        </Typography>
      </Box>
    </Box>
  );
}

export default Paso3T;
