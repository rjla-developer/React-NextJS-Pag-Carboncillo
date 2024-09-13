"use client";
import React, { useRef } from "react";

import "@/assets/styles/css/components/services/socialMediaSuperior/service_social_media_superior.css";

//Material UI:
import { Box, Container, Typography } from "@mui/material";

//Components:
import ServiceSectionWelcome from "@/assets/components/services/ServiceSectionWelcome";
import ServiceSectionPackage from "@/assets/components/services/ServiceSectionPackage";
import ServiceSectionOurWork from "@/assets/components/services/ServiceSectionOurWork";

//Images:
import imgCarousel1 from "@/assets/images/components/services/socialMediaSuperior/carousel/10.png";
import imgCarousel2 from "@/assets/images/components/services/socialMediaSuperior/carousel/11.png";
import imgCarousel3 from "@/assets/images/components/services/socialMediaSuperior/carousel/12.png";
import imgCarousel4 from "@/assets/images/components/services/socialMediaSuperior/carousel/13.png";
import imgCarousel5 from "@/assets/images/components/services/socialMediaSuperior/carousel/14.png";
import imgCarousel6 from "@/assets/images/components/services/socialMediaSuperior/carousel/15.png";
import imgCarousel7 from "@/assets/images/components/services/socialMediaSuperior/carousel/16.png";
import imgCarousel8 from "@/assets/images/components/services/socialMediaSuperior/carousel/17.png";

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
        id: 'price_1PyQ1aHM5zitWxD696hzEGXS',
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
        id: "price_1PyQ2KHM5zitWxD6TAcco7qi",
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
        alt: "Una ala de pollo en una tabla de madera, con fuego de fondo y un texto que dice: Pollo de verdad.",
      },
      {
        id: 1,
        image: imgCarousel2,
        alt: "Un carro todo terreno en un camino de tierra, con un texto que dice: Diversión garantizada.",
      },
      {
        id: 2,
        image: imgCarousel3,
        alt: "Una hamburguesa gigantesca de muchas capas y unas alas dibujadas de fondo, con un texto que dice: Como caída del cielo.",
      },
      {
        id: 3,
        image: imgCarousel4,
        alt: "Un plato de ceviche con camarones, de fondo el mar y un texto que dice: A falta de amor CEVICHE.",
      },
      {
        id: 4,
        image: imgCarousel5,
        alt: "Un perfume color rojo y tapa negra, con una serpiente cuidando la botella, con un texto que dice: Poison hypnotic!",
      },
      {
        id: 5,
        image: imgCarousel6,
        alt: "Una chava feliz con muchas cajas al rededor y de fondo su casa nueva, con un texto que dice: ¡Te ayuda a encontrar tu nuevo hogar!",
      },
      {
        id: 6,
        image: imgCarousel7,
        alt: "La torre de pisa con un fondo de color rojo, con un texto que dice: ¡Vacaciones con todo incluido!",
      },
      {
        id: 7,
        image: imgCarousel8,
        alt: "Una chava contenta apuntando a la camara y un texto que dice: Maximiza el potencial de tus redes sociales. Desde $150",
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
