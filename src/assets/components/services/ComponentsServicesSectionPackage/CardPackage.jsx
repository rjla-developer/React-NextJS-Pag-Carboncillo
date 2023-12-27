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

function CardPackage({dataItem}) {
  return (
    <Grid item xs={12} md={3.5}>
      <Box
        sx={{
          p: 2,
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: 10,
          mb:{xs: 6, md: 0}
        }}
      >
        <Typography sx={{ fontSize: 20, color: "rgb(207, 154, 7)" }}>
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
            backgroundColor: "rgb(207, 154, 7, 0.85)",
            mt: 2,
            px: 4,
            borderRadius: 25,
            "&:hover": { backgroundColor: "rgb(207, 154, 7)" },
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
