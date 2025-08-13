import React from "react";
import "../components/Home.css";
import PageTitle from "../components/PageTitle";
import { useTheme } from "@mui/material/styles";
import FancyImageGallery from "../components/aboutImageList";
import StaffSection from "../components/StaffSection";


import {
  Typography,
  
  Container,
  Grid,
  Box,
  Paper,
} from "@mui/material";


export default function About() {
    const theme = useTheme(); 
  return (
    <Container maxWidth="lg" sx={{ minHeight: "80vh", py: 4 }}>
        <Box textAlign="center" mb={6}>
              <PageTitle
                title="About"
                
              />
        </Box>
        <FancyImageGallery/>
        {/* Main text section */}
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
                            Reinforcement Consulting is a highly specialized consulting agency focusing on supporting first responders and those who serve our communities. Founded by Dr. Heather Rose-Carlson, a board-certified psychologist and daughter of a retired police officer, Reinforcement Consultants delivers education and training that promotes personal and professional resilience in those with high-stress careers. Dr. Heather and her team have taken mental wellness to a new and more approachable level with Wellness Programs, ReSet Retreats, and Reintegration and Peer Support that sets departments up for success.
                          </Typography>
                          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                           Using the proprietary “Lake Superior Model,” Reinforcement Consulting has transformed police departments in the Midwest and has also developed online training available for first responders and their circles of support anywhere in the world.
                          </Typography>
                          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                            Bottom line: First responders and veterans do not have to do this on their own. Reinforcement Consultants empower departments to prioritize mental wellness so first responders can continue to protect their communities and veterans can live longer, happier, healthier lives.
                          </Typography>
                          
                        </Paper>
                      </Grid>
                      



                      <Box sx={{ width: "100%", mt: 4   }}>
                            <Paper
                                elevation={18}
                                sx={{
                                textAlign: { xs: "left", md: "center" },
                                padding: { xs: 2, md: 4 },
                                borderRadius: "15px",
                                backgroundColor: theme.palette.background.paper,
                                width: "100%",
                                }}
                            >
                                <Typography variant="h4" sx={{ mb: 2, lineHeight: 1.6 }}>
                                Meet our Staff
                                </Typography>
                            </Paper>
                            </Box>

                          
                      <StaffSection />
                    </Grid>
        {/*Team grid seection */}
        
        
        
        
        


    </Container>
  );
}
