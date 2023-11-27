"use client";
import React, { useState } from "react";

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

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const dataMenu = [
    { TitleMenu: "INICIO", Link: "/" },
    { TitleMenu: "ORIGEN", Link: "/origen" },
    { TitleMenu: "SERVICIOS", Link: "/servicios" },
    { TitleMenu: "CONTÁCTO", Link: "/contacto" },
    { TitleMenu: "CARRITO", Link: "/carrito" },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        {/* App Bar */}
        <AppBar position="fixed" color="transparent">
          <Toolbar sx={{py:{xs: 1, md: 2}}}>
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
                  <Link key={itemMenu.TitleMenu} href={itemMenu.Link}>
                    <Button color="inherit" sx={{ color: "white" }}>
                      {itemMenu.TitleMenu}
                    </Button>
                  </Link>
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
          <List sx={{width: 200}}>
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
      </Box>
    </>
  );
}

export default Navbar;
