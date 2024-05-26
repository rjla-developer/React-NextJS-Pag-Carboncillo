"use client";
import React, { useRef } from "react";

import "@/assets/styles/css/components/contact/contact.css";

//NextJS:
import Link from "next/link";

//Material UI:
import { Box, Container, Grid, Typography } from "@mui/material";

//Components:
import ServiceSectionWelcome from "@/assets/components/services/ServiceSectionWelcome";

function Contacto() {
  const containerSectionInformation = useRef(null);

  const dataSectionWelcome = {
    title: (
      <>
        <Typography sx={{ color: "#25A3DC" }} variant="span">
          Hola,
        </Typography>{" "}
        estamos para ti
      </>
    ),
    description: "¡Nos gustaría platicar contigo!",
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
    <Container maxWidth={false} className="container-contact" sx={{ pb: 8 }}>
      <ServiceSectionWelcome
        dataSectionWelcome={dataSectionWelcome}
        onButtonClick={handleButtonClick}
      />

      <Container ref={containerSectionInformation} sx={{mb: 5}}>
        <Typography sx={{ textAlign: "center", fontSize: {xs: 24, md: 60}, color: "white" }}>
          Un universo de posibilidades
        </Typography>
        <Typography
          sx={{ textAlign: "center", fontSize: 18, color: "white", mt: 3 }}
        >
          Escríbenos o llámanos, siempre estamos disponibles para ayudarte.{" "}
        </Typography>
        <Grid container sx={{ mt: {xs: 3, md: 5}, display: "flex", alignItems:"center", justifyContent:"center" }} spacing={2}>
          <Grid item xs={10} md={3}>
            <Link
              href="https://api.whatsapp.com/send?phone=7772066610&text=Me%20interesan%20informes"
              className="link-stop-style"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Box
                sx={{
                  p: { xs: 3, md: 3 },
                  backgroundColor: "rgba(50, 50, 50, 0.5)",
                  borderRadius: 5,
                }}
              >
                <Typography
                  sx={{
                    color: "#25A3DC",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  WhatsApp
                </Typography>
                <Typography sx={{ mt: 3, textAlign: "center" }}>
                  777 206 66 10
                </Typography>
              </Box>
            </Link>
          </Grid>

          <Grid item xs={10} md={3}>
            <Link
              href="https://www.facebook.com/agenciacarboncillo"
              target="_blank"
              className="link-stop-style"
              rel="noopener noreferrer"
            >
              <Box
                sx={{
                  p: { xs: 3, md: 3 },
                  backgroundColor: "rgba(50, 50, 50, 0.5)",
                  borderRadius: 5,
                }}
              >
                <Typography
                  sx={{
                    color: "#25A3DC",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Facebook
                </Typography>
                <Typography sx={{ mt: 3, textAlign: "center" }}>
                  @agenciacarboncillo
                </Typography>
              </Box>
            </Link>
          </Grid>

          <Grid item xs={10} md={3}>
            <Link
              href="https://www.instagram.com/c_arboncillo/"
              className="link-stop-style"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Box
                sx={{
                  p: { xs: 3, md: 3 },
                  backgroundColor: "rgba(50, 50, 50, 0.5)",
                  borderRadius: 5,
                }}
              >
                <Typography
                  sx={{
                    color: "#25A3DC",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Instagram
                </Typography>
                <Typography sx={{ mt: 3, textAlign: "center" }}>
                  @c_arboncillo
                </Typography>
              </Box>
            </Link>
          </Grid>

          <Grid item xs={10} md={3}>
            <Link
              href="mailto:carboncillomtk@gmail.com?subject=Me%20interesa%20informes"
              className="link-stop-style"
              rel="noopener noreferrer"
            >
              <Box
                sx={{
                  p: { xs: 3, md: 3 },
                  backgroundColor: "rgba(50, 50, 50, 0.5)",
                  borderRadius: 5,
                }}
              >
                <Typography
                  sx={{
                    color: "#25A3DC",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Correo
                </Typography>
                <Typography sx={{ mt: 3, textAlign: "center" }}>
                  carboncillomtk@gmail.com
                </Typography>
              </Box>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default Contacto;
