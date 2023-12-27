import React from "react";

//Material UI:
import { Box, Container, Grid, Typography } from "@mui/material";
import CardPackage from "./ComponentsServicesSectionPackage/CardPackage";

function ServiceSectionPackage({dataSectionPackage}) {
  return (
    <Container sx={{ color: "white", py: 5 }}>
      <Grid container >
        <Grid item xs={12}>
          <Box>
            <Typography
              sx={{
                textTransform: "uppercase",
                textAlign: "center",
                fontSize: { xs: 30, lg: 45 },
                fontWeight: '900'
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
            {dataSectionPackage.map((dataItem) => {
              return <CardPackage key={dataItem.id} dataItem={dataItem} />;
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ServiceSectionPackage;
