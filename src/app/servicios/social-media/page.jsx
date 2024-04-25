"use client";
import React, { useRef } from "react";

import "@/assets/styles/css/components/services/socialMedia/service_social_media.css";

//Material UI:
import { Box, Container, Typography } from "@mui/material";

//Components:
import ServiceSectionWelcome from "@/assets/components/services/ServiceSectionWelcome";
import ServiceSectionPackage from "@/assets/components/services/ServiceSectionPackage";
import ServiceSectionOurWork from "@/assets/components/services/ServiceSectionOurWork";

//Images:
import imgCarousel1 from "@/assets/images/services/socialMedia/carousel/1.png";
import imgCarousel2 from "@/assets/images/services/socialMedia/carousel/2.png";
import imgCarousel3 from "@/assets/images/services/socialMedia/carousel/3.png";
import imgCarousel4 from "@/assets/images/services/socialMedia/carousel/4.png";
import imgCarousel5 from "@/assets/images/services/socialMedia/carousel/5.png";
import imgCarousel6 from "@/assets/images/services/socialMedia/carousel/6.png";
import imgCarousel7 from "@/assets/images/services/socialMedia/carousel/7.png";
import imgCarousel8 from "@/assets/images/services/socialMedia/carousel/8.png";

function SocialMedia() {
  const containerSectionPackage = useRef(null);

  const dataSectionWelcome = {
    title: (
      <>
        <Typography sx={{ color: "#CF9A07" }} variant="span">
          Conecta{" "}
        </Typography>{" "}
        con tu audiencia
      </>
    ),
    description:
      "Llega a una comunidad participativa, trabajando en conjunto del contenido orgánico.",
  };

  const dataSectionPackage = {
    title: "Planes básicos",
    colorCard: "#CF9A07",
    dataPackage: [
      {
        id: 1,
        title: "Elemental $1,499 MXN",
        description: null,
        include: [
          "1 community manager asignado.",
          "1 propuesta de campaña.",
          "5 post por semana.",
          "1 red social.",
          "Respuestas predeterminadas.",
        ],
        restrictions:
          "(En caso de que la red social de su predilección sea Facebook).",
        messageRestrictions: true,
      },
      {
        id: 2,
        title: "Estándar $1,999 MXN",
        description: null,
        include: [
          "1 community manager asignado.",
          "1 propuesta de campaña.",
          "5 post por semana.",
          "2 redes sociales.",
          "Respuestas predeterminadas.",
        ],
        restrictions:
          "(En caso de que la red social de su predilección sea Facebook).",
        messageRestrictions: true,
      },
      {
        id: 3,
        title: "Completo $2,499 MXN",
        description: null,
        include: [
          "1 community manager asignado.",
          "2 propuestas de campaña.",
          "5 post por semana.",
          "4 redes sociales.",
          "Respuestas predeterminadas.",
        ],
        restrictions:
          "(En caso de que la red social de su predilección sea Facebook).",
        messageRestrictions: true,
      },
    ],
  };

  const dataSectionOurWork = {
    title: "PROYECTOS BÁSICOS",
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
    <Container maxWidth={false} className="container-service-social-media">
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

export default SocialMedia;
