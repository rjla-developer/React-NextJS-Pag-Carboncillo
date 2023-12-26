import React from "react";

//Material UI:
import { Box, Container, Grid, Typography } from "@mui/material";
import CardPackage from "./ComponentsServicesSectionPackage/CardPackage";

function ServiceSectionPackage() {
  const dataPackages = [
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

  return (
    <Container sx={{ color: "white", py: 5 }}>
      <Grid container >
        <Grid item xs={12}>
          <Box>
            <Typography
              sx={{
                textTransform: "uppercase",
                textAlign: "center",
                fontSize: { xs: 30, lg: 40 },
              }}
            >
              Planes básicos
            </Typography>
            <Typography sx={{ textAlign: "center", mt: 2 }}>
              Tenemos para ti una gran variedad de soluciones profesionales,
              para lograr tus objetivos de venta.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            columnGap={3}
            sx={{
              mt: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {dataPackages.map((dataItem) => {
              return <CardPackage key={dataItem.id} dataItem={dataItem} />;
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ServiceSectionPackage;
