import React from "react";

//Material UI:
import { Box, Button, Container, Grid, Typography } from "@mui/material";

function ServiceSectionWelcome({dataSectionWelcome, onButtonClick }) {
  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Box sx={{textAlign: {xs: "center", md: "start"},}}>
            <Typography
            className="font-family-jaapokkisubtract"
              sx={{
                color: "white",
                fontSize: { xs: 40, md: 60},
                textTransform: "uppercase",
                mr: { xs: 0, md: 20 },
                letterSpacing: 8
              }}
            >
              {dataSectionWelcome.title}
            </Typography>
            <Typography sx={{ color: "white", mt: 2 }}>
              {dataSectionWelcome.description}
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: {xs: 4, md: 2},
                color: "black",
                backgroundColor: "#D9D9D9",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
              onClick={onButtonClick}
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
