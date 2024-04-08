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
    return (
        <Grid item xs={12} md={2.9} sx={{ mb: 4 }}>
            <Box
                sx={{
                    p: 2,
                    textAlign: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                    border: `1px solid ${hexToRgbA(colorCard, 0.4)}`,
                    boxShadow:
                        "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
                    borderRadius: 10,
                    height: "95%",
                    display: "flex", flexDirection:"column", alignItems: "center", justifyContent:"space-around"
                }}
            >
                <Typography sx={{ fontSize: 20, color: colorCard }}>
                    {dataItem.title}
                </Typography>
                <Typography sx={{ mt: 3 }}>Plan mensual incluye:</Typography>
                <List>
                    {dataItem.include.map((serviceInclude) => {
                        return (
                            <ListItem key={serviceInclude} sx={{ p: 0 }}>
                                <ListItemText
                                    sx={{ textAlign: "center" }}
                                    primary={`- ${serviceInclude}`}
                                />
                            </ListItem>
                        );
                    })}
                </List>

                {dataItem.restrictions ? (
                    <Typography>{dataItem.restrictions}</Typography>
                ) : null}

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
                >
                    Contratar
                </Button>
                {dataItem.messageRestrictions ? (
                    <Typography sx={{ mt: 1, fontSize: 10 }}>
                        * Aplican restricciones.
                    </Typography>
                ) : null}
                </Box>
        </Grid>
    );
}

export default CardPackage;
