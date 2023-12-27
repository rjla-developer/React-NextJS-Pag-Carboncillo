import React from "react";

//Material UI:
import { Box, Button, Container, Grid, Typography } from "@mui/material";

function HomeSectionResources() {
  const dataItemServices = [
    {
      id: "social-media",
      titleService: "Social media",
      descService:
        "Establece vínculos emocionales con tus clientes, adéntrate al nuevo mundo de la publicidad digital y mejora tu presencia de marca en la web.",
      backgroundColorItem: "background-yellow",
    },
    {
      id: "social-media-superior",
      titleService: "Redes premium",
      descService:
        "Si lo tuyo es una experiencia totalmente personalizada, este plan es perfecto para ti, genera experiencias únicas en tu audiencia.",
      backgroundColorItem: "background-green",
    },
    {
      id: "diseno-de-marca",
      titleService: "Diseño de marca",
      descService:
        "Dale una identidad definida y personalizada a tu marca, distingue y destaca tus cualidades empresariales por encima de la competencia.",
      backgroundColorItem: "background-purple",
    },
    {
      id: "sitios-web",
      titleService: "Sitios web",
      descService:
        "Construye tu espacio digital en internet y haz conocer tu marca con el mundo.",
      backgroundColorItem: "background-orange",
    },
    {
      id: "campanas-google",
      titleService: "Google Ads",
      descService:
        "Es hora de llevar tu negocio al siguiente nivel, conecta con tu audiencia mediante diversos tipos de publicidad en el buscador más utilizado.",
      backgroundColorItem: "background-blue",
    },
    {
      id: "campanas-facebook",
      titleService: "Facebook Ads",
      descService:
        "Un grupo de profesionales listos para ayudarte a conectar con tu audiencia.",
      backgroundColorItem: "background-rose",
    },
  ];
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 0, md: 5 }}
        rowSpacing={{ xs: 3, md: 5 }}
        py={{ xs: 5, md: 10 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12}>
          <Typography
            className="font-family-jaapokkisubtract"
            sx={{
              textTransform: "uppercase",
              color: "white",
              textAlign: "center",
              fontSize: { xs: 30, md: 50 },
              letterSpacing: 8
            }}
          >
            Recursos
          </Typography>
        </Grid>

        {dataItemServices.map((item) => (
          <Grid
            key={item.id}
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#292828",
                borderRadius: "20px",
                color: "white",
                padding: 5,
                height: "250px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography fontSize={22} textAlign={"center"}>
                  {item.titleService}
                </Typography>
                <Typography textAlign={"center"} mt={3} fontSize={18}>
                  {item.descService}
                </Typography>
                <Box
                  width={"100%"}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 4,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "black",
                      "&:hover": {
                        backgroundColor: "black",
                      },
                    }}
                  >
                    Conoce más
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomeSectionResources;
