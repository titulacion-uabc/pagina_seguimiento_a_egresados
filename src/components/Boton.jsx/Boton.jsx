import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)(({ theme, customSx }) => ({
  backgroundColor: '#00673D',
  color: '#FFFFFF',
  borderRadius: '10px', 
  padding: '10px 20px', 
  '&:hover': {
    backgroundColor: '#00401F', 
  },
  ...customSx, // Aplica los estilos personalizados pasados como prop
}));

function Boton({ texto, pdfUrl, sx }) {
  const handleClick = () => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <CustomButton 
      variant="contained" 
      onClick={handleClick} 
      customSx={sx} // Pasa los estilos personalizados al componente styled
    >
      {texto}
    </CustomButton>
  );
}

export default Boton;