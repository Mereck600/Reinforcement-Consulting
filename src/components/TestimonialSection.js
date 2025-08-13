import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

/** Reusable headshot with adjustable focal point & zoom */
const HeadshotCrop = ({
  src,
  alt,
  size = 120,
  position = "50% 50%",
  zoom = 1,
  shape = "circular",
  border = true,
}) => {
  // Quote + encode to survive spaces, parentheses, etc.
  const bgImage = React.useMemo(() => `url("${encodeURI(src)}")`, [src]);

  return (
    <Box
      role="img"
      aria-label={alt}
      sx={{
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: shape === "circular" ? "50%" : 2,
        backgroundImage: bgImage,
        backgroundRepeat: "no-repeat",
        backgroundPosition: position,          // e.g. "50% 25%"
        backgroundSize: `${zoom * 100}% auto`, // zoom in/out
        border: border ? "3px solid #fff" : "none",
        boxShadow: 2,
        overflow: "hidden",
        bgcolor: "#e0e0e0", // subtle fallback color
      }}
    />
  );
};

const testimonials = [
  {
    name: "Mike Tusken",
    title: "Former Chief of Police, Duluth, MN",
    quote:
      "We all know this is a tough job, getting tougher… this (peer support) work is invaluable to our organization. To have this program and to have people in our organization who are dedicated to the welfare of our people is very, very important.",
    image: "/assets/images/oldsite/chief-tusken.jpg",
    imagePosition: "50% 20%", // <-- add missing %
    imageZoom: 1.1,
  },
  {
    name: "Jeff Kazel",
    title: "Former Lieutenant, Duluth MN Police Dept.",
    quote:
      "The job that we do is probably one of the hardest jobs in the world. The stress is unbelievable. Officers are our number one resource, and this program is going to take care of that resource.",
    image: "/assets/images/oldsite/lieut-kazel.jpg",
    imagePosition: "50% 45%",
    imageZoom: 1,
  },
  {
    name: "Jess Irmiter",
    title: "Lieutenant Sergeant, Eden Prairie Police Department.",
    quote:
      "The Eden Prairie Police Department is committed to prioritizing officer mental wellness, and ongoing education is an essential part of how we operate. The Lake Superior Model of Peer Support has been a great resource for our team. Our internal peer support team is already helping our officers process difficult work-related and personal situations.",
    image: "/assets/images/oldsite/Jess-Irmiter-SGT-1-scaled.jpg",
    imagePosition: "50% 10%",
    imageZoom: 1.12,
  },
  {
    name: "Wade Rasch",
    title: "Commander, St. Louis County Sheriff’s Department.",
    quote:
      "Reinforcement Consulting facilitated my agency with attendance at Reintegration Training, put on by the Edmonton Police Service. It was one of the most impactful trainings of my career. It has renewed my belief that, working together, we can ensure better outcomes for our public safety personnel before, during, and after critical incidents.",
    image: "/assets/images/oldsite/RaschWade (1).jpeg",
    imagePosition: "50% 50%",
    imageZoom: 1.1,
  },
];

export default function TestimonialSection() {
  return (
    <Box sx={{ my: 6 }}>
      <Grid container spacing={4}>
        {testimonials.map((t, i) => (
          <Grid item xs={12} key={i}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                borderRadius: 3,
                gap: 3,
              }}
            >
              <HeadshotCrop
                src={t.image}
                alt={t.name}
                position={t.imagePosition}
                zoom={t.imageZoom}
                size={120}
                shape="circular"
              />

              <Box textAlign={{ xs: "center", sm: "left" }}>
                <Typography variant="body1" sx={{ fontStyle: "italic", mb: 2, lineHeight: 1.6 }}>
                  “{t.quote}”
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  - {t.name}, {t.title}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
