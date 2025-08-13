// components/CourseGrid.jsx
import React from "react";
import {
 
  
  Box,
  
} from "@mui/material";


import PhotoAndDescription from "./PhotoAndDescription";

const defaultCourses = [
  {
    imageSrc: "/assets/images/oldsite/IMG_0425.jpg",
    name: "History of Peer Support",
    intro: [
      "Peer support is a system that provides a resource of support from others with similar experiences.",
      "Resources and connections with others who’ve had similar experiences are incredibly valuable."
    ],
    bulletTitle: "This course covers:",
    bullets: [
      "The history of peer support",
      "PTSD, suicide, divorce and substance abuse in law enforcement"
    ],
    to: "https://www.learndesk.us/class/5028700640772096/course-1-the-history-of-peer-support",
  },
  {
    imageSrc: "/assets/images/oldsite/Course-2-Photo-scaled.jpg",
    name: "Creating Connections",
    intro: [
      "Connections between people are an essential part of Peer Support.",
      "Practicing empathy and finding small similarities can help build strong connections and circles of support."
    ],
    bulletTitle: "This course covers:",
    bullets: [
      "The importance of connections",
      "How to facilitate peer support",
      "The differences between empathy and sympathy"
    ],
    to: "https://www.learndesk.us/class/4898751531450368/course-2-creating-connections",
  },
  {
    imageSrc: "/assets/images/oldsite/Course-3-Photo-scaled.jpg",
    name: "One-to-One",
    intro: [
      "One-to-one peer support is an important tool for critical incident stress management.",
      "In this course, we work through real situations to hone Peer Support skills."
    ],
    bulletTitle: "This course covers:",
    bullets: [
      "The 1:1 Peer Support tool",
      "Attentive listening",
      "The SAFER Model"
    ],
    to: "https://www.learndesk.us/class/5473022112694272/course-3-peer-support-tool-one-to-one",
  },
  {
    imageSrc: "/assets/images/oldsite/groupTherapy3-scaled.jpg",
    name: "Defusing",
    intro: [
      "The process of Defusing creates a space where individuals can speak freely about their traumatic experiences.",
      "In this course, we experience a real-life demonstration and follow up process of the defusing and its positive impacts."
    ],
    bulletTitle: "This course covers:",
    bullets: [
      "TAn overview of the technique",
      "The benefits of defusing",
      "What to expect in the first 24-48 hours after an event"
    ],
    to: "https://www.learndesk.us/class/5281472208437248/course-4-peer-support-tool-defusing",
  },
  {
    imageSrc: "/assets/images/oldsite/IMG_7679.jpg",
    name: "Debriefing",
    intro: [
      "Debriefing takes place after a critical incident to help those involved process and work through both stress and trauma.",
      "For support beyond group discussion, professionals use debriefing."
    ],
    bulletTitle: "This course covers:",
    bullets: [
      "An overview of the technique",
      "When and how to use",
      "Ground rules for success"
    ],
    to: "https://www.learndesk.us/class/5604448481050624/course-5-peer-support-tool-debriefing",
  },
  {
    imageSrc: "/assets/images/oldsite/IMG_3547.jpg",
    name: "Creating a New Peer Support Team",
    intro: [
      "Peer Support teams are a valuable resource for first responders who experience trauma and stress.",
      "Complete this course to take the first steps in forming a Peer Support team."
    ],
    bulletTitle: "This course covers:",
    bullets: [
      "Considerations for creating a peer support team",
      "Confidentiality policies",
      "Real-world success stories"
    ],
    to: "https://www.learndesk.us/class/5664373139832832/course-6-creating-a-new-peer-support-team",
  },
  {
    imageSrc: "/assets/images/oldsite/Course-7-Photo-scaled.jpg",
    name: "The Importance of the Basics",
    intro: [
      "A balanced, healthy life depends on three basics: eat, sleep and fun.",
      "In this course, we explore Psychoeducation on the importance of the basics of mind and body and how they play into positive mental health."
    ],
    bulletTitle: "This course covers:",
    bullets: [
      "Sleep and how it impacts someone in crisis",
      "How nutrition can improve mental healtht",
      "Using fun to keep life balance"
    ],
    to: "https://www.learndesk.us/class/4667700208992256/course-7-the-importance-of-the-basics",
  },
  {
    imageSrc: "/assets/images/oldsite/slideshow6-scaled.jpg",
    name: "Meditation",
    intro: [
      "Meditation is a simple technique used in Peer Support to help people process traumatic or stressful situations.",
      "Learn to control your mind by engaging your five senses through meditation."
    ],
    bulletTitle: "This course covers:",
    bullets: [
      "The benefits of meditation",
      "Using meditation to decrease physical and emotional stress",
      "How to take a meditation walk"
    ],
    to: "https://www.learndesk.us/class/5151844458299392/course-8-meditation-and-mindfulness",
  },
  {
    imageSrc: "/assets/images/oldsite/Course-9-Photo-scaled.jpg",
    name: "Post Traumatic Stress Disorder (PTSD)",
    intro: [
      "PTSD affects thousands every day and it can be treated with therapy, medications and coping techniques over time.",
      "First responders are more likely to suffer from PTSD because of the high-stress environment they work in every day."
    ],
    bulletTitle: "This course covers:",
    bullets: [
      "The history of PTSD",
      "Recognizing common symptoms",
      "Preventing, identifying and treating PTSD"
    ],
    to: "https://www.learndesk.us/class/4537695541919744/course-9-understanding-trauma-and-mental-health-ptsd",
  },
  {
    imageSrc: "/assets/images/oldsite/Bundle-Photo-scaled.jpg",
    name: "Peer Support Training Bundle - 9 Courses",
    intro: [
     
    ],
    bulletTitle: "",
    bullets: [
        
    ],
    to: "https://www.learndesk.us/bundle/6636534792978432/prioritize-wellness-to-drive-positive-outcomes",
  },
];


export default function CourseGrid({ courses = defaultCourses }) {
  // Extra guard (optional)
  const list = Array.isArray(courses) ? courses : [];

  return (
    <Box
      sx={{
        my: 4,
        display: "grid",
        gap: { xs: 2, sm: 3, md: 4 }, // balanced spacing
        gridTemplateColumns: {
          xs: "1fr",              // 1 across mobile
          sm: "repeat(2, 1fr)",   // 2 across small
          md: "repeat(3, 1fr)",   // 3 across medium
          lg: "repeat(3, 1fr)",   // 3 across large
        },
        maxWidth: "1400px",
        mx: "auto",
        px: 2,
      }}
    >
      {list.map((c, i) => (
        <PhotoAndDescription
          key={i}
          imageSrc={c.imageSrc}
          name={c.name}
          description={
            // build the rich description (intro + bullets)
            <Box>
              {Array.isArray(c.intro) &&
                c.intro.map((p, idx) => (
                  <p key={idx} style={{ margin: "0 0 12px 0", lineHeight: 1.7 }}>
                    {p}
                  </p>
                ))}
              {c.bulletTitle && (
                <p style={{ margin: "0 0 8px 0", fontWeight: 700 }}>{c.bulletTitle}</p>
              )}
              {Array.isArray(c.bullets) && c.bullets.length > 0 && (
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                  {c.bullets.map((b, idx) => (
                    <li key={idx} style={{ marginBottom: 6 }}>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </Box>
          }
          to={c.to}
          ctaText="VIEW"
          imageHeight={300}
          clampMaxHeight={180}
        />
      ))}
    </Box>
  );
}