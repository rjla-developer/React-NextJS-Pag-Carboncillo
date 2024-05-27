import React from "react";

//Material UI:
import { Box, Container, Grid, Typography } from "@mui/material";

//React icons:
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

function Footer() {
  return (
    <Container>
      <Grid container sx={{ color: "white", py: { xs: 3, md: 6 } }}>
        <Grid item xs={12} md={3} /* display={{ xs: "none", md: "flex" }} */>
          <Box>
            <Typography
              textAlign={"center"}
              sx={{ color: "#56BDCA", fontSize: 25 }}
            >
              Información
            </Typography>
            <Typography textAlign={"center"}>¿Quiénes somos?</Typography>
            <Typography textAlign={"center"}>Clientes</Typography>
            <Typography textAlign={"center"}>Servicios</Typography>
            <Typography textAlign={"center"}>Colección</Typography>
          </Box>
        </Grid>

        <Grid item mt={3} xs={12} md={3} /* display={{ xs: "none", md: "flex" }} */>
          <Box>
            <Typography
              textAlign={"center"}
              sx={{ color: "#56BDCA", fontSize: 25 }}
            >
              Ayuda
            </Typography>
            <Typography textAlign={"center"}>Preguntas frecuentes</Typography>
            <Typography textAlign={"center"}>Opciones de pago</Typography>
          </Box>
        </Grid>

        <Grid item mt={3} xs={12} md={3}>
          <Box>
            <Typography
              textAlign={"center"}
              sx={{ color: "#56BDCA", fontSize: 25 }}
            >
              Links rápidos
            </Typography>
            <Typography textAlign={"center"}>Términos y condiciones</Typography>
            <Typography textAlign={"center"}>
              Politicas de privacidad
            </Typography>
          </Box>
        </Grid>

        <Grid item mt={3} xs={12} md={3}>
          <Box>
            <Typography
              sx={{ color: "#56BDCA", fontSize: 25, textAlign: "center" }}
            >
              Redes Sociales
            </Typography>
            <Box
              fontSize={25}
              gap={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              width={"100%"}
              sx={{ mt: 1 }}
            >
              <Link
                href="https://www.facebook.com/agenciacarboncillo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box sx={{ color: "white" }}>
                  <FaFacebookF />
                </Box>
              </Link>

              <Link
                href="https://www.instagram.com/c_arboncillo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box sx={{ color: "white" }}>
                  <BsInstagram />
                </Box>
              </Link>

              <Link
                href="https://api.whatsapp.com/send?phone=7772066610&text=Me%20interesan%20informes"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Box sx={{ color: "white" }}>
                  <BsWhatsapp />
                </Box>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
