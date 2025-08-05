import React, { useState, useEffect } from "react";
import { Box, Grid, Button, Container, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const theme = useTheme();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1200);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1200);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = [
    { text: 'About', href: '/About' },
    { text: 'Grants', href: '/Grants' },
    { text: 'Consulting', href: '/Consulting' },
    { text: 'Training', href: '/Training' },
    { text: 'Resources', href: '/Resources' },
    { text: 'Contact', href: '/Contact' },
    { text: 'Donate', href: 'https://reinforcement911.org/', external: true, special: true },
  ];

  const NavButton = ({ item }) => (
    <Grid item display="flex" justifyContent="center" sx={{ padding: '0 4px' }}>
      {item.external ? (
        <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Button
            variant={item.special ? "contained" : "text"}
            color={item.special ? "black" : "dark"}
            sx={{
              backgroundColor: item.special ? 'black' : 'transparent',
              color: item.special ? 'white' : 'inherit',
              padding: '4px 8px',
              '&:hover': item.special ? { backgroundColor: 'black', color: 'white' } : {}
            }}
          >
            {item.text}
          </Button>
        </a>
      ) : (
        <Button
          variant="text"
          href={item.href}
          color="dark"
          sx={{ backgroundColor: 'transparent', padding: '4px 8px' }}
        >
          {item.text}
        </Button>
      )}
    </Grid>
  );

  return (
    <Box component="header" backgroundColor={theme.palette.primary.main} sx={{ padding: '20px 0', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px',marginBottom: theme.spacing(0.5) }}>
      <Container maxWidth="xl">
        <Grid container height="100%" alignItems="center" spacing={2}>
          {isDesktop ? (
            <Grid item xs={0} md={1}>
              <img src="/assets/images/reinforcementLogo.png" alt="Reinforcement Consulting Logo dog in a sheild." title={"Reinforcement Consulting Logo"}style={{ width: '90px', height: 'auto', marginLeft: '8px' }} />
            </Grid>
          ) : (<></>)}
          <Grid item xs={isDesktop ? 3 : 10} display="flex" justifyContent="start">
            <Button variant="text" href="/" color="dark" sx={{ backgroundColor: 'transparent', fontSize: '1rem', whiteSpace: 'nowrap' }}>Reinforcement Consulting </Button>
          </Grid>
          {isDesktop ? (
            <Grid container item xs={8} spacing={1} justifyContent="flex-end">
              {navItems.map((item, index) => (
                <NavButton key={index} item={item} />
              ))}
            </Grid>
          ) : (
            <Grid item xs={2} display="flex" justifyContent="flex-end">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </Container>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { backgroundColor: theme.palette.secondary.main }
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          backgroundColor={theme.palette.secondary.main}
        >
          <List>
            {navItems.map((item, index) => (
              <ListItem button key={index} component="a" href={item.href} target={item.external ? "_blank" : "_self"}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Header;
