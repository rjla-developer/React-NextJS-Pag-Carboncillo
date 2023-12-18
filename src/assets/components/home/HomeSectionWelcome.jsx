import React from "react";

import "../../styles/css/home/home_section_welcome.css";

//Material UI:
import { Box, Container, Grid, Typography } from "@mui/material";

//Tipografías:
import { Noto_Sans_Adlam } from "next/font/google";
const roboto = Noto_Sans_Adlam({ subsets: ["latin"], weight: ["400", "700"] });

function HomeSectionWelcome() {
  return (
    <Container
      maxWidth={false}
      sx={{}}
      className="container-home-section-welcome"
    >
      <Grid container sx={{}}>
        <Grid item xs={12}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ height: "100vh", mx: { xs: 1, md: 20, lg: 20 } }}
          >
            <Typography
              className={roboto.className}
              sx={{
                color: "white",
                fontSize: { xs: 40, md: 60, lg: 70 },
                textAlign: "center",
                textTransform: "uppercase"
              }}
            >
              Nuestra pasión se basa en la{" "}
              <Typography variant="span" color={"primary"}>
                cultura
              </Typography>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomeSectionWelcome;
