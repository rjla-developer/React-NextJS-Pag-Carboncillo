import React from "react";

import '../../../assets/styles/css/services/socialMedia/service_social_media.css'

//Material UI:
import { Container } from "@mui/material";

//Components:
import ServiceSectionWelcome from "@/assets/components/services/ServiceSectionWelcome";
import ServiceSectionPackage from "@/assets/components/services/ServiceSectionPackage";
import ServiceSectionOurWork from "@/assets/components/services/ServiceSectionOurWork";

//Images:
import imgCarousel1 from "../../../assets/images/services/socialMedia/carousel/1.png";
import imgCarousel2 from "../../../assets/images/services/socialMedia/carousel/2.png";
import imgCarousel3 from "../../../assets/images/services/socialMedia/carousel/3.png";
import imgCarousel4 from "../../../assets/images/services/socialMedia/carousel/4.png";
import imgCarousel5 from "../../../assets/images/services/socialMedia/carousel/5.png";
import imgCarousel6 from "../../../assets/images/services/socialMedia/carousel/6.png";
import imgCarousel7 from "../../../assets/images/services/socialMedia/carousel/7.png";
import imgCarousel8 from "../../../assets/images/services/socialMedia/carousel/8.png";

function Servicio() {
  const dataSectionWelcome = {
    title: "Conecta con tu audiencia",
    description: "Llega a una comunidad participativa, trabajando en conjunto del contenido orgánico.",
  }

  const dataSectionPackage = [
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
  ];

  const dataSectionOurWorkSwiper = [
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

  return (
    <Container
      maxWidth={false}
      className="container-service-social-media"
    >
      <ServiceSectionWelcome dataSectionWelcome={dataSectionWelcome}/>
      <ServiceSectionPackage dataSectionPackage={dataSectionPackage} />
      <ServiceSectionOurWork dataSectionOurWorkSwiper={dataSectionOurWorkSwiper}/>
    </Container>
  );
}

export default Servicio;
