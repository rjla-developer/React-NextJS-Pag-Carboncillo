import React from "react";

import '../../../assets/styles/css/services/socialMedia/service_social_media.css'

//Material UI:
import { Container } from "@mui/material";

//Components:
import ServiceSectionWelcome from "@/assets/components/services/ServiceSectionWelcome";

function Servicio() {
  return (
    <Container
      maxWidth={false}
      className="container-service-social-media"
    >
      <ServiceSectionWelcome />
    </Container>
  );
}

export default Servicio;
