import React from "react";

//Material UI:
import { Box, Container, Grid, Typography } from "@mui/material";

//Components:
import Swiper from "./ComponentsServicesSectionOurWork/Swiper";

function ServiceSectionOurWork({ dataSectionOurWork }) {
    return (
        <Container sx={{ pt: { xs: 0, md: 10 }, pb: { xs: 8, md: 10 } }}>
            <Grid container sx={{ color: "white" }}>
                <Grid item xs={12}>
                    <Box>
                        <Typography
                            sx={{
                                textTransform: "uppercase",
                                textAlign: "center",
                                fontSize: { xs: 25, lg: 40 },
                                fontWeight: "900",
                            }}
                        >
                            {dataSectionOurWork.title}
                        </Typography>
                        <Typography sx={{ textAlign: "center", mt: 2 }}>
                            ¡Da un vistazo a nuestro trabajo!
                        </Typography>

                        <Swiper
                            dataSectionOurWork={dataSectionOurWork.dataSwiper}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ServiceSectionOurWork;
