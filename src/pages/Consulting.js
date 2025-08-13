import React from "react";
import "../components/Home.css";
import PageTitle from "../components/PageTitle";
import { useTheme } from "@mui/material/styles";
import FancyImageGallery from "../components/consultingImageGrid";
import ConsultingServicesCard from "../components/NewGridSection"; // adjust path if needed





import {
  Typography,
  Button,
  Container,
  Grid,
  Box,
  Paper,
} from "@mui/material";


export default function Consulting() {
        const theme = useTheme(); 
  return (
    <Container maxWidth="lg" sx={{ minHeight: "80vh", py: 4 }}>
        <Box textAlign="center" mb={6}>
              <PageTitle
                title="Wellness and Peer Support Consulting"
          
              />
        </Box>
        
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
                          <Typography variant="h5" sx={{ mb: 2,  lineHeight: 1.6 , fontWeight:'bold'}}>
                            Trust us to build  and support your wellness program and your peer support team.
                          </Typography>
                          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                           The mental wellness of your department is essential. First responders experience depression, PTSD, burnout and anxiety, and processing the trauma they experience the job is the best way to ensure they can have long, healthy and happy lives – both personally and professionally. Trust Reinforcement Consulting to take care of your team from the inside out.
                          </Typography>
                          <FancyImageGallery/>
                          <Typography variant="body1" sx={{ mb: 2, mt:3, lineHeight: 1.6 }}>
                            Whether you have a Peer Support program in place or are just starting to learn about the method, our team is here to help. Our consulting services are designed to evaluate your needs so we can strengthen your department’s focus on mental wellness. 
                          </Typography>
                          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                           We’ll have at least two Reinforcement Consulting providers meet with your team to get started. Next, we’ll tailor our service offerings to meet your specific needs based on organizational structure and the status of your Peer Support program. We’ll also consider your department’s size and any available resources per the recommendations of Reinforcement Consulting.
                          </Typography>
                          <a
                                                href="/Contact"
                                               
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
                                                  Sign Up Today
                                                </Button>
                                              </a>

                        </Paper>
                      </Grid>
                      
                       {/* Insert grid here */}
                       <ConsultingServicesCard />






                  {/* Webinars */}  
                          
                      
                    </Grid>
                    {/* <Grid container spacing={4} marginTop={4} justifyContent="center" id="webinar">
                        <Grid item xs={12} md={8}>
                            <Paper
                            elevation={18}
                            sx={{
                                textAlign: "left", // Always left-align content
                                padding: { xs: 2, md: 4 },
                                borderRadius: "25px",
                                backgroundColor: theme.palette.background.paper,
                            }}
                            >
                            <Typography variant="h5" sx={{ mb: 2, lineHeight: 1.6 }}>
                                The Fundamentals of Creating a Peer Support Team
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{ mb: 2, lineHeight: 1.6, fontStyle: "italic" }}
                            >
                                POST-accredited virtual training
                            </Typography>

                            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                                Creating a peer support team can be an overwhelming and confusing process.
                                Education and training on successfully doing so is extremely limited.
                                Legislation and statutory requirements are often changing. This is why we’ve
                                created The Fundamentals of Creating a Peer Support Team.
                            </Typography>

                            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                                This 6-week virtual training series was born out of a collaborative effort
                                among peer support teams looking to fill the missing gaps in available training
                                and education, and simplify the process of creating much-needed peer support
                                teams.
                            </Typography>

                            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                                By the end of this training, you will walk away with a strong knowledge base of
                                the foundation and elements required to create an effective peer support team,
                                and how to use them. This includes:
                            </Typography>

                            
                            <Box component="ul" sx={{ pl: 3, mb: 2, lineHeight: 1.6 }}>
                                <li>How to determine the basic elements of what you do – and don’t – need to make a team</li>
                                <li>How to gain administration buy-in, including funding support</li>
                                <li>How to easily write an approved policy with our included outline</li>
                                <li>Knowing the difference between confidentiality &amp; privilege – and who gets what</li>
                                <li>How to use specific tools, such as defusing, debriefing, one-on-one, etc.</li>
                                <li>How to meet the requirement for clinical support, specifically including the August 2020 legislation changes</li>
                            </Box>
                            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                                This all-inclusive training series consists of six live trainings, each consisting of 30 minutes of training followed by 30 minutes of Q & A, where you’ll have the opportunity to discuss your specific department’s situation and needs and network with those from other departments. The cost is $197. The schedule will be as follows:
                            </Typography>
                            <Box component="ul" sx={{ pl: 3, mb: 2, lineHeight: 1.6 }}>
                                <li>Week One: 3:00 PM – 4:30 PM (extra 30 minutes to allow for introductions)</li>
                                <li>Week Two: 3:00 PM – 4:00 PM</li>
                                <li>Week Three: 3:00 PM – 4:00 PM</li>
                                <li>Week Four: 3:00 PM – 4:00 PM</li>
                                <li>Week Five: 3:00 PM – 4:00 PM</li>
                                <li>Week Six: 3:00 PM – 4:00 PM</li>
                            </Box>
                            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                                Completion of course will include the framework for your Peer Support manual and network. This includes printable worksheets that include basic elements to build your Peer Support manual and a framework and format to continue with the network that has been formed. Completion of entire course is approved for 6 POST credits in Minnesota, with reciprocity in most states. Ask us about your state!
                            </Typography>  
                            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, fontWeight:'bold'}}>
                                Space is limited
                            </Typography>   

                            </Paper>
                        </Grid>
                        </Grid> */}

                            
                                
        
        


    </Container>
  );
}
