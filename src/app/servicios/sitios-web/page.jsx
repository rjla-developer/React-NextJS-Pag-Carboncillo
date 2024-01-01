"use client";
import React, { useRef } from "react";

import "../../../assets/styles/css/services/websites/websites.css";

//Material UI:
import { Box, Container, Typography } from "@mui/material";

//Components:
import ServiceSectionWelcome from "@/assets/components/services/ServiceSectionWelcome";
import ServiceSectionPackage from "@/assets/components/services/ServiceSectionPackage";
import ServiceSectionOurWork from "@/assets/components/services/ServiceSectionOurWork";

//Images:
import imgCarousel1 from "../../../assets/images/services/brandDesign/carousel/1.jpg";
import imgCarousel2 from "../../../assets/images/services/brandDesign/carousel/2.jpg";
import imgCarousel3 from "../../../assets/images/services/brandDesign/carousel/3.jpg";
import imgCarousel4 from "../../../assets/images/services/brandDesign/carousel/4.jpg";
import imgCarousel5 from "../../../assets/images/services/brandDesign/carousel/5.jpg";
import imgCarousel6 from "../../../assets/images/services/brandDesign/carousel/6.jpg";
import imgCarousel7 from "../../../assets/images/services/brandDesign/carousel/7.jpg";

function Website() {
  const containerSectionPackage = useRef(null);

  const dataSectionWelcome = {
    title: (
      <>
        WEBSITE SÓLIDOS A LA{" "}
        <Typography sx={{ color: "#903B0B" }} variant="span">
        MEDIDA
        </Typography>{" "}
      </>
    ),
    description: "Creamos una marca única e irrepetible.",
  };

  const dataSectionPackage = {
    title: "PLANES WEB",
    colorCard: "#B45201",
    dataPackage: [
      {
        title: "Landing Page $4,999 MXN",
        description:
          "Página web diseñada específicamente, para convertir visitantes en leads.",
        include: [
          "Página web diseñada específicamente, para convertir visitantes en leads.",
        ],
        restrictions: null,
        messageRestrictions: true,
      },
      {
        title: "Informativo $8,999 MXN",
        description:
          "Ideal para convertir y proporcionar la esencia informativa de tu marca.",
        include: [
          'Página web diseñada específicamente, para convertir visitantes en leads.'
        ],
        restrictions: null,
        messageRestrictions: true,
      },
      {
        title: "Silver $14,999 MXN",
        description:
          "La herramienta perfecta, para llevar tus servicios o productos a las manos de los consumidores.",
        include: [
          "Página web diseñada específicamente, para convertir visitantes en leads."
        ],
        restrictions: null,
        messageRestrictions: true,
      },
      {
        title: "Golden $17,999 MXN",
        description:
          "La más completa. Abierto al público las 24 hrs. Sin limitaciones geográficas. Gestión sencilla y rápida. Reduce gastos.",
        include: [
          "Página web diseñada específicamente, para convertir visitantes en leads."
        ],
        restrictions: null,
        messageRestrictions: true,
      },
    ],
  };

  const dataSectionOurWork = {
    title: "Nuestros proyectos sitio web",
    dataSwiper: [
      {
        id: 0,
        image: imgCarousel1,
        alt: "",
      },
      {
        id: 1,
        image: imgCarousel2,
        alt: "",
      },
      {
        id: 2,
        image: imgCarousel3,
        alt: "",
      },
      {
        id: 3,
        image: imgCarousel4,
        alt: "",
      },
      {
        id: 4,
        image: imgCarousel5,
        alt: "",
      },
      {
        id: 5,
        image: imgCarousel6,
        alt: "",
      },
      {
        id: 6,
        image: imgCarousel7,
        alt: "",
      },
    ],
  };

  const handleButtonClick = () => {
    containerSectionPackage.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });

    const currentScrollTop = window.scrollY;
    const containerTop =
      containerSectionPackage.current.getBoundingClientRect().top +
      currentScrollTop;
    window.scrollTo({
      top: containerTop - 50,
      behavior: "smooth",
    });
  };

  return (
    <Container maxWidth={false} className="container-service-website">
      <ServiceSectionWelcome
        dataSectionWelcome={dataSectionWelcome}
        onButtonClick={handleButtonClick}
      />

      <Box ref={containerSectionPackage}>
        <ServiceSectionPackage dataSectionPackage={dataSectionPackage} />
      </Box>

      <ServiceSectionOurWork dataSectionOurWork={dataSectionOurWork} />
    </Container>
  );
}

export default Website;
