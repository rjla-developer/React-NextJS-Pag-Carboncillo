import React from "react";

import '../../../assets/styles/css/services/socialMedia/service_social_media.css'

//Material UI:
import { Container } from "@mui/material";

//Components:
import ServiceSectionWelcome from "@/assets/components/services/ServiceSectionWelcome";
import ServiceSectionPackage from "@/assets/components/services/ServiceSectionPackage";

function Servicio() {
  return (
    <Container
      maxWidth={false}
      className="container-service-social-media"
    >
      <ServiceSectionWelcome />
      <ServiceSectionPackage />
    </Container>
  );
}

export default Servicio;
