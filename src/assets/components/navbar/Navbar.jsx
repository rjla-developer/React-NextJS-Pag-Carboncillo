"use client";
import { useState } from "react";

//Material Ui
import {
  MenuItem,
  Grid,
  Button,
  Container,
  Menu,
  IconButton,
  Toolbar,
  Box,
  AppBar,
  Fade,
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

//CSS:
import "../../styles/css/navbar/navbar.css";

//React Icons:
import { BiSolidDownArrow } from "react-icons/bi";

//Images:
import imgCarboncillo from "../../images/global/logo/logo-compañia-de-marketing-digital.png";
import imgCarboncilloCompact from "../../images/global/logo/logo-compacto-compañia-de-marketing-digital.webp";

const drawerWidth = 240;

const pages = [
  { title: "Inicio", Link: "/" },
  { title: "Origen", Link: "/origen" },
  { title: "Servicios", button: null },
  { title: "Contácto", Link: "/contacto" },
  { title: "Carrito", Link: "/carrito" },
];

const pagesServices = [
  {
    Link: "/servicios/social-media",
    iconSrc: null,
    title: "Social media",
    description: "Adéntrate en el nuevo mundo digital.",
  },
  {
    Link: "/servicios/social-media-superior",
    iconSrc: null,
    title: "Social media superior",
    description: "Experiencia personalizada.",
  },
  {
    Link: "/servicios/campanas",
    iconSrc: null,
    title: "Campañas",
    description: "Lleva tu negocio al siguiente nivel.",
  },
  {
    Link: "/servicios/diseno-de-marca",
    iconSrc: null,
    title: "Diseño de marca",
    description: "Más que un logotipo.",
  },
  {
    Link: "/servicios/sitios-web",
    iconSrc: null,
    title: "Sitios web",
    description: "Construimos tu espacio digital.",
  },
  {
    Link: "/servicios/extra",
    iconSrc: null,
    title: "Extras",
    description: "Atento de lo que se viene.",
  },
];

function Navbar(props) {
  const { window } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navConsultaOpen, setNavConsultaOpen] = useState(false);
  const [itemSected, setItemSected] = useState("Inicio");
  const [itemSubMenuSelected, setItemSubMenuSelected] = useState("null");

  //Botón Servicios
  const open = Boolean(anchorEl);
  const handleClick = (event, title) => {
    setAnchorEl(event.currentTarget);
    setItemSected(title);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

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
        sx={{ marginTop: ".8rem", marginBottom: ".3rem", backgroundColor: "white" }}
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
                  <List sx={{backgroundColor: "rgb(30, 30, 30);"}}>
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

  return (
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
                  <>
                    <Button
                      className={`opcNavbar  ${
                        itemSected == page.title ? "opcNavbar-active" : null
                      } `}
                      sx={{ my: 2, color: "white", display: "block", textTransform: "uppercase" }}
                      aria-controls={open ? "fade-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={(e) => handleClick(e, page.title)}
                    >
                      <>
                        {page.title} <BiSolidDownArrow />
                      </>
                    </Button>
                    <Menu
                      id="fade-menu"
                      MenuListProps={{
                        "aria-labelledby": "fade-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      TransitionComponent={Fade}
                    >
                      {pagesServices.map((pagesServices) => (
                        <Link
                          href={pagesServices.Link}
                          key={pagesServices.title}
                          className="link-stop-style"
                        >
                          <MenuItem
                            className={`item-menu-consul ${
                              itemSubMenuSelected == pagesServices.title
                                ? "item-menu-consul-active"
                                : null
                            } `}
                            onClick={(e) => {
                              handleClose(e);
                              setItemSubMenuSelected(pagesServices.title);
                            }}
                          >
                            {pagesServices.title}
                          </MenuItem>
                        </Link>
                      ))}
                    </Menu>
                  </>
                ) : (
                  <Link className="link-stop-style" href={page.Link}>
                    <Button
                      className={`opcNavbar  ${
                        itemSected == page.title ? "opcNavbar-active" : null
                      } `}
                      sx={{ my: 2, color: "white", display: "block", textTransform: "uppercase" }}
                      onClick={() => {
                        setItemSected(page.title);
                        setItemSubMenuSelected("null");
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
  );
}
export default Navbar;
