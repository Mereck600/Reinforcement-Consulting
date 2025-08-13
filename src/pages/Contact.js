
import React from "react";
import "../components/Home.css";
import PageTitle from "../components/PageTitle";
//import { useTheme } from "@mui/material/styles";
import ContactForm from "../components/formFile";
import {
  Typography,
 
  Container,
  Grid,
  Box,
  
} from "@mui/material";
//import FAQS from "../components/resourceFAQ";

export default function Contact() {
    //const theme = useTheme(); 
  return (
    <Container>
        <Box textAlign="center" mb={6}>
              <PageTitle
                title="Contact"
                description={
                    <>
                    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                        Our office is located in the First Responders Resource Center at <a class="email-link" href="https://www.google.com/maps/dir//4560+Norway+Pines+Pl,+Hermantown,+MN+55811/@46.8387627,-92.3156336,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x52afb2d57d354dd9:0x6c7dd4301d91a6e!2m2!1d-92.2332331!2d46.8387923?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D">4560 Norway Pines Pl Hermantown, MN 55811.</a>
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                    Our email is <a class="email-link" href="mailto:info@reinforcement911.com">info@reinforcement911.com</a>
                    </Typography>
                            </>
                        }
                
              />
        </Box>
        
                    <Grid container spacing={3} justifyContent="center">
                      {/*put contact form here */}
                       <Grid item xs={12} >
                            <ContactForm />
                            </Grid>
                      <Grid item xs={12}>
                        <Box
                          sx={{
                            width: '50vw', // full viewport width
                            position: 'relative',
                            
                            
                            my: 4,
                          }}
                        >
                          <Box
                            sx={{
                              width: '100%',
                              height: { xs: '400px', md: '600px' },
                              borderRadius: '12px',
                              overflow: 'hidden',
                              boxShadow: 3,
                            }}
                          >
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2856.043468548895!2d-92.2361125!3d46.8375959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52afb2d57d354dd9%3A0x6c7dd4301d91a6e!2s4560+Norway+Pines+Pl%2C+Hermantown%2C+MN+55811!5e0!3m2!1sen!2sus!4v1631825502616!5m2!1sen!2sus"
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              allowFullScreen=""
                              loading="lazy"
                              title="Map of Location"
                            ></iframe>
                          </Box>
                        </Box>
                      </Grid>



                      
                    </Grid>
        
        
        
        
        
        


    </Container>
  );
}
