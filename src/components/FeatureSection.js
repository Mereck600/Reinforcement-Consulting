import React from "react";
import { Grid, Box } from "@mui/material";
import FeatureCard from "./FeatureCard";
import FancyImageGallery from "./ImageList"; 
//src\components\ImageList.js
// or StandardImageList if you kept the original name

export default function FeatureSection() {
  return (
    <Box
      sx={{
        mt: 8,
        mb: 8,
        px: { xs: 2, md: 6 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="flex-start"
        justifyContent="center"
        maxWidth="lg"
      >
        {/* Left: Feature Card */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <Box sx={{ maxWidth: 400, width: "100%" }}>
            <FeatureCard />
          </Box>
        </Grid>

        {/* Right: Image Gallery */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <Box sx={{ maxWidth: 500, width: "100%" }}>
            <FancyImageGallery /> 
            {/* Replace with StandardImageList if using original */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
