import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles"; // <-- ADD THIS

const columns = [
  { title: "Consulting", subtitle: "We help your team support one another.", buttonText: "Learn More",link:"/Consulting" },
  { title: "Training", subtitle: "Learn from a seasoned Peer Support team.", buttonText: "Explore Courses",link:"/Training" },
  { title: "Resources", subtitle: "Quick access to support and resources.", buttonText: "Find Resources",link:"/Resources" },
];

export default function ThreeColumnFeature() {
  const theme = useTheme(); // <-- ADD THIS

  return (
    <Box sx={{ width: "100%", my: 6 }}>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {columns.map((col, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <Paper
              elevation={6}
              sx={{
                backgroundColor: theme.palette.background.paper, // <-- theme works now
                height: "100%",
                borderRadius: 3,
                p: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
                transition: "all 0.3s ease",
                "&:hover": { transform: "translateY(-5px)", boxShadow: 8 },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                {col.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ mb: 2, flexGrow: 1, display: "flex", alignItems: "center" }}
              >
                {col.subtitle}
              </Typography>
              <a
                      href={col.link}
                      
                      style={{ textDecoration: "none" }}
                    >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.background.header,
                  color: "white",
                  "&:hover": { backgroundColor: "#333" },
                }}
              >
                {col.buttonText}
              </Button>
              </a>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
