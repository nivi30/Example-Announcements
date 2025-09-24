import React, { useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline, Box, Container, Card, CardContent, Grid, Typography, Button, IconButton, Modal, Paper, Chip, Divider } from '@mui/material';
import { LightMode, DarkMode, Close, RocketLaunch, Update, BugReport, Help } from '@mui/icons-material';
import { alpha } from '@mui/material/styles';

const cardData = [
  {
    tag: 'New Feature',
    severity: 'success',
    icon: <RocketLaunch fontSize="large" />,
    date: 'Oct 26, 2023',
    title: 'System Update v3.0 Is Live!',
    description: "We're excited to announce a major update with new features and a refreshed user interface.",
    expandedContent: "This major update introduces a new dark mode, an improved search algorithm for faster results, and custom dashboard layouts. We've listened to your feedback and focused on features that enhance productivity and personalize your workspace.",
    buttonText: 'Read More',
    borderColor: '#4CAF50'
  },
  {
    tag: 'Update',
    severity: 'info',
    icon: <Update fontSize="large" />,
    date: 'Oct 24, 2023',
    title: 'Scheduled Maintenance',
    description: "We'll be conducting scheduled maintenance this weekend to improve our infrastructure.",
    expandedContent: "The maintenance window is scheduled for Saturday, October 28th, from 10:00 PM to Sunday, October 29th, 2:00 AM (PST). This will ensure the stability and security of our services as we migrate to a new server architecture. We appreciate your patience.",
    buttonText: 'See Schedule',
    borderColor: '#2196F3'
  },
  {
    tag: 'Issues',
    severity: 'error',
    icon: <BugReport fontSize="large" />,
    date: 'Oct 21, 2023',
    title: 'Issues/Errors',
    description: "Our team is actively monitoring for and resolving any reported issues or errors.",
    expandedContent: "Currently, we are aware of a login issue affecting some users on mobile devices. A fix is being deployed, and we will provide an update as soon as the issue is resolved. In the meantime, please try using the desktop application.",
    buttonText: 'Report an Issue',
    borderColor: '#F44336'
  },
  {
    tag: 'FAQ',
    severity: 'warning',
    icon: <Help fontSize="large" />,
    date: 'Oct 18, 2023',
    title: 'FAQ',
    description: 'Find answers to the most common questions about our platform and services.',
    expandedContent: "Our FAQ covers topics from account management and billing to technical support and feature guides. If you can't find the answer you're looking for, our support team is always ready to assist you.",
    buttonText: 'View FAQ',
    borderColor: '#FF9800'
  },
];

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a2027',
      secondary: '#4f5b66',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1a2027',
      paper: '#2d3748',
    },
    text: {
      primary: '#e2e8f0',
      secondary: '#a0aec0',
    },
  },
});

export const Cardview = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleExpandClick = (card) => {
    setExpandedCard(card);
  };

  const handleCloseDialog = () => {
    setExpandedCard(null);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        // minHeight: '100vh',
        minWidth: '100vw',
        p: 4,
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'background-color 0.3s',
        backgroundColor: theme.palette.background.default
      }}>
        <Container maxWidth={false} disableGutters sx={{ position: 'relative', px: 0 }}>
          <Typography variant="h3" component="h1" fontWeight="extrabold" gutterBottom sx={{ color: theme.palette.text.primary, mb: 4 }}>
            1. (Cards view) - Latest Updates 
          </Typography>
          <IconButton
            onClick={toggleDarkMode}
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              bgcolor: theme.palette.background.paper,
              color: theme.palette.text.primary,
            }}
          >
            {isDarkMode ? <LightMode /> : <DarkMode />}
          </IconButton>

          <Grid container spacing={2} sx={{ width: '100%', margin: 0 }}>
            {cardData.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card
                  variant="outlined"
                  onClick={() => handleExpandClick(card)}
                  sx={{
                    flexShrink: 0,
                    width: '320px',
                    height: '300px',
                    borderLeftColor: theme.palette[card.severity].main,
                    borderLeftWidth: '4px',
                    borderRadius: '16px',
                    bgcolor: theme.palette.background.paper,
                    cursor: 'pointer',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 0 15px 3px ${theme.palette[card.severity].main}80`
                    }
                  }}
                >
                  <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Chip
                        label={card.tag}
                        size="small"
                        variant='outlined'
                        sx={{
                          backgroundColor: alpha(card.borderColor, 0.1),
                          color: card.borderColor,
                          borderColor: card.borderColor,
                          fontWeight: 'bold',
                        }}
                      />
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>{card.date}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                      <Box sx={{ color: theme.palette[card.severity].main, mb:10, mr: 2, mt: 2 }}>
                        {card.icon}
                      </Box>
                      <Box>
                        <Typography variant="h5" component="h3" fontWeight="bold" sx={{ color: theme.palette.text.primary, mb: 1 }}>
                          {card.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>{card.description}</Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ mt: 'auto', pt: 2, display: 'flex', justifyContent: 'center' }}>
                      <Button
                        // fullWidth
                        variant="outlined"
                        sx={{
                          width: '80%',
                          borderRadius: '999px',
                          color: theme.palette.text.primary,
                          borderColor: theme.palette.text.primary,
                          '&:hover': {
                            bgcolor: theme.palette.text.primary,
                            color: theme.palette.background.default,
                            borderColor: theme.palette.text.primary,
                          },
                        }}
                      >
                        {card.buttonText}
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Modal
            open={!!expandedCard}
            onClose={handleCloseDialog}
            closeAfterTransition
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Paper
              sx={{
                width: '90%',
                maxWidth: '600px',
                p: 4,
                borderRadius: '16px',
                bgcolor: theme.palette.background.paper,
                boxShadow: 24,
                animation: 'modal-fade-in 0.3s ease-out',
                '@keyframes modal-fade-in': {
                  from: { opacity: 0, transform: 'scale(0.9)' },
                  to: { opacity: 1, transform: 'scale(1)' },
                },
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Typography variant="h4" component="h2" fontWeight="bold" sx={{ color: theme.palette.text.primary }}>
                  {expandedCard?.title}
                </Typography>
                <IconButton onClick={handleCloseDialog} sx={{ color: theme.palette.text.secondary }}>
                  <Close />
                </IconButton>
              </Box>
              <Divider sx={{ mb: 2, borderColor: theme.palette.divider }} />
              <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.7 }}>
                {expandedCard?.expandedContent}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                <Button onClick={handleCloseDialog} color="primary">GOT IT</Button>
              </Box>
            </Paper>
          </Modal>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Cardview;
