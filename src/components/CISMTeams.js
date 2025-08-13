import React, { useState } from "react";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,Box,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const CISMTeams = () => {
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
                question: "Central MN CISM Program",
                answer: (
                <>
                <strong>24/7: </strong>
                
                 <a href="tel:800-556-4911 " >800-556-4911 </a> Direct service requests only.
                 <br />
                 Program information and Education requests:
                 <a href="tel:320-656-6122"  target="_blank"  rel="noreferrer">320-656-6122</a>
                 <br /><br />
                 Counties served: Cass, Wadena, Crow Wing, Todd, Morrison, Mille Lacs, Kanabec, Pine, Stearns, Benton, Wright
                 <br />
                
                </>
                )

            },
            {
    question: "Arrowhead CISM Team",
    answer: (
      <>
                <strong>24/7: </strong>
                <br />
                 <a href="tel:218-625-3581" >218-625-3581</a> Direct service requests only. 
                 <br />
                 CISM program information and Education requests: 
                 <a href="tel:800-247-1283"  target="_blank"  rel="noreferrer">800-247-1283</a> or <a href="tel:218-726-0070"  target="_blank"  rel="noreferrer">218-726-0070</a> AEMSA
                 <br /><br />
                <a href="tel:+1888-731-3473"  target="_blank"  rel="noreferrer" >888-731-3473</a>
                <br />
                 <a href="https://arrowheadems.com/programs-projects/arrowhead-cism/"  target="_blank"  rel="noreferrer">Vist Site</a>                
                 <br /><br />
                 Counties served: St. Louis, Carlton, Lake, Cook, Aitkin, Itasca, Koochiching, Douglas in WI
                 <br />
                
                </>
    )
  },
  {
    question: "Metro CISM Program",
    answer: (
       <>
                <strong>24/7: </strong>
                <br />
                 <a href="tel:612-347-5710" >612-347-5710</a> Direct service requests only. 
                 <br />
                 CISM program information and Education requests: 
                 <a href="www.metrocism.org"  target="_blank"  rel="noreferrer">Visit Site</a>
                 <br /><br />
                 Counties served: Hennepin, Ramsey, Washington, Isanti, Chisago, Carver, Scott, Dakota, Sherburne
                 <br />
                
                </>
    )
  },
  {
    question: "South Central MN EMS CISM Team",
    answer: (
       <>
                <strong>24/7: </strong>
                <br /> 
                 <a href="tel: 507-526-6180" >507-526-6180 </a> Direct service requests only. 
                 <br />
                 CISM program information and Education requests: 
                 <a href="tel:507-257-3224"  target="_blank"  rel="noreferrer">507-257-3224</a>
                 <br /><br />
                 Counties served: Seeley, Nicollet, Brown, Le Sueur, Blue Earth, Waseca, Faribault, Martin, Watonwan
                 <br />
                
                </>
    )
  },
  {
    question: "Southeastern MN CISM Program",
    answer: (
        <>
                <strong>24/7: </strong>
                <br />
                 <a href="tel: 800-237-6822" >800-237-6822 </a> Direct service requests only. 
                 <br />
                 CISM program information and Education requests: 
                 <a href="tel:800-850-3397"  target="_blank"  rel="noreferrer">800-850-3397</a>
                 <br /><br />
                 Counties served: Price, Goodhue, Wabasha, Steele, Dodge, Olmsted, Winona, Freeborn, Mower, Fillmore, Houston
                 <br />
                
                </>
    )
  },
  {
    question: "Southwest MN CISM Program",
    answer: (
      <>
                <strong>24/7: </strong>
                <br />
                 <a href="tel:507-537-7666" >507-537-7666 </a> Direct service requests only. 
                 <br />
                 CISM program information and Education requests: 
                 <a href="tel:507-537-9677"  target="_blank"  rel="noreferrer"> 507-537-9677 </a>
                 <br /><br />
                 Counties served: Big Stone, Swift, Kandiyohi, Meeker, Chippewa, Lac qui Parle, Yellow Medicine, Renville, Mcleod, Lincoln, Lyon, Redwood, Pipestone, Rock, Cottonwood, Murray, Jackson, Nobles
                 <br />
                
                </>
    )
  },
   {
    question: "NW MN CISM Team",
    answer: (
        <>
                <strong>Contact Polk County Sheriff's Office</strong>
                <br />
                 Phone: <a href="tel:218-281-0431" >Dispatch 218-281-0431  </a> Direct service requests only. 
                 <br />
                 CISM program information and Education requests: 
                 <a href="tel:507-537-9677"  target="_blank"  rel="noreferrer"> 507-537-9677 </a>
                 <br /><br />
                 Counties served: Primarily, Polk. As available, coverage for Kittson, Roseau, Lake of the Woods, Marshall, Beltrami, Pennington, Red Lake, Clearwater, Mahnomen, Norman, Hubbard
                 <br />
                
                </>
    )
  },
   {
    question: "West Central MN CISM Program",
    answer: (
     <>
                <strong>24/7: </strong>
                <br />
                 <a href="tel:218-347-1699" > 218-347-1699 </a> Direct service requests only. 
                 <br />
                 CISM program information and Education requests: 
                 <a href="http://paemseducation.com"  target="_blank"  rel="noreferrer">Visit Site </a>
                 <br /><br />
                 Counties served: Becker, Clay, Wilkin, Otter Tail, Grant, Douglas, Traverse, Stevens, Pope
                 <br />
                
                </>
    )
  },
   {
    question: "Anoka County CISM Team",
    answer: (
      <>
                <strong>Anoka County Sheriff's Office </strong>
                <br />
                 <a href="tel:763-324-5032" >763-324-5032 </a> 
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
            backgroundColor: "#1d1f53",       // Header background
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

export default CISMTeams;