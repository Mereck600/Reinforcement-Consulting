import React from "react";
import "../components/Home.css";
import PageTitle from "../components/PageTitle";
import { useTheme } from "@mui/material/styles";




import {
  Typography,
  Button,
  Container,
  Grid,
  Box,
  Paper,
} from "@mui/material";

export default function Grants() {
    const theme = useTheme(); 
  return (
    <Container maxWidth="lg" sx={{ minHeight: "80vh", py: 4 }}>
        <Box textAlign="center" mb={6}>
              <PageTitle
                title="Grants"
                description={
                  <>
                    <Typography variant="h6" gutterBottom>
                     Reach out to us to prepare for the 2026 LEMHWA grants.
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                    Past grants have awarded upwards of 200k in funding for departments.
                    </Typography>
                    <a
                      href="https://cops.usdoj.gov/lemhwa"
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
                        Apply Now
                      </Button>
                    </a>
                  </>
                }
                
              />
        </Box>
        {/*Main text section */}
         <Grid container spacing={4} justifyContent="center">
               <Grid item xs={12} md={8}>
                    <Paper
                        elevation={18}
                        sx={{
                        textAlign: { xs: "left", md: "center" },
                        padding: { xs: 2, md: 2 },
                        borderRadius: "25px",
                        backgroundColor: theme.palette.background.paper,
                        }}
                    >
                        <Typography variant="h6" sx={{ mb: 2, lineHeight: 1.6 }}>
                        We have aided multiple departments in successfully receiving grant funding across multiple years. We offer full support in writing and executing these grants.We utilize our proprietary ‘Lake Superior Model’ to ease your wellness and peer support program development.
                        
                        All programs will be self-sustaining by the conclusion of the grant cycle.
                        
                        Look below to view our Lake Superior Model.
                        </Typography>

                        
                        <Box
                        component="img"
                        src="/assets/images/oldsite/LSModel (1).png"    
                        alt="Lake Superior Model"
                        sx={{
                            width: "100%",
                            maxWidth: "95%",
                            height: "auto",
                            mt: 3,
                            borderRadius: 2,
                            boxShadow: 3,
                            display: "block",
                            mx: "auto", // Center the image
                        }}
                        />
                    </Paper>
                    </Grid>

                                            

                    
                    </Grid>
        
        
        
        
        
        


    </Container>
  );
}
