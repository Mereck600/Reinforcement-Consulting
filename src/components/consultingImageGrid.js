import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  Box,
  Typography,
  Dialog,
  IconButton,
  Slide,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

export default function FancyImageGallery() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(null); // { img, title }

  const handleOpen = (item) => {
    setSelected(item);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
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
          variant="woven"
          cols={3}
          gap={12}
          sx={{
            maxWidth: 900,
            width: "100%",
            // make it 2 cols on small screens
            [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
              gridTemplateColumns: "repeat(2, 1fr) !important",
            },
          }}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              onClick={() => handleOpen(item)}
              sx={{
                overflow: "hidden",
                borderRadius: 3,
                boxShadow: 3,
                position: "relative",
                cursor: "pointer",
                "&:hover img": { transform: "scale(1.08)" },
                "&:hover .overlay": { opacity: 1 },
              }}
            >
              <img
                src={item.img}
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

      {/* Fullscreen image viewer */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen={fullScreen}
        TransitionComponent={Slide}
        TransitionProps={{ direction: "up" }}
        PaperProps={{
          sx: { bgcolor: "rgba(0,0,0,0.85)", boxShadow: "none" },
        }}
      >
        <IconButton
          aria-label="Close"
          onClick={handleClose}
          sx={{
            position: "fixed",
            top: 8,
            right: 8,
            color: "#fff",
            zIndex: 1,
            bgcolor: "rgba(255,255,255,0.1)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: { xs: 2, sm: 4 },
          }}
          onClick={handleClose}
        >
          {selected && (
            <Box sx={{ maxWidth: "95vw", maxHeight: "85vh", textAlign: "center" }}>
              <img
                src={selected.img}
                alt={selected.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  display: "block",
                  margin: "0 auto",
                }}
              />
              {selected.title && (
                <Typography variant="body2" sx={{ color: "#fff", mt: 1, opacity: 0.9 }}>
                  {selected.title}
                </Typography>
              )}
            </Box>
          )}
        </Box>
      </Dialog>
    </>
  );
}

const itemData = [
  { img: "/assets/images/oldsite/IMG_1693.jpg", title: "Reset Porch" },
  { img: "/assets/images/oldsite/IMG_0466.jpg", title: "ReSet Cabin" },
  { img: "/assets/images/oldsite/IMG_7679.jpg", title: "Group Therapy" },
];
