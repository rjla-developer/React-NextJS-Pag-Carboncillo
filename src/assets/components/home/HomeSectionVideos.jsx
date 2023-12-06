import React from "react";

//Material UI:
import { Box, Container, Grid, Typography } from "@mui/material";

function HomeSectionVideos() {
  const dataOurWork = [
    {
      id: 1,
      video: "/videos/home/homeSectionVideos/diseno-historia-promocional-hamburguesas.mp4",
    },
    {
      id: 2,
      video: "/videos/home/homeSectionVideos/diseno-historia-promocional-termos.mp4",
    },
    {
      id: 3,
      video: "/videos/home/homeSectionVideos/diseno-historia-promocional-pizza.mp4",
    },
  ];
  return (
    <Container>
      <Grid
        container
        py={{ xs: 2, md: 3 }}
        spacing={{ xs: 0, md: 11.35 }}
        rowSpacing={{ xs: 5, md: 0 }}
        xs={12}
        md={"auto"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {dataOurWork.map((item) => (
          <Grid
            item
            key={item.id}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <video
                src={item.video}
                autoPlay
                playsInline
                muted
                loop
                style={{width: "300px", borderRadius: "20px"}}
              ></video>
            </Box>
          </Grid>
        ))}

        <Grid item xs={12}>
          <Typography mt={{xs: 0, md: 3}} textAlign={"center"} color={"white"} fontSize={20}>
            Promocionales
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomeSectionVideos;
