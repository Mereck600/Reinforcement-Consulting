import React, { useState } from "react";
import "../components/Home.css";
import PageTitle from "../components/PageTitle";
import { useTheme } from "@mui/material/styles";
import {
  Typography,
  Button,
  Container,
  Grid,
  Box,
  Paper,
  Dialog,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function Grants() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="lg" sx={{ minHeight: "80vh", py: 4 }}>
      <Box textAlign="center" mb={6}>
        <PageTitle
          title="Grants"
          description={
            <>
              <Typography variant="h6" gutterBottom>
                Reach out to us to prepare for the 2026 LEMHWA grants.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Past grants have awarded upwards of 200k in funding for departments.
              </Typography>
              <a
                href="https://cops.usdoj.gov/lemhwa"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "black",
                    color: "white",
                    "&:hover": { backgroundColor: "black", color: "white" },
                  }}
                >
                  Apply Now
                </Button>
              </a>
            </>
          }
        />
      </Box>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper
            elevation={18}
            sx={{
              textAlign: { xs: "left", md: "center" },
              padding: { xs: 2, md: 2 },
              borderRadius: "25px",
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, lineHeight: 1.6 }}>
              We have aided multiple departments in successfully receiving grant funding
              across multiple years. We offer full support in writing and executing these grants.
              We utilize our proprietary ‘Lake Superior Model’ to ease your wellness and peer
              support program development.
              <br /><br />
              All programs will be self-sustaining by the conclusion of the grant cycle.
              <br /><br />
              Look below to view our Lake Superior Model.
            </Typography>

            {/* Clickable Image */}
            <Box
              component="img"
              src="/assets/images/oldsite/LSModel (1).png"
              alt="Lake Superior Model"
              sx={{
                width: "100%",
                maxWidth: "95%",
                height: "auto",
                mt: 3,
                borderRadius: 2,
                boxShadow: 3,
                display: "block",
                mx: "auto",
                cursor: "pointer",
              }}
              onClick={handleOpen}
            />
          </Paper>
        </Grid>
      </Grid>

      {/* Fullscreen Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="xl">
        <Box sx={{ position: "relative", backgroundColor: "black" }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "white",
              zIndex: 10,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="img"
            src="/assets/images/oldsite/LSModel (1).png"
            alt="Lake Superior Model"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              backgroundColor: "black",
            }}
          />
        </Box>
      </Dialog>
    </Container>
  );
}
