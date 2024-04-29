"use client";
import React, { useRef } from "react";

import "@/assets/styles/css/components/services/websites/websites.css";

//Material UI:
import { Box, Container, Typography } from "@mui/material";

//Components:
import ServiceSectionWelcome from "@/assets/components/services/ServiceSectionWelcome";
import ServiceSectionPackage from "@/assets/components/services/ServiceSectionPackage";
import WebsiteSectionCarousels from "@/assets/components/services/websites/website-section-carousels/WebsiteSectionCarousels";

function Website() {
    const containerSectionPackage = useRef(null);

    const dataSectionWelcome = {
        title: (
            <>
                WEBSITE SÓLIDOS A LA{" "}
                <Typography sx={{ color: "#c89d85" }} variant="span">
                    MEDIDA
                </Typography>{" "}
            </>
        ),
        description: "Creamos una marca única e irrepetible.",
    };

    const dataSectionPackage = {
        title: "PLANES WEB",
        colorCard: "#c89d85",
        dataPackage: [
            {
                title: "Landing Page $5,990 MXN",
                include: [
                    "*Único pago (posteriormente pagarás la renovación del hosting y mantenimiento de tu sitio:  $200 USD AL AÑO O $15 USD AL MES SOLO MANTENIMIENTO)",
                ],
                restrictions: null,
                messageRestrictions: true,
            },
            {
                title: "Informativo $8,999 MXN",
                include: [
                    "Página web diseñada específicamente, para convertir visitantes en leads.",
                ],
                restrictions: null,
                messageRestrictions: true,
            },
            {
                title: "Ecommerce a WhatsApp Económico $13,999 MXN",
                include: [
                    "Página web diseñada específicamente, para convertir visitantes en leads.",
                ],
                restrictions: null,
                messageRestrictions: true,
            },
            {
                title: "Ecommerce con Pasarela de Pago Económico $15,999 MXN",
                include: [
                    "Página web diseñada específicamente, para convertir visitantes en leads.",
                ],
                restrictions: null,
                messageRestrictions: true,
            },
        ],
    };

    const handleButtonClick = () => {
        containerSectionPackage.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
        });

        const currentScrollTop = window.scrollY;
        const containerTop =
            containerSectionPackage.current.getBoundingClientRect().top +
            currentScrollTop;
        window.scrollTo({
            top: containerTop - 50,
            behavior: "smooth",
        });
    };

    return (
        <Container maxWidth={false} className="container-service-website">
            <ServiceSectionWelcome
                dataSectionWelcome={dataSectionWelcome}
                onButtonClick={handleButtonClick}
            />

            <Box ref={containerSectionPackage}>
                <ServiceSectionPackage
                    dataSectionPackage={dataSectionPackage}
                />
            </Box>

            <WebsiteSectionCarousels />
        </Container>
    );
}

export default Website;
