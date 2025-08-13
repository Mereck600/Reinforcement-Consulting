// Header.jsx
import React, { useState } from "react";
import {
  Box,
  Container,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const theme = useTheme();
  const isDesktop = useMediaQuery("(min-width:1200px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (e) => {
    if (e && e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) return;
    setDrawerOpen(open);
  };

  const navItems = [
    { text: "About", href: "/About" },
    { text: "Grants", href: "/Grants" },
    { text: "Consulting", href: "/Consulting" },
    { text: "Training", href: "/Training" },
    { text: "Resources", href: "/Resources" },
    { text: "Contact", href: "/Contact" },
    { text: "Donate", href: "https://reinforcement911.org/", external: true, special: true },
  ];

  const NavButton = ({ item }) => {
    const commonSx = {
      px: 1,
      py: 0.5,
      textTransform: "none",
      fontSize: { xs: "0.95rem", md: "1.2rem" }, // larger nav text
      fontWeight: 600,
      color: "white",
      "&:hover": { color: "#f0f0f0" },
    };

    const btn = (
      <Button
        variant={item.special ? "contained" : "text"}
        href={item.external ? undefined : item.href}
        sx={{
          ...commonSx,
          backgroundColor: item.special ? "black" : "transparent",
          "&:hover": item.special
            ? { backgroundColor: "black", color: "white" }
            : commonSx["&:hover"],
        }}
      >
        {item.text}
      </Button>
    );

    return item.external ? (
      <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
        {btn}
      </a>
    ) : (
      btn
    );
  };

  return (
    <Box
      component="header"
      sx={{
        backgroundColor: theme.palette.background.header,
        py: 2.5,
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        mb: 0.5,
      }}
    >
      <Container maxWidth="xl">
        {/* Row: left (logo+name), right (nav or menu) */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* LEFT: logo + brand name */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src= "/assets/images/InvertReLogoNoBG.png" //or use "/assets/images/reinforcementLogo.png" | "/assets/images/oldsite/rc-logo.png"
              alt="Reinforcement Consulting Logo"
              style={{ width: 70, height: "auto", marginRight: 12 }}
            />
            <Button
              variant="text"
              href="/"
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: { xs: "1.1rem", md: "1.25rem" }, // bigger brand text
                fontWeight: 700,
              }}
            >
              Reinforcement Consulting
            </Button>
          </Box>

          {/* RIGHT: push to right with ml:auto */}
          <Box sx={{ ml: "auto", display: "flex", alignItems: "center" }}>
            {isDesktop ? (
              <Stack direction="row" spacing={1}>
                {navItems.map((item) => (
                  <NavButton key={item.text} item={item} />
                ))}
              </Stack>
            ) : (
              <IconButton
                aria-label="Open navigation menu"
                onClick={toggleDrawer(true)}
                sx={{ color: "white" }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Box>
      </Container>

      {/* Drawer for mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { backgroundColor: "#2b2b2b", color: "white" } }}
      >
        <Box
          sx={{ width: 260 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.href}
                  target={item.external ? "_blank" : "_self"}
                  sx={{ color: "white" }}
                >
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{ fontSize: "1rem", fontWeight: 600 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Header;
