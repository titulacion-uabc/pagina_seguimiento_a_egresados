import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

function Paso1Actos() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ m: "0", p: 2 }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 5,
        }}
      >
        PASO 1: ETAPA 1 (ALUMNO)
      </Typography>
      <Box sx={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row" }}>
        <Box sx={{ flex: 1, mr: isSmallScreen ? 0 : 2, mb: isSmallScreen ? 2 : 0 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Departamento de Servicios Estudiantiles y Gestión Escolar
            <br />
            Requisitos para Certificado de Estudios Profesionales y Certificado
            de Pasante
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <Typography
              component="span"
              sx={{ fontWeight: "bold", color: "#00673D" }}
            >
              A. Enviar correo electrónico desde tu cuenta institucional a la
              siguiente dirección:
            </Typography>
            <br />
            <Typography
              component="span"
              sx={{ fontWeight: "bold", color: "#00673D" }}
            >
              ceypcp1.dsegetji@uabc.edu.mx
            </Typography>
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            1. Pre-solicitud por duplicado, de Sistema de trámite único de
            Certificados, Titulación y Cédula Profesional (siii.uabc.mx).
            <br />
            2. Original de Acta de Nacimiento.
            <br />
            3. Original Certificado de Preparatoria (En caso de haber cursado en
            dos o más bachilleratos presentar el certificado parcial de
            procedencia).
            <br />
            4. Original de Acreditación de idioma extranjero y haber aplicado
            Examen General de Egreso en Licenciatura EGEL (Sólo para egresados
            del periodo 2006-2 en adelante).
            <br />
            5. CURP impresión con fecha reciente.
            <br />
            6. 2 Fotografías reciente, tamaño credencial, cuadrada, blanco y
            negro de frente, opaca de estudio.
            <br />
            7. 2 Fotografías reciente, tamaño título, ovalada 6x9 cm, blanco y
            negro de frente con 5 cm de acercamiento de la cara, opaca, de
            estudio, no instantáneas, no digitales, no copia de negativo y con
            mismas características ambas fotografías.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              Damas:
            </Typography>{" "}
            No se aceptarán fotografías diferentes, con blusas descubiertas
            (tirantes, estraples) ni de color oscuro, debido a que el sello
            pierde su visibilidad. Maquillaje y accesorios no ostentosos, sin
            lentes.
            <br />
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              Caballeros:
            </Typography>{" "}
            Con saco y corbata no oscuros, sin lentes y accesorios.
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold", mb: 2 }}>
            Tiempo máximo del trámite son 13 a 17 días hábiles
            <br />
            Horario: 8:30 a.m. a 1:30 p.m. y 3:30 p.m. a 6:00 p.m. Tel.
            979-75-05 Ext. 53210 y 53211
          </Typography>
        </Box>
        {!isSmallScreen && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: 0.5,
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/assets/CimarronAnimado.png"}
              alt="Cimarron-Animado"
              style={{ maxWidth: "100%", maxHeight: "70%" }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Paso1Actos;