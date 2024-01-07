"use client";
import { useState } from "react";

//Material Ui
import {
  Grid,
  Button,
  Container,
  IconButton,
  Toolbar,
  Box,
  AppBar,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

//Next.js:
import Image from "next/image";
import Link from "next/link";

//React Icons:
import { IoMenu } from "react-icons/io5";
import { MdWeb } from "react-icons/md";
import { SiStylelint } from "react-icons/si";
import { LuPackagePlus } from "react-icons/lu";
import { MdOutlineCampaign } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { TbFileLike } from "react-icons/tb";

//CSS:
import "../../styles/css/navbar/navbar.css";

//React Icons:
import { BiSolidDownArrow } from "react-icons/bi";

//Images:
import imgCarboncillo from "../../images/global/logo/logo-compañia-de-marketing-digital.png";
import imgCarboncilloCompact from "../../images/global/logo/logo-compacto-compañia-de-marketing-digital.webp";

const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navConsultaOpen, setNavConsultaOpen] = useState(false);
  const [itemSected, setItemSected] = useState("Inicio");
  const [showParagraph, setShowParagraph] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMouseEnter = () => {
    setShowParagraph(true);
  };

  const handleMouseLeave = () => {
    setShowParagraph(false);
  };

  const pages = [
    { title: "Inicio", Link: "/" },
    { title: "Origen", Link: "/origen" },
    { title: "Servicios", button: handleMouseEnter },
    { title: "Contácto", Link: "/contacto" },
    { title: "Carrito", Link: "/carrito" },
  ];

  const pagesServices = [
    {
      Link: "/servicios/social-media",
      icon: <BiLike />,
      title: "Social media",
      styleName: "social-media"
    },
    {
      Link: "/servicios/social-media-superior",
      icon: <TbFileLike />,
      title: "Social media superior",
      styleName: "social-media-superior"
    },
    {
      Link: "/servicios/campanas",
      icon: <MdOutlineCampaign />,
      title: "Campañas",
      styleName: "campaigns"
    },
    {
      Link: "/servicios/diseno-de-marca",
      icon: <SiStylelint />,
      title: "Diseño de marca",
      styleName: "brand-design"
    },
    {
      Link: "/servicios/sitios-web",
      icon: <MdWeb />,
      title: "Sitios web",
      styleName: "websites"
    },
    {
      Link: "/servicios/extra",
      icon: <LuPackagePlus />,
      title: "Extra",
      styleName: "extra"
    },
  ];

  const drawer = (
    <Box
      sx={{ textAlign: "center", paddingTop: "1rem" }}
      className="container-drawer"
    >
      <Link href="/">
        <Image
          src={imgCarboncilloCompact}
          alt="Logo de la empresa Carboncillo"
          width={65}
          height={37}
          priority
        />
      </Link>
      <Divider
        variant="middle"
        light
        sx={{
          marginTop: ".8rem",
          marginBottom: ".3rem",
          backgroundColor: "white",
        }}
      />
      <List>
        {pages.map((item) => {
          if (item.title == "Servicios") {
            return (
              <Box key={item.title}>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ textAlign: "center", color: "white" }}
                    onClick={() => {
                      setNavConsultaOpen(!navConsultaOpen);
                    }}
                  >
                    <ListItemText primary={item.title} />
                    <BiSolidDownArrow />
                  </ListItemButton>
                </ListItem>
                {navConsultaOpen ? (
                  <List sx={{ backgroundColor: "rgb(30, 30, 30);" }}>
                    {pagesServices.map((itemConsulta) => (
                      <Link
                        href={itemConsulta.Link}
                        key={itemConsulta.title}
                        className="opcNavbar"
                      >
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{ textAlign: "center" }}
                            onClick={handleDrawerToggle}
                          >
                            <ListItemText primary={itemConsulta.title} />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                ) : null}
              </Box>
            );
          }
          return (
            <Link href={item.Link} key={item.title} className="opcNavbar">
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ textAlign: "center" }}
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const IconBtn = ({ styleName, iconId, label }) => {
    return (
      <Box className="container-item-submenu" onClick={handleMouseLeave}>
        <Button className={`icon-btn icon-btn--${styleName}`} type="button">
          <Box className="icon-btn__back"></Box>
          <Box className="icon-btn__front">
            <Box className="icon-btn__icon">{iconId}</Box>
          </Box>
        </Button>
        <Typography className="title-item-submenu" sx={{ mt: 2 }}>
          {label}
        </Typography>
      </Box>
    );
  };

  return (
    <>
      <AppBar
        position="static"
        className="navbar"
        sx={{
          backgroundColor: "transparent",
          paddingTop: 2,
          position: "absolute",
          zIndex: 1000,
          boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
        }}
      >
        <Container maxWidth={"xl"}>
          <Toolbar sx={{ py: { xs: 1, md: 2 } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{
                fontSize: 40,
                color: "white",
                display: { xs: "flex", md: "none" },
                mr: "auto",
              }}
            >
              <IoMenu />
            </IconButton>

            <nav>
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
                sx={{
                  display: { xs: "block", md: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                    backgroundColor: "black",
                  },
                }}
              >
                {drawer}
              </Drawer>
            </nav>

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
              {pages.map((page) => (
                // eslint-disable-next-line react/jsx-key
                <Grid item key={page.title}>
                  {page.title == "Servicios" ? (
                    <Button
                      className={`opcNavbar  ${
                        itemSected == page.title ? "opcNavbar-active" : null
                      } `}
                      aria-haspopup="true"
                      onMouseEnter={page.button}
                      /* onClick={() => handleMouseEnter()} */
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        textTransform: "uppercase",
                      }}
                    >
                      <>
                        <Typography variant="span" sx={{ mr: 1 }}>
                          {page.title}{" "}
                        </Typography>{" "}
                        <BiSolidDownArrow />
                      </>
                    </Button>
                  ) : (
                    <Link className="link-stop-style" href={page.Link}>
                      <Button
                        className={`opcNavbar  ${
                          itemSected == page.title ? "opcNavbar-active" : null
                        } `}
                        sx={{
                          my: 2,
                          color: "white",
                          display: "block",
                          textTransform: "uppercase",
                        }}
                        onClick={() => {
                          setItemSected(page.title);
                        }}
                      >
                        {page.title}
                      </Button>
                    </Link>
                  )}
                </Grid>
              ))}
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
        </Container>
      </AppBar>

      {showParagraph ? (
        <Box
          className="menuServices"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{mb: 1}}>
              <Typography variant="h5">Servicios</Typography>
            </Grid>
            {pagesServices.map((servicio) => (
              <Grid
                item
                xs={4}
                key={servicio.title}
                sx={{ color: "white", mt: 2 }}
              >
                <Link href={servicio.Link} className="link-stop-style">
                  <IconBtn
                    styleName={servicio.styleName}
                    iconId={servicio.icon}
                    label={servicio.title}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : null}
    </>
  );
}
export default Navbar;
