import React from "react";
import "../components/Home.css";
import PageTitle from "../components/PageTitle";
import { useTheme } from "@mui/material/styles";
import UpcomingEvents from "../components/UpcomingEvents"
import CourseGrid from "../components/CourseGrid";


import {
  Typography,
  
  Container,
  Grid,
  Box,
  Paper,
} from "@mui/material";


export default function Training() {
     const theme = useTheme(); 
  return (
    //make this like northland clients page
    //wathc the videos on this page and see if we want to keep them 
     <Container maxWidth="lg" sx={{ minHeight: "80vh", py: 4 }}>
        <Box textAlign="center" mb={6}>
              <PageTitle
                title="Trainings"
                description={
                  <>
                    <Typography variant="h6" gutterBottom>
                     Prioritize Wellness to Drive Positive Outcomes 
                    </Typography>

                  </>
                }
                
              />
        </Box>
        
        <Grid
        container
        spacing={3}
        sx={{
          my: 4,
          //maxWidth: 1600,       // was 1200
          mx: "auto",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: 2,
              overflow: "hidden",
              "@supports not (aspect-ratio: 16/9)": {
                position: "relative",
                pt: "56.25%",
                "& > iframe": { position: "absolute", inset: 0, width: "100%", height: "100%" },
              },
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/TqWszgqO-t4?controls=0&modestbranding=1&rel=0&loop=1&playsinline=1"
              title="Crisis Care Part One"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", height: "100%", border: 0, display: "block" }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={12}>
          <Box
            sx={{
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: 2,
              overflow: "hidden",
              "@supports not (aspect-ratio: 16/9)": {
                position: "relative",
                pt: "56.25%",
                "& > iframe": { position: "absolute", inset: 0, width: "100%", height: "100%" },
              },
            }}
          >
            <iframe
              src="https://www.youtube-nocookie.com/embed/EQ8AEeeb2no?controls=0&modestbranding=1&rel=0&playsinline=1&loop=1"
              title="Crisis Care Part Two"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", height: "100%", border: 0, display: "block" }}
            />
          </Box>
        </Grid>
      </Grid>



          
    
        <Grid item xs={12} md={12}>
            <Paper
                elevation={18}
                sx={{
                textAlign: { xs: "left", md: "center" },
                padding: { xs: 2, md: 4 },
                borderRadius: "25px",
                backgroundColor: theme.palette.background.paper,    
                }}
            >
                <Typography variant="body1" sx={{ mb: 2,mt:2,  lineHeight: 1.6 , fontWeight:'bold'}}>
                First responders have tough, stressful jobs, but between the day-to-day hustle of work and a jam-packed off the clock schedule, many first responders neglect their personal wellness. They’re so dedicated and focused on the work that there’s little time to pause, reflect and make sure they’re taking healthy steps to process stress and trauma. 
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                Peer Support Teams know that first responders find it difficult to find time to attend seminars or training sessions to meet annual education credit requirements. Reinforcement Consulting makes it possible for law enforcement officers, EMTs, firefighters, paramedics and other first responders to access MN POST-certified online courses anywhere, on nearly any device. 
                </Typography>
               
                <Typography variant="body1" sx={{ mb: 2, mt:3, lineHeight: 1.6 }}>
                Whether you have a Peer Support program in place or are just starting to learn about the method, our team is here to help. Our consulting services are designed to evaluate your needs so we can strengthen your department’s focus on mental wellness. 
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                Our nine-course series is available on-demand so that participants can complete coursework from any location, any time.
                </Typography>
            
            </Paper>
            </Grid>
        <Grid container spacing={4} justifyContent="center">
            <UpcomingEvents />
        </Grid>
        <Box sx={{ width: "100%", mt: 4   }}>
            <Paper
                elevation={18}
                sx={{
                textAlign: { xs: "left", md: "center" },
                padding: { xs: 2, md: 3 },
                borderRadius: 4,
                backgroundColor: 'white',
                width: "100%",
                }}
            >
                <Typography variant="h4" sx={{ mb: 2, lineHeight: 1.6,fontWeight:600 }}>
                Virtual Trainings
                </Typography>
            </Paper>
        </Box>
         <Box sx={{ width: "100%", mt: 4   }}>
            <CourseGrid />
         </Box>
        
        


    </Container>
  );
}
