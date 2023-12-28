import React from "react";

//Material UI:
import { Box, Container, Grid, Typography } from "@mui/material";

//Components:
import Swiper from "./ComponentsServicesSectionOurWork/Swiper";

function ServiceSectionOurWork({ dataSectionOurWorkSwiper }) {
  return (
    <Container sx={{ pt: { xs: 0, md: 10 },  pb: { xs: 8, md: 10 } }}>
      <Grid
        container
        sx={{
          color: "white",
        }}
      >
        <Grid item xs={12}>
          <Box>
            <Typography
              sx={{
                textTransform: "uppercase",
                textAlign: "center",
                fontSize: { xs: 25, lg: 40 },
                fontWeight: "900",
              }}
            >
              Proyectos básicos
            </Typography>
            <Typography sx={{ textAlign: "center", mt: 2 }}>
              ¡Da un vistazo a nuestro trabajo!
            </Typography>

            <Swiper dataSectionOurWorkSwiper={dataSectionOurWorkSwiper} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ServiceSectionOurWork;
