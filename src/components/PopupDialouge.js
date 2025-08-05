import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn'; // Icon for expanding

const PopupDialog = ({ open, onClose, image, title, description }) => {
  const [isImageExpanded, setImageExpanded] = useState(false); // Track if image is expanded

  const handleImageClick = () => setImageExpanded(true); // Open expanded view
  const handleCloseImage = () => setImageExpanded(false); // Close expanded view

  return (
    <>
      {/* Main Popup Dialog */}
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              width: '100%',
              maxHeight: '420px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginBottom: 2,
              cursor: 'pointer', // Make the image clickable
            }}
            onClick={handleImageClick} // Open expanded image on click
          />
          <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
            {description}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Expanded Image Dialog */}
      <Dialog open={isImageExpanded} onClose={handleCloseImage} maxWidth="lg" fullWidth>
        <DialogContent>
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              width: '100%',
              maxHeight: '80vh',
              objectFit: 'contain',
              borderRadius: '8px',
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseImage} variant="contained" color="primary">
            Close Image
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PopupDialog;
