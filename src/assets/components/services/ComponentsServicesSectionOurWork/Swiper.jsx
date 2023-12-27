"use client";
import React, { useState, useEffect } from "react";
import "../../../styles/css/services/components/swiper.css";

//NextJS:
import Image from "next/image";

//Material UI:
import { Grid, Box, Button } from "@mui/material";

const Swiper = ({ dataSectionOurWorkSwiper }) => {
  const [itemActive, setItemActive] = useState(2);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setItemActive((prevItem) => (prevItem + 1) % dataSectionOurWorkSwiper.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [dataSectionOurWorkSwiper]);

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
          {dataSectionOurWorkSwiper.map((dataItem) => {
            return (
              <Button
                sx={{ color: "rgb(255, 255, 255, .5)" }}
                key={dataItem.id}
                onClick={() => setItemActive(dataItem.id)}
                className={`option ${
                  itemActive == dataItem.id ? "active" : null
                }`}
              >
                <Image src={dataItem.image} alt={dataItem.alt} />
              </Button>
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Swiper;
