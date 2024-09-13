"use client";
import React, { useRef } from "react";

import "@/assets/styles/css/components/services/extra/extra.css";

//Material UI:
import { Box, Container, Typography } from "@mui/material";

//Components:
import ServiceSectionWelcome from "@/assets/components/services/ServiceSectionWelcome";
import ServiceSectionPackage from "@/assets/components/services/ServiceSectionPackage";

function Extra() {
    const containerSectionPackage = useRef(null);

    const dataSectionWelcome = {
        title: (
            <>
                NUNCA ESTá DE MÁS UN{" "}
                <Typography
                    sx={{ color: { xs: "#E04F93", md: "#16050A" } }}
                    variant="span"
                >
                    EXTRA
                </Typography>{" "}
            </>
        ),
        description: "Te brindamos la posibilidad de generar un mayor alcance.",
    };

    const dataSectionPackage = {
        title: "SERVICIOS EXTRA",
        colorCard: "#E04F93",
        dataPackage: [
            {
                id: 'price_1PyQS1HM5zitWxD6Fvr1mzRy',
                title: "Red extra $499",
                include: [
                    " Análisis de mercado.",
                    "Selección de palabras clave.",
                    "Creación de un anuncio.",
                    "2 imágenes para el anuncio.",
                    "Reporte de resultados.",
                ],
                restrictions: null,
                messageRestrictions: true,
            },
            {
                id: 'price_1PyQSZHM5zitWxD6OeWUrZX8',
                title: "Campaña extra $399 MXN",
                description: null,
                include: [
                    " Análisis de mercado.",
                    "Selección de palabras clave.",
                    "Creación de un anuncio.",
                    "Reporte de resultados.",
                ],
                restrictions: null,
                messageRestrictions: true,
            },
            {
                id: 'price_1PyQTfHM5zitWxD6GYt57BGO',
                title: "Servicio de revisión $499 MXN",
                description: null,
                include: [
                    "Creación de público especializado.",
                    "Propuesta de 2 diseños.",
                    "Copy in y copy out.",
                    "Recomendación de inversión.",
                    "Monitoreo del periodo de tiempo establecido.",
                    "Reporte de resultados.",
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
        <Container maxWidth={false} className="container-extra">
            <ServiceSectionWelcome
                dataSectionWelcome={dataSectionWelcome}
                onButtonClick={handleButtonClick}
            />

            <Box ref={containerSectionPackage}>
                <ServiceSectionPackage
                    dataSectionPackage={dataSectionPackage}
                />
            </Box>
        </Container>
    );
}

export default Extra;
