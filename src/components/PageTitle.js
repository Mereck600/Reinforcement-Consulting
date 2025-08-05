import { Typography, Box, Paper } from '@mui/material';

const PageTitle = ({ title, description }) => {
    return (
        <Paper elevation={18} sx={{ p: 2, mb: 2, textAlign: "center", borderRadius: "15px" }}>
            <Box>
            <Typography variant="h4" component="h1" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body1">
                    {description}
                </Typography>
            </Box>
        </Paper>
    );
};

export default PageTitle;