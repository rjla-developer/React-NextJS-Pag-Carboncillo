"use client";
import React, { useRef } from "react";

import "../../../assets/styles/css/services/socialMediaSuperior/service_social_media_superior.css";

//Material UI:
import { Box, Container, Typography } from "@mui/material";

//Components:
import ServiceSectionWelcome from "@/assets/components/services/ServiceSectionWelcome";
import ServiceSectionPackage from "@/assets/components/services/ServiceSectionPackage";
import ServiceSectionOurWork from "@/assets/components/services/ServiceSectionOurWork";

//Images:
import imgCarousel1 from "../../../assets/images/services/socialMediaSuperior/carousel/10.png";
import imgCarousel2 from "../../../assets/images/services/socialMediaSuperior/carousel/11.png";
import imgCarousel3 from "../../../assets/images/services/socialMediaSuperior/carousel/12.png";
import imgCarousel4 from "../../../assets/images/services/socialMediaSuperior/carousel/13.png";
import imgCarousel5 from "../../../assets/images/services/socialMediaSuperior/carousel/14.png";
import imgCarousel6 from "../../../assets/images/services/socialMediaSuperior/carousel/15.png";
import imgCarousel7 from "../../../assets/images/services/socialMediaSuperior/carousel/16.png";
import imgCarousel8 from "../../../assets/images/services/socialMediaSuperior/carousel/17.png";

function SocialMediaSuperior() {
  const containerSectionPackage = useRef(null);

  const dataSectionWelcome = {
    title: "A la altura de tus expectativas",
    description: "Un servicio con los más altos estándares de calidad.",
  };

  const dataSectionPackage = {
    title: "Social media superior",
    colorCard: "#029769",
    dataPackage: [
      {
        id: 1,
        title: "Silver $2,499 MXN",
        description: null,
        include: [
          "1 community manager asignado.",
          "1 propuesta de campaña.",
          "4 post por semana.",
          "1 red social.",
          "Respuestas predeterminadas.",
        ],
        restrictions:
          "(En caso de que la red social de su predilección sea Facebook).",
        messageRestrictions: true,
      },
      {
        id: 2,
        title: "Gold $3,299 MXN",
        description: null,
        include: [
          "1 community manager asignado.",
          "1 propuesta de campaña.",
          "4 post por semana.",
          "2 redes sociales.",
          "Respuestas predeterminadas.",
        ],
        restrictions:
          "(En caso de que la red social de su predilección sea Facebook).",
        messageRestrictions: true,
      },
    ],
  };

  const dataSectionOurWork = {
    title: "PROYECTOS SUPERIORES",
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
      {
        id: 7,
        image: imgCarousel8,
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
    <Container
      maxWidth={false}
      className="container-service-social-media-superior"
    >
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

export default SocialMediaSuperior;
