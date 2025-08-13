import * as React from "react";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
  Chip,
  useTheme,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

export default function NewsSection({
  title = "Latest News",
  articles = [],
  maxItems = 3,
}) {
  const theme = useTheme();
  const items = articles.slice(0, maxItems);

  return (
    <Box sx={{ width: "100%", my: 6 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, textAlign: "center", mb: 3 }}
      >
        {title}
      </Typography>

      <Grid container spacing={3}>
        {items.map((a, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card
              elevation={6}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                overflow: "hidden",
                bgcolor: theme.palette.background.paper,
              }}
            >
              <CardActionArea
                component="a"
                href={a.href}
                target={a.external ? "_blank" : "_self"}
                rel={a.external ? "noopener noreferrer" : undefined}
                sx={{ flexGrow: 1, alignItems: "stretch" }}
              >
                {a.image && (
                  <CardMedia
                    component="img"
                    image={a.image}
                    alt={a.imageAlt || a.title}
                    sx={{
                      aspectRatio: "16 / 9",
                      objectFit: "cover",
                      borderBottom: "1px solid",
                      borderColor: "divider",
                    }}
                  />
                )}

                <CardContent sx={{ flexGrow: 1 }}>
                  <Stack spacing={1}>
                    {a.date && (
                      <Chip
                        size="small"
                        label={a.date}
                        sx={{
                          alignSelf: "flex-start",
                          bgcolor: (theme.vars || theme).palette?.background?.header || theme.palette.primary.main,
                          color: "#fff",
                          fontWeight: 600,
                        }}
                      />
                    )}

                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {a.title}
                    </Typography>

                    {/* Preview/excerpt with clamp */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        lineHeight: 1.6,
                        minHeight: "4.8em", // keeps card heights consistent
                      }}
                    >
                      {a.excerpt}
                    </Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>

              <Box
                sx={{
                  px: 2,
                  pb: 2,
                  pt: 0,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  size="small"
                  endIcon={<LaunchIcon />}
                  component="a"
                  href={a.href}
                  target={a.external ? "_blank" : "_self"}
                  rel={a.external ? "noopener noreferrer" : undefined}
                  sx={{
                    bgcolor: (theme.vars || theme).palette?.background?.header || theme.palette.primary.main,
                    color: "#fff",
                    "&:hover": {
                      bgcolor: (theme.vars || theme).palette?.background?.header || theme.palette.primary.main,
                      opacity: 0.9,
                    },
                    borderRadius: 2,
                    px: 2,
                  }}
                >
                  Read more
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}

        {/* If fewer than 3 items, fill layout gracefully (optional) */}
        {items.length === 0 && (
          <Grid item xs={12}>
            <Typography color="text.secondary" align="center">
              No articles yet. Check back soon.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
