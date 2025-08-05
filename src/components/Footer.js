import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
//import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import MapIcon from '@mui/icons-material/Map';
import { Link } from "react-router-dom";



const handlePageChangeYoutube = () => {
  window.location.href = 'https://www.youtube.com/@NorthlandPsychologicalServices';
};
const handlePageChangeInsta = () => {
  window.location.href = 'https://www.instagram.com/northlandpsychological?igsh=MWR2NHVuMm5xdGJtZA==';
};
const handlePageChangeX = () => {
  window.location.href = 'https://x.com/nrthlndpsych?s=21';
};
const handlePageChangeFB = () => {
  window.location.href = 'https://www.facebook.com/npsduluthmn';
};
const handlePageChangeMaps = () => {
  window.location.href = 'https://www.google.com/maps/place/4560+Norway+Pines+Pl,+Hermantown,+MN+55811/@46.8387582,-92.2332507,17z/data=!3m1!4b1!4m6!3m5!1s0x52afb4f6e80b83c7:0x54fc14999205adba!8m2!3d46.8387582!4d-92.2332507!16s%2Fg%2F11bw3_rj1w?entry=ttu';
};






const Footer = () => {
  const theme = useTheme();
  return (
    <Box component="footer" height="100%" width="100%" pt="5%" pb="2%" backgroundColor={theme.palette.white.main}>
      <Container>
        <Grid container>
          <Grid container xs={6} spacing={1} display="flex" justifyContent="center">
            <Grid item xs={12} >
             Reinforcement Consulting
            </Grid>
            <Grid container xs={12}>
              <Grid item>
                <IconButton>
                  <FacebookIcon onClick={handlePageChangeFB} />
                </IconButton>
              </Grid>
              {/* <Grid item >
                <IconButton>
                    <LinkedInIcon />
                </IconButton>
            </Grid> */}
              <Grid item >
                <IconButton>
                  <InstagramIcon onClick={handlePageChangeInsta} />
                </IconButton>
              </Grid>
              <Grid item >
                <IconButton>
                  <XIcon onClick={handlePageChangeX} />
                </IconButton>
              </Grid>
              <Grid item >

                <IconButton>
                  <YouTubeIcon onClick={handlePageChangeYoutube} />
                </IconButton>
              </Grid>
              <Grid item >
                <IconButton>
                  <MapIcon onClick={handlePageChangeMaps} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid container xs={6} spacing={1} display="flex" justifyContent="center">
            <Grid container xs={6} spacing={2}>
              <Grid item xs={12}>
                <strong>Navigation</strong>
              </Grid>
              <Grid item xs={12}>
              <Link to="/Grants" style={{ color: 'inherit', textDecoration: 'none' }}>Grants</Link>
              </Grid>
              <Grid item xs={12}>
              <Link to="/Consulting" style={{ color: 'inherit', textDecoration: 'none' }}>Consulting</Link>
              </Grid>
              <Grid item xs={12}>
                <Link to="/Training" style={{ color: 'inherit', textDecoration: 'none' }}>Services</Link>
              </Grid>
              <Grid item xs={12}>
                <Link to="/Resources" style={{ color: 'inherit', textDecoration: 'none' }}>Resources</Link>
              </Grid>
            </Grid>
            <Grid container xs={6} spacing={2}>
              <Grid item xs={12}>
              <Link to="/Home" style={{ color: 'inherit', textDecoration: 'none' }}><strong>About Us</strong></Link>
              </Grid>
              <Grid item xs={12}>
              <Link to="/About" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</Link>
              </Grid>
              <Grid item xs={12}>
              <Link to="/Contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</Link>
              </Grid>
              
              <Grid item xs={12}>
                <Link to="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};


export default Footer;
