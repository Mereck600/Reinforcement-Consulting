import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import PageTitle from '../components/PageTitle';

const PrivacyPolicy = () => {
    return (
        <Container maxWidth="md">
            <PageTitle
                title="Notice of Privacy Practices"
                description="This notice illustrates how your medical information may be used, disclosed, and accessed. Please read it carefully."
            />
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Box mb={3}>
                    <Typography variant="body1" paragraph>
                        This Notice is in effect as of 08/01/2024.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        We are required by law to maintain privacy and protection of your health information and must inform you of your privacy practices and legal duties. You have the right to obtain a paper copy of this Notice at any time.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        We, Reinforcement Consulting, serve as the designated Privacy Officer to answer your questions about our privacy practices and to ensure compliance with applicable laws and regulations. The Privacy Officer is responsible for addressing complaints and providing you information on how to file a complaint.
                    </Typography>
                </Box>

                <Box mb={3}>
                    <Typography variant="h6" gutterBottom>
                        Use and Disclosure of Your Protected Health Information
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Information contained in your records may be used to provide your treatment, obtain payment for services, and assist in health care operations. We may disclose information to aid you in obtaining health care services from other providers, to obtain payment from insurers, and to review records for efficacy.
                    </Typography>
                </Box>

                <Box mb={3}>
                    <Typography variant="h6" gutterBottom>
                        Your Rights
                    </Typography>
                    <Typography variant="body1" paragraph>
                        You have the right to request restricted use of your information, receive confidential communication, review and obtain a copy of your record, request amendments to your information, and file complaints regarding this privacy policy.
                    </Typography>
                </Box>

                <Box mb={3}>
                    <Typography variant="h6" gutterBottom>
                        Disclosures Without Your Permission
                    </Typography>
                    <Typography variant="body1" paragraph>
                        There are certain situations where we are allowed or required by law to disclose information without your permission, such as in cases of suspected abuse, imminent danger, or as required by court order.
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="body1">
                        For a full detailed version of our privacy policy, including information on research use, specialized government purposes, and more, please contact our office.
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
};

export default PrivacyPolicy;
