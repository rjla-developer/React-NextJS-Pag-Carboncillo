import React from "react";

//CSS:
import "@/assets/styles/css/components/services/websites/website-section-carousels/website-section-carousels.css";

//Material UI:
import { Box, Container, Grid, Typography } from "@mui/material";

//Next:
import Image from "next/image";

//Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

//Import Swiper styles
import "swiper/css";

//Images:
import imgLaptopMockup from "@/assets/images/components/services/websites/laptop/laptop-mockup.png";
import imgSmartphoneMockup from "@/assets/images/components/services/websites/smartphone/smartphone-mockup.png";
import imgWebsiteAerolineaLaptop from "@/assets/images/components/services/websites/laptop/carousel-laptop/aerolinea-laptop.png";
import imgWebsiteAerolineaMobile from "@/assets/images/components/services/websites/smartphone/carousel-smartphone/aerolinea-smartphone.png";
import imgWebsiteElectronicaLaptop from "@/assets/images/components/services/websites/laptop/carousel-laptop/electronica-laptop.png";
import imgWebsiteElectronicaMobile from "@/assets/images/components/services/websites/smartphone/carousel-smartphone/electronica-smartphone.png";
import imgWebsiteJuegosLaptop from "@/assets/images/components/services/websites/laptop/carousel-laptop/juegos-vortice-laptop.png";
import imgWebsiteJuegosMobile from "@/assets/images/components/services/websites/smartphone/carousel-smartphone/juegos-vortice-smartphone.png";

function WebsiteSectionCarousels() {
    const dataSectionOurWork = {
        title: "Nuestros proyectos sitio web",
        dataLaptopCarousel: [
            {
                id: 0,
                image: imgWebsiteAerolineaLaptop,
                alt: "Diseño de una página web de una aerolinea",
            },
            {
                id: 1,
                image: imgWebsiteElectronicaLaptop,
                alt: "Diseño de una página web de una tienda de electrónica",
            },
            {
                id: 2,
                image: imgWebsiteJuegosLaptop,
                alt: "Diseño de una página web de una tienda de videojuegos",
            },
        ],
        dataSmartphoneCarousel: [
            {
                id: 0,
                image: imgWebsiteAerolineaMobile,
                alt: "Diseño smartphone de una página web de una aerolinea",
            },
            {
                id: 1,
                image: imgWebsiteElectronicaMobile,
                alt: "Diseño smartphone de una página web de una tienda de electrónica",
            },
            {
                id: 2,
                image: imgWebsiteJuegosMobile,
                alt: "Diseño smartphone de una página web de una tienda de videojuegos",
            },
        ],
    };
    return (
        <Container
            sx={{
                pt: { xs: 0, md: 10 },
                pb: { xs: 8, md: 10 },
                /* backgroundColor: "green", */
            }}
        >
            <Box sx={{ color: "white" }}>
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
            </Box>
            <Grid container sx={{ mt: 8, display:"flex", justifyContent:"space-around" }}>
                <Grid item xs={10} md={2.9}>
                    <Box>
                        <Image
                            src={imgSmartphoneMockup}
                            alt="Smarthphone mockup"
                            className="img-smarthphone-mockup"
                        />
                        <Swiper
                            className="mySwiper"
                            loop={true}
                            autoplay={{
                                delay: 4500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                        >
                            {dataSectionOurWork.dataSmartphoneCarousel.map(
                                (item) => (
                                    <SwiperSlide key={item.id}>
                                        <Image
                                            src={item.image}
                                            alt={item.alt}
                                            className="img-smartphone-mockup-carousel"
                                        />
                                    </SwiperSlide>
                                )
                            )}
                        </Swiper>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{mt: {xs: 8, md: 0}}}>
                    <Box>
                        <Image
                            src={imgLaptopMockup}
                            alt="Laptop mockup"
                            className="img-laptop-mockup"
                        />
                        <Swiper
                            className="mySwiper"
                            loop={true}
                            autoplay={{
                                delay: 4500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                        >
                            {dataSectionOurWork.dataLaptopCarousel.map(
                                (item) => (
                                    <SwiperSlide key={item.id}>
                                        <Image
                                            src={item.image}
                                            alt={item.alt}
                                            className="img-laptop-mockup-carousel"
                                        />
                                    </SwiperSlide>
                                )
                            )}
                        </Swiper>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default WebsiteSectionCarousels;
