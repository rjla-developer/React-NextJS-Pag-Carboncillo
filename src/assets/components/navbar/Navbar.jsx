"use client";
import React, { useState, useEffect } from "react";

import "../../styles/css/navbar/navbar.css";

//Material UI:
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

// Next.js
import Image from "next/image";
import Link from "next/link";

//React Icons:
import { IoMenu } from "react-icons/io5";

//Images
import imgCarboncillo from "../../images/global/logo/logo-compañia-de-marketing-digital.png";
import imgCarboncilloCompact from "../../images/global/logo/logo-compacto-compañia-de-marketing-digital.webp";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleMouseEnter = () => {
    setShowParagraph(true);
  };

  const handleMouseLeave = () => {
    setShowParagraph(false);
  };

  const dataMenu = [
    { TitleMenu: "INICIO", Link: "/", button: null, button: null },
    { TitleMenu: "ORIGEN", Link: "/origen", button: null },
    { TitleMenu: "SERVICIOS", Link: null, button: handleMouseEnter },
    { TitleMenu: "CONTÁCTO", Link: "/contacto", button: null },
    { TitleMenu: "CARRITO", Link: "/carrito", button: null },
  ];

  const dataServices = [
    {
      href: "/servicios/social-media",
      iconSrc: null,
      title: "Social media",
      description: "Adéntrate en el nuevo mundo digital.",
    },
    {
      href: "/servicios/social-media-superior",
      iconSrc: null,
      title: "Social media superior",
      description: "Experiencia personalizada.",
    },
    {
      href: "/servicios/campanas",
      iconSrc: null,
      title: "Campañas",
      description: "Lleva tu negocio al siguiente nivel.",
    },
    {
      href: "/servicios/diseno-de-marca",
      iconSrc: null,
      title: "Diseño de marca",
      description: "Más que un logotipo.",
    },
    {
      href: "/servicios/sitios-web",
      iconSrc: null,
      title: "Sitios web",
      description: "Construimos tu espacio digital.",
    },
    {
      href: "/servicios/extra",
      iconSrc: null,
      title: "Extras",
      description: "Atento de lo que se viene.",
    },
  ];

  useEffect(() => {
    console.log(showParagraph);

    return () => {};
  }, [showParagraph]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        {/* App Bar */}
        <AppBar
          position="fixed"
          color="transparent"
          sx={{ boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)" }}
        >
          <Toolbar sx={{ py: { xs: 1, md: 2 } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
              sx={{
                fontSize: 40,
                color: "white",
                display: { xs: "flex", md: "none" },
                mr: "auto",
              }}
            >
              <IoMenu />
            </IconButton>

            <Link href="/">
              <Button
                color="inherit"
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
              >
                <Image
                  src={imgCarboncillo}
                  alt="Logo de la empresa Carboncillo"
                  width={240}
                  height={18}
                  priority
                />
              </Button>
              <Button
                color="inherit"
                sx={{
                  display: { xs: "flex", md: "none" },
                }}
              >
                <Image
                  src={imgCarboncilloCompact}
                  alt="Logo de la empresa Carboncillo"
                  width={65}
                  height={37}
                  priority
                />
              </Button>
            </Link>

            <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}>
              {dataMenu.map((itemMenu) => {
                return (
                  <Box key={itemMenu.TitleMenu}>
                    {itemMenu.button != null ? (
                      <Button
                        color="inherit"
                        onMouseEnter={itemMenu.button}
                        sx={{ color: "white" }}
                      >
                        {itemMenu.TitleMenu}
                      </Button>
                    ) : (
                      <Link href={itemMenu.Link}>
                        <Button color="inherit" sx={{ color: "white" }}>
                          {itemMenu.TitleMenu}
                        </Button>
                      </Link>
                    )}
                  </Box>
                );
              })}
            </Box>

            <Box
              sx={{
                fontSize: 40,
                color: "white",
                display: { xs: "flex", md: "none" },
                ml: "auto",
                visibility: "hidden",
              }}
            >
              he
            </Box>
          </Toolbar>
        </AppBar>

        {/* Drawer */}
        <Drawer
          variant="temporary"
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerClose}
        >
          <List sx={{ width: 250 }}>
            {dataMenu.map((itemMenu) => (
              <Box key={itemMenu.TitleMenu}>
                {itemMenu.Link != null ? (
                  <Link href={itemMenu.Link} className="link-without-style">
                    <ListItem
                      button
                      color="inherit"
                      onClick={handleDrawerClose}
                      sx={{ color: "black", textDecoration: "none" }}
                    >
                      <ListItemText primary={itemMenu.TitleMenu} />
                    </ListItem>
                  </Link>
                ) : (
                  <ListItem
                    button
                    color="inherit"
                    onClick={handleDrawerClose}
                    sx={{ color: "black", textDecoration: "none" }}
                  >
                    <ListItemText primary={itemMenu.TitleMenu} />
                  </ListItem>
                )}
              </Box>
            ))}
          </List>
        </Drawer>

        {showParagraph ? (
          <Box
            className="menuServices"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5">Servicios</Typography>
              </Grid>
              {dataServices.map((servicio) => (
                <Grid item xs={6} key={servicio.title} sx={{ color: "white" }}>
                  <Link href={servicio.href}>
                    <Box>
                      <Typography variant="h6">{servicio.title}</Typography>
                    </Box>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;
