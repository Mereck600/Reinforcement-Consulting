import { Box } from "@mui/material";

export default function VimeoEmbed({ videoId }) {
  return (
    <Box
      sx={{
        position: "relative",
        paddingTop: "56.25%", // 16:9 ratio
        overflow: "hidden",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Vimeo video"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></iframe>
    </Box>
  );
}
