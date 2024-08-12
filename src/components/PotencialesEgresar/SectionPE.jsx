import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
  Card,
  CardContent,
  Box,
  Grid,
} from "@mui/material";
import CardBox from "../CardBox/CardBox";

function SectionPE() {
  return (
    <>
      <SectionTitle
        text={"Potenciales a Egresar"}
        textSx={{
          fontSize: { xs: "24px", sm: "32px", md: "42px" },
          marginTop: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ mb: 8 }}>
        <Box sx={{ maxWidth: 800, mx: "auto", p: 2, mb: 8 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{ textAlign: "center", color: "#D3912A" }}
              >
                Ceremonia de Potenciales a Egresar
              </Typography>

              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                sx={{ px: 2 }}
              >
                Se consideran potenciales a egresar los alumnos que cursan su
                último semestre de la licenciatura.
              </Typography>

              <List>
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography
                        variant="h6"
                        component="h2"
                        gutterBottom
                        sx={{ fontWeight: "bold", color: "#D3912A" }}
                      >
                        Requisitos:
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="- Estar cursando el último semestre de licenciatura" />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="- La coordinadora de seguimiento a egresado de la FTYM (titulacion.ftmtij@uabc.edu.mx), 
                en su momento, te enviará a tu correo institucional el proceso para el registro de potenciales a egresar (Es único registro)."
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <CardBox
              image={
                process.env.PUBLIC_URL + "/assets/FotosGaleria/PE_2024-1.jpeg"
              }
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <CardBox
              image={
                process.env.PUBLIC_URL + "/assets/FotosGaleria/PE_2023-2.jpeg"
              }
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <CardBox
              image={
                process.env.PUBLIC_URL + "/assets/FotosGaleria/PE_2023-1.jpeg"
              }
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default SectionPE;
