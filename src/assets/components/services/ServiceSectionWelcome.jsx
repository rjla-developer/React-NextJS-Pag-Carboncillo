import React from "react";

//Material UI:
import { Box, Button, Container, Grid, Typography } from "@mui/material";

function ServiceSectionWelcome() {
  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={7}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: 40, md: 60, lg: 60 },
                textAlign: "start",
                textTransform: "uppercase",
                mr: { xs: 0, md: 20 },
              }}
            >
              Conecta con tu audiencia
            </Typography>
            <Typography sx={{ color: "white", mt: 2 }}>
              Llega a una comunidad participativa, trabajando en conjunto del
              contenido orgánico.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                color: "black",
                backgroundColor: "#D9D9D9",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              Ver soluciones
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ServiceSectionWelcome;
