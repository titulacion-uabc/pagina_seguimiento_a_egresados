import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

function CuadroTexto({ texto }) {
  const theme = useTheme();
  const isVerySmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box 
      sx={{
        backgroundColor: '#c4850d',
        color: 'white',
        padding: isVerySmallScreen ? '4px' : isSmallScreen ? '6px' : '10px',
        borderRadius: '5px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        width: '100%',
        maxWidth: isSmallScreen ? '300px' : '400px',
      }}
    >
      <Typography 
        variant="body1"
        sx={{
          fontSize: isVerySmallScreen ? '0.6rem' : isSmallScreen ? '0.7rem' : '1rem',
          lineHeight: isSmallScreen ? 1.2 : 1.5,
        }}
      >
        {texto}
      </Typography>
    </Box>
  );
}

export default CuadroTexto;