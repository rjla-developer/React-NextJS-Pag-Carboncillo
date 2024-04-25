import React from "react";

//Next.js:
import Image from "next/image";

//Material UI:
import { Box, Container, Grid, Typography } from "@mui/material";

//Images:
import imgFeed from "@/assets/images/components/home/homeSectionOurWork/diseno-feed-instagram-increibles.png";
import imgBrandDesign from "@/assets/images/components/home/homeSectionOurWork/diseño-de-marca.png";
import imgCorporateStationery from "@/assets/images/components/home/homeSectionOurWork/papeleria-corporativa.jpeg";

function HomeSectionOurWork() {
  const dataOurWork = [
    {
      id: 1,
      title: "Feed",
      img: imgFeed,
      alt: "Diseño elegante de un feed de instagram empresarial",
    },
    {
      id: 2,
      title: "Diseño de marca",
      img: imgBrandDesign,
      alt: "Diseño elegante de marca",
    },
    {
      id: 3,
      title: "Papelería corporativa",
      img: imgCorporateStationery,
      alt: "Diseño papelería empresarial",
    },
  ];
  return (
    <Container>
      <Grid
        container
        my={{ xs: 2, md: 5 }}
        spacing={{ xs: 0, md: 5 }}
        rowSpacing={{ xs: 5, md: 0 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12}>
          <Typography
            className="font-family-jaapokkisubtract"
            textAlign={"center"}
            color={"white"}
            fontSize={{ xs: 30, md: 50 }}
            mb={{ xs: 0, md: 7 }}
            sx={{
              letterSpacing: 8
            }}
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
                alt={item.alt}
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
