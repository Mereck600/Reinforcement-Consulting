import React, { useEffect, useState } from "react";
import "../components/Home.css";
import PageTitle from '../components/PageTitle';
import { Typography, Button, Container, Grid, Box, Paper } from "@mui/material";

const Home = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("homeAnimationPlayed");

    if (!hasVisited) {
      setShowIntro(true);

      const timer = setTimeout(() => {
        setAnimationDone(true);
        setShowIntro(false);
        localStorage.setItem("homeAnimationPlayed", "true");
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setAnimationDone(true);
    }
  }, []);

  return (
    <Container maxWidth="lg" sx={{ minHeight: "80vh" }}>
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
          <Container
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            minHeight="60vh"  // adjust height to vertically center
          >
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
            {/*Fix this embedded link  */}
            <Grid item xs={12} marginBottom={2}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                
                    <iframe
                        width="600"
                        height="415"
                        src="https://www.youtube.com/watch?v=jfKfPfyJRdk"
                        title="Reinforcement Consulting Introduction"
                        loading="lazy"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    
                </Box>
             </Grid>
             <Grid item xs={12}>
                <Paper elevation={18} sx={{ textAlign: { xs: 'left', md: 'center' }, padding: { xs: 2, md: 4 }, borderRadius: "25px" }}>
                    <Typography variant="body1" sx={{ marginBottom: 2, lineHeight: 1.6 }}>
                        Reinforcement Consulting provides expert and accredited consulting, training, and educational resources to create and support effective Wellness Programs and Peer Support Teams for those who serve our communities.
                     </Typography>
                     <Typography variant="body1" sx={{ marginBottom: 2, lineHeight: 1.6 }}>
                     Our mission is to support our first responders as their jobs become increasingly challenging. By providing integrative training and consultation, we equip first responders with the knowledge and skills they need to work through Critical Incidents and accumulated stress to live longer, happier, healthier lives.
                     </Typography>
                      <Typography variant="body1" sx={{ marginBottom: 2, lineHeight: 1.6 }}>
                      The job is harder than it’s ever been. Invest in your number one resource: your people.
                     </Typography>
                     <Box 
                        component="ul" 
                        sx={{ 
                            pl: 3,               // padding left
                            listStylePosition: "inside",
                            margin: 0,
                        }}
                        >
                        <li>All-inclusive courses</li>
                        <li>POST Certified in Minnesota</li>
                        <li>Online Courses Accessible anywhere, anytime</li>
                        <li>Real Stories</li>
                        <li>Effective Skills</li>
                        <li>Successful Peer and Reintegration Teams</li>
                        <li>ReSet Retreats</li>
                    </Box>


                </Paper>
             </Grid>

          </Container>
        )}
      </div>
    </Container>
  );
};

export default Home;
