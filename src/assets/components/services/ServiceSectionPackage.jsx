import React from "react";

//Material UI:
import { Box, Container, Grid, Typography } from "@mui/material";
import CardPackage from "./ComponentsServicesSectionPackage/CardPackage";

function ServiceSectionPackage({ dataSectionPackage }) {
  return (
    <Container sx={{ color: "white", py: 5 }} maxWidth={false}>
      <Grid container>
        <Grid item xs={12}>
          <Box>
            <Typography
              sx={{
                textTransform: "uppercase",
                textAlign: "center",
                fontSize: { xs: 30, lg: 45 },
                fontWeight: "900",
              }}
            >
              {dataSectionPackage.title}
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
            columnGap={1.5}
            sx={{
              mt: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {dataSectionPackage.dataPackage.map((dataItem) => {
              return (
                <CardPackage
                  key={dataItem.title}
                  dataItem={dataItem}
                  colorCard={dataSectionPackage.colorCard}
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ServiceSectionPackage;
