"use client";
import React, { useState, useEffect } from "react";
import "../../../styles/css/services/components/swiper.css";

//Material UI:
import { Grid, Box, Typography, Button } from "@mui/material";

//Images:
import imgCarousel1 from "../../../images/services/socialMedia/carousel/1.png"
import Image from "next/image";

const dataSwiper = [
  {
    id: 0,
    background:
      "https://raw.githubusercontent.com/Programith/Images/main/background_01.jpg",
  },
  {
    id: 1,
    background:
      "https://raw.githubusercontent.com/Programith/Images/main/background_02.jpg",
  },
  {
    id: 2,
    background:
      "https://raw.githubusercontent.com/Programith/Images/main/background_03.jpg",
  },
  {
    id: 3,
    background:
      "https://raw.githubusercontent.com/Programith/Images/main/background_04.jpg",
  },
  {
    id: 4,
    background:
      "https://raw.githubusercontent.com/Programith/Images/main/background_05.jpg",
  },
  {
    id: 5,
    background:
      "https://raw.githubusercontent.com/Programith/Images/main/background_04.jpg",
  },
  {
    id: 6,
    background:
      "https://raw.githubusercontent.com/Programith/Images/main/background_05.jpg",
  },
  {
    id: 7,
    background:
      "https://raw.githubusercontent.com/Programith/Images/main/background_04.jpg",
  },
  {
    id: 8,
    background:
      "https://raw.githubusercontent.com/Programith/Images/main/background_05.jpg",
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
                sx={{ color: "rgb(255, 255, 255, .5)"/* , mr: 30 */}}
                key={dataItem.id}
                item
                onClick={() => setItemActive(dataItem.id)}
                className={`option ${
                  itemActive == dataItem.id ? "active" : null
                }`}
              >
                <Image src={imgCarousel1} /* width={250} height={250} *//>
              </Button>
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Swiper;
