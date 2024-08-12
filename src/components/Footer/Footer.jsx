import React from "react";
import { Box, Typography, Link, List, ListItem } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        p: { xs: 2, sm: 5, md: 10 },
        backgroundColor: "#D3912A",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        color: "white",
        borderTop: "1px solid black",
        justifyContent: "space-around",
        alignItems: { xs: "center", md: "flex-start" },
        marginTop: { xs: 5, md: "120px" },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Box
        sx={{ mb: { xs: 2, md: 1 }, textAlign: { xs: "center", md: "left" } }}
      >
        <Typography variant="body1">
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            FTYM
          </Typography>
          <br />
          Facultad de Turismo y Mercadotecnia
          <br />
          Universidad 14418, UABC, Parque Internacional Industrial Tijuana,
          22390
          <br />
          Tijuana, B.C.
          <br />
          Tel: 6649797578 ext. 55521
        </Typography>
      </Box>

      <Box
        sx={{
          textAlign: { xs: "center", md: "left" },
          width: { xs: "100%", md: "auto" },
        }}
      >
        <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
          Enlaces de interés
        </Typography>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: { xs: "center", md: "flex-start" },
            width: "100%",
          }}
        >
          <ListItem
            sx={{
              p: 0,
              justifyContent: { xs: "center", md: "flex-start" },
              width: "100%",
            }}
          >
            <Link
              href="http://ftm.tij.uabc.mx/"
              target="_blank"
              rel="noopener"
              color="inherit"
              sx={{ "&:hover": { color: "black" } }}
            >
              Facultad de Turismo y Mercadotecnia
            </Link>
          </ListItem>
          <ListItem
            sx={{
              p: 0,
              justifyContent: { xs: "center", md: "flex-start" },
              width: "100%",
            }}
          >
            <Link
              href="http://www.bolsadetrabajo.uabc.mx/vacantes/empleos/inicio/"
              target="_blank"
              rel="noopener"
              color="inherit"
              sx={{ "&:hover": { color: "black" } }}
            >
              Bolsa de trabajo
            </Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Footer;
