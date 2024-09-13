"use client";
import React, { useRef } from "react";

import "@/assets/styles/css/components/services/campaigns/campaigns.css";

//Material UI:
import { Box, Container, Typography } from "@mui/material";

//Components:
import ServiceSectionWelcome from "@/assets/components/services/ServiceSectionWelcome";
import ServiceSectionPackage from "@/assets/components/services/ServiceSectionPackage";
import ServiceSectionOurWork from "@/assets/components/services/ServiceSectionOurWork";

//Images:
import imgCarousel1 from "@/assets/images/components/services/campaigns/carousel/1.png";
import imgCarousel2 from "@/assets/images/components/services/campaigns/carousel/2.png";
import imgCarousel3 from "@/assets/images/components/services/campaigns/carousel/3.png";
import imgCarousel4 from "@/assets/images/components/services/campaigns/carousel/4.png";
import imgCarousel5 from "@/assets/images/components/services/campaigns/carousel/5.png";
import imgCarousel6 from "@/assets/images/components/services/campaigns/carousel/6.png";
import imgCarousel7 from "@/assets/images/components/services/campaigns/carousel/7.png";
import imgCarousel8 from "@/assets/images/components/services/campaigns/carousel/8.png";

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
        id: 'price_1PyQ34HM5zitWxD6GY6nsACj',
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
        id: 'price_1PyQ3XHM5zitWxD6kdnK52lv',
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
        id: 'price_1PyQ4AHM5zitWxD6Djs25vgJ',
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
        alt: "Una mujer sonriendo tocandose la cara, haciendo referencia a juventud y un texto a lado que dice 'Apariencia fresca y juvenil.'",
      },
      {
        id: 1,
        image: imgCarousel2,
        alt: "Doctora posando con un texto a lado que dice 'Cumplimos con los estándares de calidad!'",
      },
      {
        id: 2,
        image: imgCarousel3,
        alt: "Un modelo dental con una radiografía atras y un texto a lado que dice 'Estudios ortodónticos por solo $800. Contáctanos!'",
      },
      {
        id: 3,
        image: imgCarousel4,
        alt: "Una pizza brazileña con un fondo de ladrillos negros y una etiqueta con el costo de su precio que dice: A solo $125",
      },
      {
        id: 4,
        image: imgCarousel5,
        alt: "Una chica con ropa deportista y un texto a lado que dice: Entrena con nosotros! Combina movimiento y fuerza, al mejor ritmo.",
      },
      {
        id: 5,
        image: imgCarousel6,
        alt: "Una mujer embarazada con pose de boxeadora, ropa color rosa y un moño color rosa, un texto a lado que dice 'Tu salud mamaria, está en nuestras manos! Agenda tu cita",
      },
      {
        id: 6,
        image: imgCarousel7,
        alt: "Un chavo feliz apuntando a un texto que dice 'Gestionamos hasta 6 redes sociales.'",
      },
      {
        id: 7,
        image: imgCarousel8,
        alt: "Un frasco de mantequilla de mani, en un fondo de color amarillo y un texto que dice 'Intenso sabor'",
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
