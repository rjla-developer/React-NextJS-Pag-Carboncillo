import React from "react";

//Material UI:
import { Box, Container, Grid, Typography } from "@mui/material";

//Images:
import imgFeed from "../../images/home/homeSectionOurWork/diseno-feed-instagram-increibles.png";
import imgBrandDesign from "../../images/home/homeSectionOurWork/diseño-de-marca.png";
import imgCorporateStationery from "../../images/home/homeSectionOurWork/papeleria-corporativa.jpeg";
import Image from "next/image";

function HomeSectionOurWork() {
  const dataOurWork = [
    {
      id: 1,
      title: "Feed",
      img: imgFeed,
      alt: "",
    },
    {
      id: 2,
      title: "Diseño de marca",
      img: imgBrandDesign,
    },
    {
      id: 3,
      title: "Papelería corporativa",
      img: imgCorporateStationery,
    },
  ];
  return (
    <Container>
      <Grid
        container
        my={{ xs: 2, md: 5 }}
        spacing={{ xs: 0, md: 5 }}
        rowSpacing={{ xs: 5, md: 0 }}
        xs={12}
        md={"auto"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12}>
          <Typography
            textAlign={"center"}
            color={"white"}
            fontSize={{ xs: 30, md: 50 }}
            mb={{ xs: 0, md: 7 }}
          >
            NUESTRO{" "}
            <Typography variant="span" color={"primary"}>
              TRABAJO
            </Typography>
          </Typography>
        </Grid>
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
              <Image
                style={{ borderRadius: "20px" }}
                src={item.img}
                alt=""
                width={350}
                height={350}
              />
              <Typography
                mt={3}
                textAlign={"center"}
                color={"white"}
                fontSize={20}
              >
                {item.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomeSectionOurWork;
