import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  Button,
  Stack,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

/**
 * PhotoAndDescription
 * - Image on top, centered title, description (supports STRING or JSX),
 *   centered CTA button.
 * - NEW: Collapses JSX descriptions using max-height + fade overlay.
 */
export default function PhotoAndDescription({
  imageSrc,
  name,
  description,            // string OR JSX (paragraphs + bullets)
  to,                      // route path (e.g., "/training/course-id")
  ctaText = "VIEW",
  // Clamp options for JSX content:
  clampMaxHeight = 180,    // collapsed height in px (tweak to taste)
  imageHeight = 300,
  imageContainerSx = {},
  imageSx = {},
}) {
  const [expanded, setExpanded] = useState(false);
  const [needsClamp, setNeedsClamp] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    // Detect if content overflows the collapsed height
    if (contentRef.current) {
      const sH = contentRef.current.scrollHeight;
      setNeedsClamp(sH > clampMaxHeight + 4); // small buffer
    }
  }, [description, clampMaxHeight]);

  const isStringDesc = typeof description === "string";

  return (
    <Card
      elevation={6}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        p: 2,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "background.paper",
      }}
    >
      {/* Clickable image + title */}
      <CardActionArea
        component="a"
        href={to || "#"}
        target="_blank" // opens in new tab
        rel="noopener noreferrer"
        sx={{ alignItems: "stretch", borderRadius: 2 }}
      >
        <Box
          sx={{
            width: "100%",
            height: imageHeight,
            overflow: "hidden",
            borderRadius: "15px",
            ...imageContainerSx,
          }}
        >
          <img
            src={imageSrc}
            alt={name}
            title={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              ...imageSx,
            }}
          />
        </Box>

        <CardContent sx={{ pb: 0 }}>
          <Typography
            variant="h6"
            align="center"
            sx={{ fontWeight: 700, mt: 1 }}
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>

      {/* Description + actions */}
      <Box
        sx={{
          px: 2,
          pt: 1,
          pb: 2,
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          gap: 1,
          position: "relative",
        }}
      >
        {description && (
          <>
            {/* STRING: simpler clamp via webkit lines */}
            {isStringDesc ? (
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{
                  lineHeight: 1.7,
                  display: expanded ? "block" : "-webkit-box",
                  WebkitLineClamp: expanded ? "unset" : 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  mx: "auto",
                  maxWidth: 560,
                }}
              >
                {description}
              </Typography>
            ) : (
              /* JSX: clamp via max-height + fade overlay */
              <Box
                ref={contentRef}
                sx={{
                  mx: "auto",
                  maxWidth: 560,
                  textAlign: "left",
                  maxHeight: expanded ? "none" : `${clampMaxHeight}px`,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {description}

                {!expanded && needsClamp && (
                  <Box
                    sx={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 48,
                        pointerEvents: "none",
                        background: (theme) =>
                        `linear-gradient(to bottom, rgba( ${theme.palette.background.paper
                            .replace(/[^\d,]/g, "")}, 0), ${theme.palette.background.paper} 90%)`,
                    }}
                    />

                )}
              </Box>
            )}

            {(isStringDesc || needsClamp) && (
              <Button
                size="small"
                onClick={() => setExpanded((v) => !v)}
                sx={{ textTransform: "none", alignSelf: "center" }}
              >
                {expanded ? "Read less" : "Read more"}
              </Button>
            )}
          </>
        )}

        {to && (
          <Stack direction="row" justifyContent="center" sx={{ mt: "auto" }}>
            <Button
              variant="contained"
              component={RouterLink}
              target="_blank"
              to={to}
              sx={{
                px: 3,
                borderRadius: 2,
                backgroundColor: "black",
                color: "white",
                "&:hover": { backgroundColor: "black", color: "white" },
              }}
            >
              {ctaText}
            </Button>
          </Stack>
        )}
      </Box>
    </Card>
  );
}
