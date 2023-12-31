"use client";
import React, { useRef } from "react";

import "../../../assets/styles/css/services/campaigns/campaigns.css";

//Material UI:
import { Box, Container, Typography } from "@mui/material";

//Components:
import ServiceSectionWelcome from "@/assets/components/services/ServiceSectionWelcome";
import ServiceSectionPackage from "@/assets/components/services/ServiceSectionPackage";
import ServiceSectionOurWork from "@/assets/components/services/ServiceSectionOurWork";

//Images:
import imgCarousel1 from "../../../assets/images/services/campaigns/carousel/1.png";
import imgCarousel2 from "../../../assets/images/services/campaigns/carousel/2.png";
import imgCarousel3 from "../../../assets/images/services/campaigns/carousel/3.png";
import imgCarousel4 from "../../../assets/images/services/campaigns/carousel/4.png";
import imgCarousel5 from "../../../assets/images/services/campaigns/carousel/5.png";
import imgCarousel6 from "../../../assets/images/services/campaigns/carousel/6.png";
import imgCarousel7 from "../../../assets/images/services/campaigns/carousel/7.png";
import imgCarousel8 from "../../../assets/images/services/campaigns/carousel/8.png";

function Campaigns() {
  const containerSectionPackage = useRef(null);

  const dataSectionWelcome = {
    title: (
      <>
        HAZ QUE TE{" "}
        <Typography sx={{ color: "#7E34C9" }} variant="span">
          ENCUENTREN
        </Typography>{" "}
      </>
    ),
    description:
      "Aumenta las probabilidades de concretar tus ventas a través de Ads.",
  };

  const dataSectionPackage = {
    title: "GOOGLE Y FACEBOOK ADS",
    colorCard: "#7E34C9",
    dataPackage: [
      {
        title: "Google Ads Display $1,599 MXN",
        description: null,
        include: [
          "Análisis de mercado.",
          "Selección de palabras clave.",
          "Creación de un anuncio.",
          "2 imágenes para el anuncio.",
          "Reporte de resultados.",
        ],
        restrictions: null,
        messageRestrictions: true,
      },
      {
        title: "Google Search $649 MXN",
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
      {
        title: "Facebook Ads $649 MXN",
        description: null,
        include: [
          "Creación de público especializado.",
          "Propuesta de 2 diseños.",
          "Copy in y copy out.",
          "Recomendación de inversión.",
          "Monitoreo del periodo de tiempo establecido.",
          "Reporte de resultados.",
        ],
        restrictions: null,
        messageRestrictions: true,
      },
    ],
  };

  const dataSectionOurWork = {
    title: "PROYECTOS DE CAMPAÑA",
    dataSwiper: [
      {
        id: 0,
        image: imgCarousel1,
        alt: "Post de una canasta de fruta con frutas importadas de México",
      },
      {
        id: 1,
        image: imgCarousel2,
        alt: "Post para la festividad de hallowen de una Hamburguesa con apariencia deliciosa y de fondo telaraña",
      },
      {
        id: 2,
        image: imgCarousel3,
        alt: "Post de una persona meditando y mariposas cerca de él",
      },
      {
        id: 3,
        image: imgCarousel4,
        alt: "Post de una mujer con piel muy bien cuidada",
      },
      {
        id: 4,
        image: imgCarousel5,
        alt: "Post de una mujer pensando acerca de los emabarzos",
      },
      {
        id: 5,
        image: imgCarousel6,
        alt: "Post de una mujer deportista insitando a que vengan a entrenar con ella",
      },
      {
        id: 6,
        image: imgCarousel7,
        alt: "Post de una pizza con fuego y un mensaje que dice 'La mejor pizza de la ciudad",
      },
      {
        id: 7,
        image: imgCarousel8,
        alt: "Post de una persona sosteniendo unos lentes y un mensaje que dice 'Lentes con protección uv en $35",
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
    <Container maxWidth={false} className="container-service-campaigns">
      <ServiceSectionWelcome
        dataSectionWelcome={dataSectionWelcome}
        onButtonClick={handleButtonClick}
      />

      <Box ref={containerSectionPackage}>
        <ServiceSectionPackage dataSectionPackage={dataSectionPackage} />
      </Box>

      <ServiceSectionOurWork
        dataSectionOurWork={dataSectionOurWork}
      />
    </Container>
  );
}

export default Campaigns;
