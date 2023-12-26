"use client";
import React, { useState, useEffect } from "react";
import "../../../styles/css/services/components/swiper.css";

//NextJS:
import Image from "next/image";

//Material UI:
import { Grid, Box, Typography, Button } from "@mui/material";

//Images:
import imgCarousel1 from "../../../images/services/socialMedia/carousel/1.png";
import imgCarousel2 from "../../../images/services/socialMedia/carousel/2.png";
import imgCarousel3 from "../../../images/services/socialMedia/carousel/3.png";
import imgCarousel4 from "../../../images/services/socialMedia/carousel/4.png";
import imgCarousel5 from "../../../images/services/socialMedia/carousel/5.png";
import imgCarousel6 from "../../../images/services/socialMedia/carousel/6.png";
import imgCarousel7 from "../../../images/services/socialMedia/carousel/7.png";
import imgCarousel8 from "../../../images/services/socialMedia/carousel/8.png";

const dataSwiper = [
  {
    id: 0,
    image: imgCarousel1,
    alt: ""
  },
  {
    id: 1,
    image: imgCarousel2,
    alt: ""
  },
  {
    id: 2,
    image: imgCarousel3,
    alt: ""
  },
  {
    id: 3,
    image: imgCarousel4,
    alt: ""
  },
  {
    id: 4,
    image: imgCarousel5,
    alt: ""
  },
  {
    id: 5,
    image: imgCarousel6,
    alt: ""
  },
  {
    id: 6,
    image: imgCarousel7,
    alt: ""
  },
  {
    id: 7,
    image: imgCarousel8,
    alt: ""
  },
];

const Swiper = () => {
  const [itemActive, setItemActive] = useState(2);

  /* useEffect(() => {
    const intervalId = setInterval(() => {
      setItemActive((prevItem) => (prevItem + 1) % dataSwiper.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []); */

  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        width: "100%",
      }}
    >
      <Grid item xs={12}>
        <Box
          className="options"
          sx={{
            my: 5,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          {dataSwiper.map((dataItem) => {
            return (
              <Button
                sx={{ color: "rgb(255, 255, 255, .5)" /* , mr: 30 */ }}
                key={dataItem.id}
                item
                onClick={() => setItemActive(dataItem.id)}
                className={`option ${
                  itemActive == dataItem.id ? "active" : null
                }`}
                /* style={{"--optionBackground": 'url(https://raw.githubusercontent.com/Programith/Images/main/background_03.jpg)'}} */
              >
                <Image src={dataItem.image} alt={dataItem.alt}/>
              </Button>
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Swiper;
