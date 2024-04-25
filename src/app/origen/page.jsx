"use client";
import React, { useRef } from "react";

import "@/assets/styles/css/components/origin/origin.css";

//Material UI:
import { Box, Container, Grid, Typography } from "@mui/material";

//Components:
import ServiceSectionWelcome from "@/assets/components/services/ServiceSectionWelcome";

function Origin() {
  const containerSectionInformation = useRef(null);

  const dataSectionWelcome = {
    title: (
      <>
        TU ESTILO DE VIDA, ES{" "}
        <Typography sx={{ color: "#25A3DC" }} variant="span">
          NUESTRO MANTRA
        </Typography>{" "}
      </>
    ),
    description:
      "Construimos estrategias digitales que impulsen el crecimiento sustentable.",
  };

  const handleButtonClick = () => {
    containerSectionInformation.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });

    const currentScrollTop = window.scrollY;
    const containerTop =
      containerSectionInformation.current.getBoundingClientRect().top +
      currentScrollTop;
    window.scrollTo({
      top: containerTop - 50,
      behavior: "smooth",
    });
  };

  return (
    <Container maxWidth={false} className="container-origin" sx={{ pb: 8 }}>
      <ServiceSectionWelcome
        dataSectionWelcome={dataSectionWelcome}
        onButtonClick={handleButtonClick}
      />

      <Container
        maxWidth={false}
        ref={containerSectionInformation}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: {xs: 3, md: 5},
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: 5,
              }}
            >
              <Typography
                sx={{
                  color: "#25A3DC",
                  fontSize: 18,
                  fontWeight: "bold",
                  mb: 1,
                  textAlign: { xs: "center", md: "start" },
                }}
              >
                Filosofía
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  textAlign: { xs: "center", md: "start" },
                }}
              >
                Basamos nuestro trabajo en la cultura de la sociedad, es lo que
                nos inspira, lo que nos mueve, lo que nos rodea, años de
                experiencia regidos por un único objetivo, llevar a nuestros
                clientes más leales a tener una estrategia totalmente basada en
                esta nueva era digital. ¡Sé parte del nuevo mundo!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: {xs: 3, md: 5},
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: 5,
              }}
            >
              <Typography
                sx={{
                  color: "#25A3DC",
                  fontSize: 18,
                  fontWeight: "bold",
                  mb: 1,
                  textAlign: { xs: "center", md: "start" },
                }}
              >
                Nosotros
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  textAlign: { xs: "center", md: "start" },
                }}
              >
                Somos una agencia de marketing digital encargada de potenciar el
                crecimiento de tu negocio en las redes sociales, nuestro trabajo
                se basa en identificar las oportunidades publicitarias adecuadas
                para ti y desarrollar estrategias de marketing efectivas, con el
                fin de alcanzar los objetivos propuestos. ¡Eleva tu marca en el
                mundo digital!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                p: {xs: 3, md: 5},
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: "#25A3DC",
                    fontSize: 18,
                    fontWeight: "bold",
                    textAlign: "center",
                    mb: 1,
                  }}
                >
                  ¿Por qué elegirnos?
                </Typography>
                <Typography sx={{ color: "white", textAlign: "center" }}>
                  Al tratarse de Carboncillo, es la agencia indicada para lograr
                  el éxito. Nuestro equipo de expertos aplica tácticas y
                  estrategias comprobadas, para aumentar el tráfico orgánico y
                  las conversiones de tu empresa. El crecimiento orgánico y
                  alcanzar las primeras posiciones en internet no es algo que
                  suceda por casualidad, es el resultado de tener una agencia
                  con talento, conocimientos y experiencia trabajando contigo.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default Origin;
