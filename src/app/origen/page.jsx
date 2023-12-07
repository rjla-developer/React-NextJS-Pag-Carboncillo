/* eslint-disable react/no-unescaped-entities */
import React from "react";

import "../../assets/styles/css/origin/origin.css";

//Material UI:
import { Box, Container, Grid, Typography } from "@mui/material";

function Origin() {
  return (
    <Container className="container-origin" maxWidth={"false"}>
      <Container>
        <Grid container sx={{ height: "100vh" }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <Typography fontSize={{xs: 45, md: 50}} fontWeight={"bold"} mb={2}>
                Nuestro origen
              </Typography>
              <Typography fontSize={{xs: 16, md: 18}}>
                El origen de "Carboncillo” se fundamenta en nuestra pasión por
                impulsar a las empresas en el mundo digital. A lo largo de
                nuestra evolución, hemos abrazado el desafío de transformar los
                obstáculos en oportunidades, renaciendo con cada experiencia y
                fortaleciendo nuestra determinación por crear un impacto
                significativo en el panorama del marketing, haciendo de cada
                "Proyecto" (Cliente) una labor única y personalizada.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default Origin;
