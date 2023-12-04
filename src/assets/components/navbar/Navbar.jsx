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
        <AppBar position="fixed" color="transparent" sx={{boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"}}>
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
          <List sx={{ width: 200 }}>
            {dataMenu.map((itemMenu) => (
              <Link
                key={itemMenu.TitleMenu}
                href={itemMenu.Link}
                className="link-without-style"
              >
                <ListItem
                  button
                  color="inherit"
                  onClick={handleDrawerClose}
                  sx={{ color: "black", textDecoration: "none" }}
                >
                  <ListItemText primary={itemMenu.TitleMenu} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>

        {showParagraph ? (
          <Box
            className="menuServices"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Grid container spacing={2} className="py-3 mx-2">
              <Grid item xs={12}>
                <Typography variant="h5" className="fw-bold">
                  Servicios
                </Typography>
              </Grid>
              {dataServices.map((servicio, index) => (
                <Grid item xs={6} key={index} sx={{color: "white"}}>
                  <Link href={servicio.href} className="link-without-style">
                    <Box className="itemService p-2">
                      <Grid container spacing={1}>
                        {/* <Grid item>
                          <Image
                            src={servicio.iconSrc}
                            alt={`icono de ${servicio.title}`}
                            width={25}
                            height={25}
                          />
                        </Grid> */}
                        <Grid item>
                          <Typography variant="h6" className="mb-1">
                            {servicio.title}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Typography variant="body2" className="font-size-6 mb-0">
                        {servicio.description}
                      </Typography>
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
