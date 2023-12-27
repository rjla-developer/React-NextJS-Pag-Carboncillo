import React from "react";

//Material UI:
import { Box, Container, Grid, Typography } from "@mui/material";

//Components:
import Swiper from "./ComponentsServicesSectionOurWork/Swiper";

function ServiceSectionOurWork({dataSectionOurWorkSwiper}) {
  return (
    <Container sx={{ py: 10 }}>
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
                fontSize: { xs: 30, lg: 40 },
                fontWeight: '900'
              }}
            >
              Proyectos básicos
            </Typography>
            <Typography sx={{ textAlign: "center", mt: 2 }}>
              ¡Da un vistazo a nuestro trabajo!
            </Typography>

            <Swiper dataSectionOurWorkSwiper={dataSectionOurWorkSwiper}/>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ServiceSectionOurWork;
