import React from "react";

//Material UI:
import { Box, Container, Grid, Typography } from "@mui/material";

//Components:
import CardPackage from "./ComponentsServicesSectionPackage/CardPackage";

function ServiceSectionPackage({ dataSectionPackage }) {
    return (
        <Container
            sx={{ color: "white", py: 5, mb: { xs: 35, md: 6 } }}
            maxWidth={false}
        >
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
                            {dataSectionPackage.description
                                ? dataSectionPackage.description
                                : "Tenemos para ti una gran variedad de soluciones profesionales, para lograr tus objetivos de venta."}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Grid
                        container
                        gap={2.5}
                        sx={{
                            mt: 5,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: {xs: "25%", md: "50%", xl: "80%"},
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
