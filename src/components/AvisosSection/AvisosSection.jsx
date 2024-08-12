import React from "react";
import NewsBox from "../NewsBox/NewsBox";
import { Box, Container } from "@mui/material";
import SectionTitle from "../SectionTitle/SectionTitle";

function AvisosSection() {
  return (
    <>
      <SectionTitle
        text={"Avisos"}
        textSx={{
          fontSize: { xs: "24px", sm: "32px", md: "42px" },
          marginTop: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ mb: 8 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: { xs: 5, md: 0 },
          }}
        >
          <NewsBox
            title={"AVISO 1"}
            notice={
              "Los actos académicos se realizan a finales de cada semestre"
            }
            date="Junio y Diciembre"
          />
          <NewsBox
            title={"AVISO 2"}
            notice={
              "La Ceremonia de Potenciales a Egresar se realizan a finales de cada semestre"
            }
            date="Junio y Diciembre"
          />
          <NewsBox
            title={"AVISO 3"}
            notice={"La toma de protesta se realizan 2 veces cada semestre"}
            date="Marzo, Junio, Septiembre, Diciembre"
          />
        </Box>
      </Container>
    </>
  );
}

export default AvisosSection;
