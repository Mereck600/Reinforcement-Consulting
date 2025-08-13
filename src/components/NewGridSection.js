// ConsultingServicesCard.js
import React from "react";
import { Paper, Typography, Box, useTheme,  } from "@mui/material";

const ConsultingServicesCard = () => {
  const theme = useTheme();

  const sections = [
    {
      title: "Assessment",
      text: "Initial one hour of consultation with a Reinforcement Consulting provider to assess agency status, resources, and needs, and initiate a proposal at no cost to the agency."
    },
    {
      title: "Newly Established Teams",
      text: "40 hours of support, guidance, and training for a newly established peer support team, provided by two Reinforcement consultants (separate from online training)."
    },
    {
      title: "Established Teams",
      text: "20 hours of support for ongoing Peer Support teams to ensure sustainability (separate from online training)."
    },
    {
      title: "Annual Training",
      text: "16 hours of annual training for existing Peer Support teams to maintain certification and continuous improvement."
    },
    {
      title: "As Needed",
      text: "Custom in-person training, consultation, or other services tailored to your department’s specific needs."
    }
  ];

  return (
    <Paper
      elevation={10}
      sx={{
        mt: 4,
        p: { xs: 3, md: 5 },
        borderRadius: "25px",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
        Our Consulting Services
      </Typography>

      {sections.map((section, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            {section.title}
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            {section.text}
          </Typography>
        </Box>
      ))}

   
    </Paper>
  );
};

export default ConsultingServicesCard;
