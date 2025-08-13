import React from "react";
import PageTitle from "../components/PageTitle";
import { useTheme } from "@mui/material/styles";
import { Typography, Container, Grid, Box, Paper } from "@mui/material";
import LawResources from "../components/resourceFAQ";   // <-- Capitalized
import CISMTeams from "../components/CISMTeams";
//import NewsSection from "../components/NewsSection";

// const articles = [
//   {
//     title: "Peer Support Training Cohort 7 Announced",
//     date: "Aug 20, 2025",
//     excerpt:
//       "We’re excited to open registration for Cohort 7. The 6-week virtual series covers policy, confidentiality, defusing, debriefing, and more.",
//     image: "/assets/images/oldsite/IMG_7679.jpg",
//     imageAlt: "Training session photo",
//     href: "/news/peer-support-cohort-7",
//   },
//   {
//     title: "Reintegration Framework Adopted by Multiple Agencies",
//     date: "Aug 5, 2025",
//     excerpt:
//       "Our evidence-based reintegration steps are now in use across departments in MN and WI, supporting healthier returns after critical incidents.",
//     image: "/assets/images/oldsite/IMG_3549.jpg",
//     href: "/news/reintegration-adoption",
//   },
//   {
//     title: "Grant Support: Lake Superior Model Success Story",
//     date: "Jul 29, 2025",
//     excerpt:
//       "A look at how the Lake Superior Model helped one department secure funding and launch a sustainable wellness program.",
//     image: "/assets/images/oldsite/IMG_0425.jpg",
//     href: "/news/grant-success-story",
//   },
// ];

export default function Resources() {
  const theme = useTheme();
  return (
    <Container maxWidth="lg" sx={{ minHeight: "80vh", py: 4 }}>
      <Box textAlign="center" mb={6}>
        <PageTitle title="Resources" />
      </Box>

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
            <Typography variant="h5" sx={{ mb: 2, lineHeight: 1.6 }}>
              Emergency Service Personnel Support and Resource List
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
              Updated August 2025
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
              Support is available – nobody has to go it alone. Please keep this webpage handy for easy access to important resources when you need them.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <LawResources /> 
        </Grid>
        
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
            <Typography variant="h5" sx={{ mb: 2, lineHeight: 1.6 }}>
             Minnesota's Regional CISM Programs
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
              Updated August 2025
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
              The following critical incident stress management (CISM) teams provide voluntary services to most emergency service workers and responders. CISM teams are staffed with emergency service peers, mental health professionals and chaplains.
            </Typography>
             <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
              If the request is for either group or individual support related to a specific event, contact their “direct service” number. Each team’s direct service answering point will put you in touch with one of their on-call team members. Information about the individuals requesting service and any services provided are confidential.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <CISMTeams />
        </Grid>
        {/* <Grid item xs={12} md={8}>
          <NewsSection title="In the News" articles={articles} />
        </Grid> */}
        
      </Grid>
    </Container>
  );
}
