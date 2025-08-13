import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Typography } from "@mui/material";

export default function FancyImageGallery() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
        px: 2,
        width: "100%",
      }}
    >
      <ImageList
        variant="woven" // can try 'masonry' 'woven' or 'quilted' for different effects
        cols={3}
        gap={12}
        sx={{
          maxWidth: 900,
          width: "100%",
        }}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{
              overflow: "hidden",
              borderRadius: 3,
              boxShadow: 3,
              position: "relative",
              cursor: "pointer",
              "&:hover img": {
                transform: "scale(1.08)",
              },
              "&:hover .overlay": {
                opacity: 1,
              },
            }}
          >
            <img
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
                display: "block",
              }}
            />
            <Box
              className="overlay"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                bgcolor: "rgba(0,0,0,0.5)",
                color: "white",
                opacity: 0,
                transition: "opacity 0.3s ease",
                p: 1,
                textAlign: "center",
              }}
            >
              <Typography variant="body2">{item.title}</Typography>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: "/assets/images/oldsite/IMG_3547.jpg",
    title: "First Responder in truck",
  },
  {
    img: "/assets/images/oldsite/IMG_0425.jpg",
    title: "Shooting range",
  },
  {
    img: "/assets/images/oldsite/IMG_3549.jpg",
    title: "Helicopter",
  },
  {
    img: "/assets/images/oldsite/yoga1-scaled.jpg",
    title: "Yoga",
  },
  {
    img: "/assets/images/oldsite/Course-9-Photo-scaled.jpg",
    title: "Walking Therapy",
  },
  {
    img: "/assets/images/oldsite/IMG_1693.jpg",
    title: "Group Trainings",
  },
  {
    img: "/assets/images/oldsite/Course-3-Photo-scaled.jpg",
    title: "Reset Porch",
  },
  {
    img: "/assets/images/oldsite/IMG_0466.jpg",
    title: "ReSet Cabin",
  },
  {
    img: "/assets/images/oldsite/IMG_7679.jpg",
    title: "Group Therapy",
  },
];
