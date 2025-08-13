// // components/UpcomingEvents.js
// import React from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   Button,
//   Grid,
//   Chip,
//   Stack,
//   useTheme,
// } from "@mui/material";
// import StarRoundedIcon from "@mui/icons-material/StarRounded";
// import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
// import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";

// const events = [
//   {
//     id: 1,
//     title: "LMC Peer Support Training (DPS approved)",
//     subtitle: "30-hour DPS requirement — become a peer-to-peer counselor.",
//     date:
//       "Oct 21, 2025 • 8:00 AM–4:00 PM CT  •  Oct 22, 2025 • 8:00 AM–4:00 PM CT",
//     location: "Wilmar confrence Center, Wilmar MN",
//     fee: "$100 per attendee",
//     href:
//       "https://mylmc.lmc.org/UI/events/EventDetails.html?productId=4475",
//   },
//   {
//     id: 2,
//     title: "LMC Peer Support Training (DPS approved)",
//     subtitle: "30-hour DPS requirement — become a peer-to-peer counselor.",
//     date: "Oct 29, 2025 • 8:00 AM–4:00 PM CT  •  Oct 30, 2025 • 8:00 AM–4:00 PM CT",
//     location: "Beltrami County Law Enforcement Center, Bemidji MN",
//     fee: "$100 per attendee",
//     href: "https://mylmc.lmc.org/UI/events/EventDetails.html?productId=4476",
//   },
//   {
//     id: 2,
//     title: "LMC Peer Support Training (DPS approved)",
//     subtitle: "30-hour DPS requirement — become a peer-to-peer counselor.",
//     date: "Nov 4, 2025 • 8:00 AM–4:00 PM CT  •  Nov 5, 2025 • 8:00 AM–4:00 PM CT",
//     location: "South Metro Public Safety Training Facility, Edina MN",
//     fee: "$100 per attendee",
//     href: "https://mylmc.lmc.org/UI/events/EventDetails.html?productId=4477",
//   },
// ];

// export default function UpcomingEvents() {
//   const theme = useTheme();

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         my: 4,
//         px: 4,
//         py: 4,
//         backgroundColor: theme.palette.background.header,
//         borderRadius: 10,
//       }}
//     >
//       {/* Header */}
//       <Paper
//         elevation={0}
//         sx={{
//           mb: 3,
//           px: { xs: 2, sm: 4 },
//           py: { xs: 2.5, sm: 3 },
//           borderRadius: 4,
//           bgcolor: theme.palette.primary.main,
//           color: "#fff",
//           textAlign: "center",
//         }}
//       >
//         <Typography variant="h4" sx={{ fontWeight: 600, color: "black" }}>
//           Upcoming In-Person Events
//         </Typography>
//       </Paper>

//       <Stack spacing={3}>
//         {events.map((ev) => (
//           <Paper
//             key={ev.id}
//             elevation={3}
//             sx={{
//               px: { xs: 2, sm: 3 },
//               py: { xs: 2, sm: 2.5 },
//               borderRadius: 3,
//               bgcolor: theme.palette.background.paper,
//               overflow: "hidden",
//             }}
//           >
//             <Grid container alignItems="center" spacing={2}>
//               {/* LEFT: content */}
//               <Grid item xs={12} sm={9}>
//                 <Stack spacing={1}>
//                   {/* Date */}
//                   <Chip
//                     label={ev.date}
//                     size="small"
//                     sx={{
//                       alignSelf: "flex-start",
//                       bgcolor: theme.palette.background.header,
//                       color: "#fff",
//                       fontWeight: 600,
//                     }}
//                   />

//                   <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                     {ev.title}
//                   </Typography>

//                   <Typography
//                     variant="body1"
//                     color="black"
//                     sx={{ lineHeight: 1.6 }}
//                   >
//                     {ev.subtitle}
//                   </Typography>

//                   {/* Location + Fee row */}
//                   <Stack
//                     direction={{ xs: "column", sm: "row" }}
//                     spacing={2}
//                     sx={{ pt: 1 }}
//                   >
//                     <Stack direction="row" alignItems="center" spacing={1}>
//                       <LocationOnRoundedIcon fontSize="small" />
//                       <Typography variant="body2">{ev.location}</Typography>
//                     </Stack>

//                     <Stack direction="row" alignItems="center" spacing={1}>
//                       <AttachMoneyRoundedIcon fontSize="small" />
//                       <Typography variant="body2">{ev.fee}</Typography>
//                     </Stack>
//                   </Stack>
//                 </Stack>
//               </Grid>

              
//             </Grid>
//             {/* RIGHT: CTA - pinned to far right on desktop */}
//               <Grid
//                 item
//                 xs={12}
//                 sm={3}
//                 sx={{
//                   display: "flex",
//                   justifyContent: { xs: "flex-start", sm: "flex-end" },
//                   alignItems: "center",
//                 }}
//               >
//                 <Button
//                   href={ev.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   variant="contained"
//                   startIcon={<StarRoundedIcon />}
//                   sx={{
//                     bgcolor: theme.palette.background.header,
//                     color: "#fff",
//                     borderRadius: 3,
//                     px: 2.5,
//                     py: 1,
//                     minWidth: 170,
//                     boxShadow:
//                       "0 6px 12px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)",
//                     "&:hover": {
//                       bgcolor: theme.palette.background.header,
//                       opacity: 0.9,
//                     },
//                   }}
//                 >
//                   Go to event
//                 </Button>
//               </Grid>
//           </Paper>
//         ))}
//       </Stack>
//     </Box>
//   );
// }

// components/UpcomingEvents.js
import React from "react";
import {
  Box, Paper, Typography, Button, Grid, Chip, Stack, useTheme,
} from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";

const events = [
  {
    id: "4475",
    title: "LMC Peer Support Training (DPS approved)",
    subtitle: "30-hour DPS requirement — become a peer-to-peer counselor.",
    date: "Oct 21, 2025 • 8:00 AM–4:00 PM CT  •  Oct 22, 2025 • 8:00 AM–4:00 PM CT",
    location: "Wilmar Conference Center, Wilmar MN",
    fee: "$100 per attendee",
    href: "https://mylmc.lmc.org/UI/events/EventDetails.html?productId=4475",
  },
  {
    id: "4476",
    title: "LMC Peer Support Training (DPS approved)",
    subtitle: "30-hour DPS requirement — become a peer-to-peer counselor.",
    date: "Oct 29, 2025 • 8:00 AM–4:00 PM CT  •  Oct 30, 2025 • 8:00 AM–4:00 PM CT",
    location: "Beltrami County Law Enforcement Center, Bemidji MN",
    fee: "$100 per attendee",
    href: "https://mylmc.lmc.org/UI/events/EventDetails.html?productId=4476",
  },
  {
    id: "4477",
    title: "LMC Peer Support Training (DPS approved)",
    subtitle: "30-hour DPS requirement — become a peer-to-peer counselor.",
    date: "Nov 4, 2025 • 8:00 AM–4:00 PM CT  •  Nov 5, 2025 • 8:00 AM–4:00 PM CT",
    location: "South Metro Public Safety Training Facility, Edina MN",
    fee: "$100 per attendee",
    href: "https://mylmc.lmc.org/UI/events/EventDetails.html?productId=4477",
  },
];

export default function UpcomingEvents() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        my: 4,
        px: 4,
        py: 4,
        backgroundColor: theme.palette.background.header,
        borderRadius: 10,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          mb: 3,
          px: { xs: 2, sm: 4 },
          py: { xs: 2.5, sm: 3 },
          borderRadius: 4,
          bgcolor: theme.palette.primary.main,
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 600, color: "black" }}>
          Upcoming In-Person Events
        </Typography>
      </Paper>

      <Stack spacing={3}>
        {events.map((ev) => (
          <Paper
            key={ev.id}                     // ✅ unique key
            elevation={3}
            sx={{
              px: { xs: 2, sm: 3 },
              py: { xs: 2, sm: 2.5 },
              borderRadius: 3,
              bgcolor: theme.palette.background.paper,
              overflow: "hidden",
            }}
          >
            <Grid container alignItems="center" spacing={2}>
              {/* LEFT */}
              <Grid item xs={12} sm={9}>
                <Stack spacing={1}>
                  <Chip
                    label={ev.date}
                    size="small"
                    sx={{
                      alignSelf: "flex-start",
                      bgcolor: theme.palette.background.header,
                      color: "#fff",
                      fontWeight: 600,
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {ev.title}
                  </Typography>
                  <Typography variant="body1" color="black" sx={{ lineHeight: 1.6 }}>
                    {ev.subtitle}
                  </Typography>

                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 1 }}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <LocationOnRoundedIcon fontSize="small" />
                      <Typography variant="body2">{ev.location}</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <AttachMoneyRoundedIcon fontSize="small" />
                      <Typography variant="body2">{ev.fee}</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>

              {/* RIGHT (CTA) — keep INSIDE the same container */}
              <Grid
                item
                xs={12}
                sm={3}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "flex-start", sm: "flex-end" },
                  alignItems: "center",
                }}
              >
                <Button
                  href={ev.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  startIcon={<StarRoundedIcon />}
                  sx={{
                    bgcolor: theme.palette.background.header,
                    color: "#fff",
                    borderRadius: 3,
                    px: 2.5,
                    py: 1,
                    minWidth: 170,
                    boxShadow:
                      "0 6px 12px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)",
                    "&:hover": { bgcolor: theme.palette.background.header, opacity: 0.9 },
                  }}
                >
                  Go to event
                </Button>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}

