"use client";
import React, { useRef } from "react";

import "../../../assets/styles/css/services/brandDesign/brand_design.css";

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

function BrandDesign() {
  const containerSectionPackage = useRef(null);

  const dataSectionWelcome = {
    title: (
      <>
        CREAMOS MARCAS{" "}
        <Typography sx={{ color: "#B45201" }} variant="span">
          EXTRAORDINARIAS
        </Typography>{" "}
      </>
    ),
    description: "Creamos una marca única e irrepetible.",
  };

  const dataSectionPackage = {
    title: "Diseño de marca",
    colorCard: "#B45201",
    dataPackage: [
      {
        title: "Diseño de marca $5,999 MXN",
        description: null,
        include: [
          "Análisis de mercado.",
          "Selección de palabras clave.",
          "Creación de un anuncio.",
          "Reporte de resultados.",
        ],
        restrictions: null,
        messageRestrictions: true,
      },
    ],
  };

  const dataSectionOurWork = {
    title: "Nuestros proyectos",
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
    <Container maxWidth={false} className="container-service-brand-design">
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

export default BrandDesign;
