// SectionTitle.jsx
import React from "react";
import { Typography, Box } from "@mui/material";

const SectionTitle = ({ text, boxSx, textSx }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "80%",
        margin: "0 auto",
        position: "relative",
        my: 5,
        ...boxSx, // Aplicando estilos adicionales desde las props
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        sx={{
          position: "relative",
          textAlign: "center",
          color: "#00673D",
          "&::after": {
            content: '""',
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "-1px",
            width: "120%",
            height: "1px",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          },
          ...textSx, // Aplicando estilos adicionales desde las props
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
