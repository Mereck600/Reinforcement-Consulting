import React, { useEffect, useState } from "react";
import "../components/Home.css";
import PageTitle from "../components/PageTitle";
//import FeatureCard from "../components/FeatureCard";
import FeatureSection from "../components/FeatureSection";
import ThreeColumnFeature from "../components/ThreeColumns";
import { useTheme } from "@mui/material/styles";
import TestimonialSection from "../components/TestimonialSection";
//import VimeoEmbed from "../components/Vimeo";
import {
  Typography,
  Button,
  Container,
  Grid,
  Box,
  Paper,
} from "@mui/material";
//import StandardImageList from "../components/ImageList";
const REPLAY_MINUTES = 5; 

const Home = () => {
  const theme = useTheme(); 
  const [showIntro, setShowIntro] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const key = "homeAnimationLastPlayedAt";
    const now = Date.now();
    const last = parseInt(localStorage.getItem(key) || "0", 10);
    const shouldPlay = !last || now - last > REPLAY_MINUTES * 60 * 1000;

    if (shouldPlay) {
      setShowIntro(true);
      const timer = setTimeout(() => {
        setAnimationDone(true);
        setShowIntro(false);
        localStorage.setItem(key, String(Date.now()));
      }, 3000); // 3s animation

      return () => clearTimeout(timer);
    } else {
      setAnimationDone(true);
    }
  }, []);

  return (
    <Container maxWidth="lg" sx={{ minHeight: "80vh", py: 4 }}>
      <div className="home-container">
        {showIntro && (
          <div className="intro-logo-container">
            <img
              src="/assets/images/reinforcementLogo.png"
              alt="Logo"
              className="intro-logo"
            />
          </div>
        )}

        {animationDone && (
          <>
            {/* Hero / Page Title */}
            <Box textAlign="center" mb={6}>
              <PageTitle
                title="Reinforcement Consulting"
                description={
                  <>
                    <Typography variant="h5" gutterBottom>
                      Accessible Training for First Responders
                    </Typography>
                    <a
                      href="https://reinforcement911.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          mt: 2,
                          backgroundColor: "black",
                          color: "white",
                          "&:hover": { backgroundColor: "black", color: "white" },
                        }}
                      >
                        Donate
                      </Button>
                    </a>
                  </>
                }
              />
            </Box>

            
           <Grid item xs={12} sx={{marginBottom:4, }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Box sx={{ position: 'relative', width: '100%', maxWidth: 800, aspectRatio: '16 / 9' }}>
                <iframe
                    src="https://www.youtube.com/embed/EQ8AEeeb2no?rel=0&modestbranding=1&playsinline=1"
                    title="Test"
                    loading="lazy"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                />
                </Box>
            </Box>
            </Grid>





           
           
            {/* Mission Text + Feature Card */}
            <Grid container spacing={4} justifyContent="center">
            

              <Grid item xs={12} md={8}>
                <Paper
                  elevation={18}
                  sx={{
                    textAlign: { xs: "left", md: "center" },
                    padding: { xs: 2, md: 4 },
                    borderRadius: "25px",
                    backgroundColor: theme.palette.background.paper,
                  }}
                >
                  <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                    Reinforcement Consulting provides expert and accredited
                    consulting, training, and educational resources to create
                    and support effective Wellness Programs and Peer Support
                    Teams for those who serve our communities.
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                    Our mission is to support our first responders as their jobs
                    become increasingly challenging. By providing integrative
                    training and consultation, we equip first responders with
                    the knowledge and skills they need to work through Critical
                    Incidents and accumulated stress to live longer, happier,
                    healthier lives.
                  </Typography>
                  
                </Paper>
              </Grid>

              <FeatureSection />

              <Box sx={{ width: "100%", my: 6 }}>
                <ThreeColumnFeature />
              </Box>

              <Grid item xs={12} md={8} >
                <Paper
                  elevation={18}
                  sx={{
                    textAlign: { xs: "left", md: "center" },
                    padding: { xs: 2, md: 2 },
                    borderRadius: "20",
                    backgroundColor: theme.palette.background.paper,
                  }}
                >
                  
                  <Typography variant="h5" sx={{ mb: 2, lineHeight: 1.6 }}>
                   Support and Strength for all First Responders
                  </Typography>
                  
                </Paper>
              </Grid>
              <TestimonialSection />


              
            </Grid>
          </>
        )}
      </div>
    </Container>
  );
};

export default Home;
