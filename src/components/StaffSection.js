import React from "react";
import { Box, Grid, Typography, Container, Paper,  } from "@mui/material";

const staffData = [
  {
    name: "Dr. Heather Rose-Carlson, PsyD, LP",
    image: "/assets/images/oldsite/rose-carlson-1.jpg", // Replace with your real path
    description: `Dr. Heather Rose-Carlson, PsyD, LP, is a board-certified Clinical Psychologist who specializes in trauma work. 
    She has worked with active military, veterans, first responders, and critical incidents for over 25 years and has operated 
    a private practice since 2004. Dr. Heather worked as a clinical consultant for the Veterans Center and volunteered with 
    Project New Hope to provide therapeutic retreats for combat veterans and their families.
    
    Coming from a law enforcement family, Dr. Heather is honored to offer clinical support to local police and sheriff departments.
    She and her therapy dog, Kenai, also volunteer with the Arrowhead Critical Incident Stress Management Team (CISM) to provide 
    services following critical incidents in Minnesota and Wisconsin. She is also a volunteer firefighter for Grand Lake Township.`,
  },
  {
    name: "Daryl Carlson",
    image: "/assets/images/oldsite/carlson.jpg",
    description: `Daryl Carlson is the COO of Reinforcement Consulting. He has a passion for giving back to those that support our communities.
    His background is in business management, and he has run multiple successful small businesses for over 20 years.
    Now, his focus is on business and project management for Reinforcement Consulting.`,
  },
   {
    name: "Alex Ross, LPCC",
    image: "/assets/images/oldsite/ross.jpg",
    description: `Alex Ross, MA, LPCC, is a licensed, board-certified Clinical Counselor and a clinical manager for Reinforcement Consulting. She works with individuals of varying ages and specializes in providing services to address trauma with children, adolescents and adults. She works in private practice with Dr. Heather Rose-Carlson and is a clinical manager for Reinforcement Consulting. Alex also volunteers with the Arrowhead Critical Incident Stress Management (CISM) Team to provide services to first responders following critical incidents for Northern Minnesota and Wisconsin.`,
  },
  {
    name: "Adam Huot, B.A, MSW, LGSW",
    image: "/assets/images/oldsite/adamHeadshot.jpg",
    description: `Adam Huot, B.A, MSW, LGSW, is a trainer for Reinforcement Consulting. As a former police officer, Adam has a deep investment in the work championed by Reinforcement Consulting.`,
  },
  {
    name: "Lindzi Campbell, B.A.S",
    image: "/assets/images/oldsite/Lindzi-Headshot.png",
    description: `Lindzi Campbell, B.A.S, is a Trainer for reinforcement consulting. Lindzi is a former firefighter, who is deeply invested in giving back to the first responder communities. Currently pursuing a master’s degree in psychology at the University of Minnesota Duluth, Lindzi is passionate about increasing her skills to better serve the first responder community.`,
  },
  {
    name: "Claire Dzirezak, M.Ed, LPCC",
    image: "/assets/images/oldsite/Claire.jpg",
    description: `Claire Dzirezak, M.Ed, LPCC, is a Trainer working with Reinforcement Consulting. With a background in education and as a licensed Counselor, Claire teaches first responders how to navigate difficult situations. With specializations in trauma and PTSD, Claire is perfectly suited for the work at Reinforcement Consulting.`,
  },
  {
    name: "Ali Carlson, MBA, B.S.",
    image: "/assets/images/oldsite/Ali-Head-Shot-w-BG.jpg",
    description: `Ali Carlson, MBA, B.S., is the program director for Reinforcement Consulting. She manages and creates various programs and events hosted by Reinforcement Consulting.`,
  },
  {
    name: "Julia Rose B.S.",
    image: "/assets/images/oldsite/rosejuliaheadshot (1).jpg",
    description: `Julia Rose B.S. is the Clinic Manager for Reinforcement Consulting. She helps organize and facilitate the various programs offered by Reinforcement Consulting.`,
  },
];

const StaffCard = ({ image, name, description, flip }) => (
  <Paper
    elevation={4}
    sx={{
      p: 4,
      mb: 6,
      borderRadius: 4,
      backgroundColor: "#666666",
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: flip ? "row-reverse" : "row" },
        alignItems: { xs: "center", sm: "flex-start" },
        gap: { xs: 2, sm: 4 },
        flexWrap: "nowrap",
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{
          width: { xs: 130, sm: 180, md: 220 },
          height: { xs: 130, sm: 180, md: 220 },
          flex: "0 0 auto",
          objectFit: "cover",
          borderRadius: 2,
          boxShadow: 2,
          border: "4px solid #1d1f53",   // #1d1f53
          display: "block",
          mx: { xs: "auto", sm: 0 },      // center on mobile
        }}
      />

      {/* Text */}
      <Box
        sx={{
          flex: "1 1 auto",
          minWidth: 0,
          mt: { xs: 1, sm: 0 },
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
        >
          {name}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            whiteSpace: "pre-line",
            lineHeight: 1.7,
            wordBreak: "break-word",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  </Paper>
);

const StaffSection = () => (
  <Container sx={{ py: 8, px: { xs: 2, sm: 4 } }}>
    <Typography variant="h4" align="center" gutterBottom>
      Meet Our Team
    </Typography>

    {staffData.map((person, idx) => (
      <StaffCard
        key={idx}
        name={person.name}
        image={person.image}
        description={person.description}
        flip={idx % 2 !== 0}
      />
    ))}
  </Container>
);

export default StaffSection;
