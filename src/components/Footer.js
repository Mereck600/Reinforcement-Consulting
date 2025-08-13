import React from "react";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import MapIcon from "@mui/icons-material/Map";
import { Link } from "react-router-dom";

// Social Handlers
const handlePageChangeYoutube = () =>
  (window.location.href =
    "https://www.youtube.com/@Reinforcement911");
const handlePageChangeInsta = () =>
  (window.location.href =
    "https://www.instagram.com/reinforcement.consulting/");
const handlePageChangeX = () =>
  (window.location.href = "https://x.com/reinforcment911");
const handlePageChangeFB = () =>
  (window.location.href = "https://www.facebook.com/profile.php?id=100028285195100");
const handlePageChangeMaps = () =>
  (window.location.href =
    "https://www.google.com/maps/place/4560+Norway+Pines+Pl,+Hermantown,+MN+55811/@46.8387582,-92.2332507,17z");

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.paper, // ✅ light gray
        py: 5,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* Left Section: Logo / Social */}
          <Grid item xs={12} md={6} textAlign="center">
            <Typography variant="h6" gutterBottom>
              Reinforcement Consulting
            </Typography>
            <Box>
              <IconButton onClick={handlePageChangeFB}>
                <FacebookIcon />
              </IconButton>
              <IconButton onClick={handlePageChangeInsta}>
                <InstagramIcon />
              </IconButton>
              <IconButton onClick={handlePageChangeX}>
                <XIcon />
              </IconButton>
              <IconButton onClick={handlePageChangeYoutube}>
                <YouTubeIcon />
              </IconButton>
              <IconButton onClick={handlePageChangeMaps}>
                <MapIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Right Section: Navigation */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={6}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  Navigation
                </Typography>
                <Box display="flex" flexDirection="column" gap={1}>
                  <Link to="/Grants" style={{ color: "inherit", textDecoration: "none" }}>
                    Grants
                  </Link>
                  <Link to="/Consulting" style={{ color: "inherit", textDecoration: "none" }}>
                    Consulting
                  </Link>
                  <Link to="/Training" style={{ color: "inherit", textDecoration: "none" }}>
                    Training
                  </Link>
                  <Link to="/Resources" style={{ color: "inherit", textDecoration: "none" }}>
                    Resources
                  </Link>
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  Company
                </Typography>
                <Box display="flex" flexDirection="column" gap={1}>
                  <Link to="/About" style={{ color: "inherit", textDecoration: "none" }}>
                    About Us
                  </Link>
                  <Link to="/Contact" style={{ color: "inherit", textDecoration: "none" }}>
                    Contact
                  </Link>
                  <Link to="/privacy-policy" style={{ color: "inherit", textDecoration: "none" }}>
                    Privacy Policy
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
