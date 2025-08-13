import React, { useRef, useState, useEffect } from "react";
import { Paper, Typography, TextField, Button, Box } from "@mui/material";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef(null);

  // Time trap (bots submit instantly)
  const [readyAt, setReadyAt] = useState(Date.now());
  useEffect(() => {
    setReadyAt(Date.now() + 4000); // require 4s before allowing submit
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    // Too fast? likely a bot
    if (Date.now() < readyAt) {
      alert("Please wait a moment before submitting.");
      return;
    }

    // Collect form data for validation + honeypot
    const data = new FormData(form.current);

    // Honeypot: if filled, likely a bot
    if (data.get("website")) {
      console.warn("Honeypot triggered");
      return;
    }

    const email = (data.get("email") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    // Basic validations
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email.");
      return;
    }
    if (!message) {
      alert("Please enter a message.");
      return;
    }

    // Optional: reject messages with too many links
    const urlCount = (message.match(/https?:\/\//gi) || []).length;
    if (urlCount > 2) {
      alert("Please remove extra links from your message.");
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current?.reset();
        // Reset the time trap so a second submit still waits a bit
        setReadyAt(Date.now() + 4000);
      })
      .catch((error) => {
        console.error(error?.text || error);
        alert("Failed to send the message, please try again.");
      });
  };

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom>
        Contact us
      </Typography>
      <Typography variant="body1" gutterBottom>
        Contact us through this form, or call the office directly at 218-729-6480
      </Typography>

      <Box
        component="form"
        ref={form}
        onSubmit={sendEmail}
        noValidate
        autoComplete="off"
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          width: "100%",
        }}
      >
        {/* Row 1 */}
        <TextField required name="firstName" label="First name" fullWidth />
        <TextField required name="lastName" label="Last name" fullWidth />

        {/* Honeypot (off-screen, not display:none) */}
        <TextField
          name="website"
          label="Your website"
          tabIndex={-1}
          autoComplete="off"
          sx={{
            position: "absolute",
            left: "-5000px",
            height: 0,
            width: 0,
            opacity: 0,
            pointerEvents: "none",
          }}
        />

        {/* Row 2 */}
        <TextField
          required
          name="email"
          label="Email address"
          type="email"
          fullWidth
          sx={{ gridColumn: "1 / -1" }}
        />

        {/* Row 3 */}
        <TextField
          name="message"
          label="Your message"
          multiline
          minRows={5}
          fullWidth
          sx={{ gridColumn: "1 / -1" }}
        />

        {/* Row 4 */}
        <Button type="submit" variant="contained" fullWidth sx={{ py: 1.5, gridColumn: "1 / -1" }}>
          SUBMIT
        </Button>
      </Box>
    </Paper>
  );
}
