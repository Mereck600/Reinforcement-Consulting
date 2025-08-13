import React, { useState } from "react";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,Box,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const LawResources = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Grid item xs={12} pb={2}>
    <Box
        sx={{
          "& a": {
            color: "black",
            textDecoration: "underline",
          },
          "& a:hover": {
            color: "darkgray"
          }
        }}
      >
      {[
           {
                question: "Law Enforcement",
                answer: (
                <>
                <strong>Cop Line</strong>
                <br />
                 <a href="tel:+12187296480" >1-800-267-5463</a>
                 <br />
                 <a href="https://www.copline.org/" target="_blank"  rel="noreferrer">Visit Site</a>
                 <br /><br />
                 An international law enforcement officer’s hotline. Our vision is to remove the stigma associated with an officer’s decision to keep his/her emotions inside for fear of retribution and/or retaliatory action if his/her personal information, feelings, and state of mind is revealed to his/her agency.
                 <br />

                <strong>Blue H.E.L.P. (I-Will-Listen)</strong>
                <br />
                 <a href="https://bluehelp.org/">Visit Site</a>
                 <br />
                 <a href="mailto:contact@bluehelp.org" >contact@bluehelp.org</a>
                 <br /><br />
                 Acknowledging the service and sacrifice of law enforcement officers lost to suicide and bringing awareness to officer PTSD. 1stHelp is a searchable database dedicated to finding emotional, financial, family, and spiritual assistance for first responders.
                 <br />

                 <strong>Cop-to-Cop</strong>
                 <br />
                  <a href="tel:866-COP-2COP">866-COP-2COP</a>
                 <br /><br />
                 24-hour peer support
                 <br />

                 <strong>Blue Line Support</strong>
                 <br />
                  <a href="tel:855-964-2583">855-964-2583</a>
                 <br /><br />
                 24-hour peer support. BlueLine Support™ is a peer support officer program with a network of Mental Health Professionals, providing intervention, prevention, resiliency, and self-care services for law enforcement officers regardless of status.
                 <br />
                </>
                )

            },
            {
    question: "Fire Service / Rescue",
    answer: (
      <>
                <strong>MnFIRE Helpline</strong>
                <br />
                 <a href="tel:888-784-6634" >888-784-6634</a>
                 <br />
                 <a href="https://mnfireinitiative.com/" target="_blank"  rel="noreferrer">Visit Site</a>
                 <br /><br />
                 The Minnesota Firefighter Initiative (MnFIRE) is designed to connect firefighters, family, friends, employers, and elected officials that help to build awareness and give the right resources to the people who want and or need them. MnFIRE is a collaboration of the Minnesota Professional Firefighters, the Minnesota State Fire Department Association, and the Minnesota State Fire Chiefs Association.
                 <br />
                <strong>Fire EMS Helpline</strong>
                <br />
                <a href="tel:888-731-3473">888-731-3473</a>
                <br />
                 <a href="https://www.nvfc.org/fireems-helpline" target="_blank"  rel="noreferrer">(218) 729-6480</a>                
                 <br /><br />
                 Firefighters and EMS personnel face many unique challenges that can have a significant impact on their behavioral health. To ensure these individuals and their families have access to the help they need, the NVFC teamed up with American Addiction Centers (AAC) to create a free, confidential helpline available 24 hours a day, 7 days a week.
                 <br />
                 <strong>Firefighter Behavioral Health Alliance</strong>
                 <br />
                 <a href="tel:+1847-209-8208" >847-209-82084</a>
                 <br />
                 <a href="https://www.ffbha.org/" target="_blank"  rel="noreferrer">Visit Site</a>
                 <br /><br />
                 Our goal is to provide behavioral health workshops to fire departments, EMS and Dispatch organizations across the globe, focusing on behavioral health awareness with a strong emphasis on suicide prevention and promoting resources available to firefighters/EMS/Dispatch and their families.
                 <br />
                 <strong>IAFF Center for Excellence</strong>
                 <br />
                  <a href="tel:301-358-0192">855-964-2583</a>
                   <br />
                 <a href="https://www.iaffrecoverycenter.com" target="_blank"  rel="noreferrer">Visit Site</a>
                 <br /><br />
                 Mental health/CD treatment
                 <br />
                 <strong>Pocket Peer</strong>
                <br />
                 <a href="tel:+1888-784-6634" >888-784-6634</a>
                 <br />
                 <a href="http://pocketpeer.org" target="_blank"  rel="noreferrer">Visit Site</a>
                 <br /><br />
                 Sponsored by the Center for Firefighter Behavioral Health and dedicated to bringing behavioral health resources and education to firefighters and their families, Pocket Peer is a peer education approach to support the behavioral health needs of fire service.
                 <br />
                </>
    )
  },
  {
    question: "EMS",
    answer: (
       <>
                <strong>CrewCare</strong>
                <br />
                 <a href="mailto:CrewCare@ImageTrend.com" >CrewCare@ImageTrend.com</a>
                 <br />
                 <a href="https://www.crewcarelife.com/" target="_blank"  rel="noreferrer">Visit Site</a>
                 <br /><br />
                CrewCare’s goal is to provide mental health insight into an individual’s stress load and grow a database to strengthen 1st responder agencies and improve mental health research.
                 <br />
                <strong>Fire EMS Helpline</strong>
                <br />
                <a href="tel:+1888-731-3473" >888-731-3473</a>
                <br />
                 <a href="https://www.nvfc.org/fireems-helpline" target="_blank"  rel="noreferrer">(218) 729-6480</a>                
                 <br /><br />
                 Firefighters and EMS personnel face many unique challenges that can have a significant impact on their behavioral health. To ensure these individuals and their families have access to the help they need, the NVFC teamed up with American Addiction Centers (AAC) to create a free, confidential helpline available 24 hours a day, 7 days a week.
                 <br />
                 <strong>Code Green Campaign / Safe Call Now</strong>
                 <br />
                 <a href="tel:206-459-3020" >206-459-3020</a>
                 <br />
                 A 24/7 helpline staffed by first responders for first responders and their family members. They can assist with treatment options for responders who are suffering from mental health, substance abuse, and other personal issues.
                 <br />
                 <strong>Project Parachute</strong>
                 <br />
                 <a href="https:/project-parachute.org" target="_blank"  rel="noreferrer">Visit Site</a>
                 <br /><br />
                Provides a service that matches therapists and healthcare frontline workers.
                 <br />
                 
                </>
    )
  },
  {
    question: "Dispatchers",
    answer: (
       <>
                <strong>9-1-1 Wellness Resource</strong>
                <br />
                 <a href="mailto:CrewCare@ImageTrend.com" >CrewCare@ImageTrend.com</a>
                 <br />
                 <a href="https://911wellness.com/" target="_blank"  rel="noreferrer">Visit Site</a>
                 <br /><br />
                Awareness of the psychological risks facing 911 telecommunicators and in helping point the way to solutions.
                 <br />
                
                 
                </>
    )
  },
  {
    question: "General",
    answer: (
      <>
                <strong>National Suicide Prevention Lifeline</strong>
                <br />
                 <a href="tel:800-273-8255" >800-273-8255</a>
                 <br />

                <strong>Frontline Helpline</strong>
                <br />
                <a href="tel:+866-676-7500" >866-676-7500</a>
                <br />
                 <a href="frontlinerehab.com/helpline/" target="_blank"  rel="noreferrer">(218) 729-6480</a>                
                 <br /><br />
                 A program provided by Frontline Responder Services.
                 <br />
                 <strong>Crisis Text Line (USA)</strong>
                 <br />
                 <a href="sms:741741?body=HELP">Text HELP to 741741</a>
                 <br />
                 <strong>Physician Support Line</strong>
                 <br />
                 <a href="tel:888-409-0141" target="_blank"  rel="noreferrer">888-409-0141</a>
                 <br />
                  <a href="www.physiciansupportline.com/contact" target="_blank"  rel="noreferrer">Visit Site</a>
                 <br /><br />
                 Physician Support Line offers free and confidential peer support to American physicians and medical students by creating a safe space to discuss immediate life stressors with volunteer psychiatrist colleagues who are uniquely trained in mental wellness and also have similar shared experiences of the profession.   
                 <br />
                 <strong>Veterans Crisis Line (Veterans only)</strong>
                 <br />
                 <a href="tel:988" target="_blank"  rel="noreferrer">Dial 988 & press 1, or text 838255</a>
                 <br />
                  <a href="https://www.veteranscrisisline.net/" target="_blank"  rel="noreferrer">Visit Site</a>
                 <br /><br />
                 Veterans Crisis Line is here for you. You don't have to be enrolled in VA benefits or health care to call.
                 <br />
                 <strong>1st Help</strong>
                 <br />
                  <a href="www.1sthelp.net" target="_blank"  rel="noreferrer">Visit Site</a>
                 <br /><br />
                 Resource database for first responders.
                 <br />
                 <strong>International Critical Incident Stress Foundation (ICISF)</strong>
                 <br />
                 <a href="tel:410-750-9600" target="_blank"  rel="noreferrer">410-750-9600</a>
                 <br />
                  <a href="https://icisf.org/?srsltid=AfmBOoqepcZuoHRUWN5u-n7BJJp9WY2dFIum7CeUwKQ-ZvTYbuf_7BeJ/" target="_blank"  rel="noreferrer">Visit Site</a>
                 <br /><br />
                 ICISF provides support and information about disaster behavioral health to the emergency response professions, other organizations, and communities.
                 <br />
                 
                </>
    )
  }
 
      ].map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
         sx={{
        backgroundColor: "#f5f5f5",        // Default background
        color: "black",                    // Text color
        "&.Mui-expanded": {
        backgroundColor: "#e0e0e0",       // Background when expanded
        },
        "& .MuiAccordionSummary-root": {
        backgroundColor: "#1d1f53",       // Header background light blue 1976d2
        color: "#C9C8C7",                   // Header text color
        },
        "& .MuiAccordionSummary-expandIconWrapper": {
        color: "white",                   // Expand icon color
        },
        "& .MuiAccordionDetails-root": {
        backgroundColor: "#fafafa",       // Details background
        },
    }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      </Box>    
    </Grid>
  );
};

export default LawResources;