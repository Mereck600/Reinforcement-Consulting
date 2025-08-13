import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const FeatureCard = () => {
  return (
    <Card
      elevation={6}
      sx={{
        maxWidth: 400,
        borderRadius: "20px",
        overflow: "hidden",
        mx: "auto", // centers the card horizontally
        textAlign: "center",
        
      }}
    >
      {/* Image Section */}
      <CardMedia
        component="img"
        height="200"
        image="/assets/images/oldsite/groupTherapy3-scaled.jpg" // <-- replace with your image path
        alt="Feature"
      />

      <CardContent>
        {/* Title */}
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
          The job is harder than it’s ever been.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Invest in your number one resource: your people.
        </Typography>

        {/* Bullet Points */}
        <Box
          component="ul"
          sx={{
            pl: 3,
            textAlign: "left",
            listStylePosition: "outside",
            lineHeight: 1.6,
            mt: 2,
            "& li": { paddingLeft: "0.25rem", marginBottom: "4px" },
            marginBottom:3,
            paddingBottom:2,
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
      </CardContent>
    </Card>
  );
};

export default FeatureCard;

