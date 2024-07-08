"use client";

import React from "react";

//Material UI:
import {
    Box,
    Button,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@mui/material";

function CardPackage({ dataItem, colorCard }) {
    function hexToRgbA(hex, alpha) {
        let c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split("");
            if (c.length === 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = "0x" + c.join("");
            return (
                "rgba(" +
                [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
                "," +
                alpha +
                ")"
            );
        }
        throw new Error("Bad Hex");
    }

    async function goToCheckout(priceId) {
        const res = await fetch("/checkout", {
            method: "POST",
            body: JSON.stringify({
                priceId,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        window.location.href = data.url;
    }

    return (
        <Grid item xs={12} md={5} lg={2.9} sx={{ mb: 4, height: "100%" }}>
            <Box
                sx={{
                    p: 2,
                    textAlign: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                    border: `1px solid ${hexToRgbA(colorCard, 0.4)}`,
                    boxShadow:
                        "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
                    borderRadius: 10,
                    height: "100%", //400
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                <Typography sx={{ fontSize: 20, color: colorCard }}>
                    {dataItem.title}
                </Typography>
                {dataItem.description ? (
                    <Typography sx={{ textAlign: "start", mx: 1.5, my: 2 }}>
                        {dataItem.description}
                    </Typography>
                ) : null}
                {dataItem.include ? (
                    <>
                        <Typography sx={{ mt: 3 }}>
                            Plan mensual incluye:
                        </Typography>
                        <List>
                            {dataItem.include?.map((serviceInclude) => {
                                return (
                                    <ListItem
                                        key={serviceInclude}
                                        sx={{ p: 0 }}
                                    >
                                        <ListItemText
                                            sx={{ textAlign: "center" }}
                                            primary={`- ${serviceInclude}`}
                                        />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </>
                ) : null}

                {dataItem.restrictions ? (
                    <Typography>{dataItem.restrictions}</Typography>
                ) : null}

                <Box>
                    <Button
                        sx={{
                            color: "black",
                            backgroundColor: colorCard,
                            opacity: "85%",
                            mt: 2,
                            px: 4,
                            borderRadius: 25,
                            "&:hover": {
                                backgroundColor: colorCard,
                                opacity: "100%",
                            },
                        }}
                        onClick={() => goToCheckout(dataItem.id)}
                    >
                        Contratar
                    </Button>
                    {dataItem.messageRestrictions ? (
                        <Typography sx={{ mt: 1, fontSize: 10 }}>
                            * Aplican restricciones.
                        </Typography>
                    ) : null}
                </Box>
            </Box>
        </Grid>
    );
}

export default CardPackage;
