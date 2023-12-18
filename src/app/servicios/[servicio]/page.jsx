import React from "react";

//Material UI:
import { Box, Container, Grid, Typography } from "@mui/material";

function Servicio({ params }) {
  return (
    <Container maxWidth={false} className="container-servicio">
      <Grid container>
        <Grid item xs={7}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ height: "100vh", mx: { xs: 1, md: 20, lg: 20 } }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: 40, md: 60, lg: 60 },
                textAlign: "start",
                textTransform: "uppercase",
              }}
            >
              Conecta con tu audiencia
            </Typography>
            {/* <Typography sx={{color: "white"}}>Llega a una comunidad participativa, trabajando en conjunto del contenido orgánico.</Typography> */}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Servicio;
