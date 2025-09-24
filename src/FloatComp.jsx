import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import Fab from '@mui/material/Fab';
import CampaignIcon from '@mui/icons-material/Campaign';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build'; // Icon for maintenance
import Avatar from '@mui/material/Avatar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// A theme with colors specifically for an announcement icon.
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff9800', // A vibrant orange commonly used for announcements
    },
    secondary: {
      main: '#d32f2f', // A classic red for the high-contrast badge
    },
    background: {
      default: '#f8f9fa',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  components: {
    MuiFab: {
      styleOverrides: {
        root: {
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          color: '#fff',
          fontWeight: 'bold',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          marginBottom: '16px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

/**
 * An array of mock announcement data.
 * In a real application, this data would come from an API.
 */
const announcements = [
  {
    id: 1,
    date: 'Oct 17, 2023',
    title: 'New Feature: AI-Powered Insights',
    description: `We're thrilled to introduce our new AI-Powered Insights feature, designed to help you make smarter, faster decisions. This module leverages machine learning to analyze your data and identify hidden trends, anomalies, and opportunities. You can access it directly from your dashboard and customize reports to focus on the metrics that matter most to your business. This update is a game-changer for data-driven strategy and is now available to all users.`,
    icon: <RocketLaunchIcon />,
    iconBgColor: '#e0f7fa',
    collapsible: true,
  },
  {
    id: 2,
    date: 'Oct 12, 2023',
    title: 'Dashboard Performance Update',
    description: `We have rolled out a major backend update that significantly improves your dashboard's performance. You can now expect your dashboards to load up to 50% faster, providing a much smoother and more responsive experience. These optimizations are part of our ongoing commitment to enhance platform speed and reliability. Thank you for your patience as we continue to work on making your daily workflow as efficient as possible.`,
    icon: <TrendingUpIcon />,
    iconBgColor: '#e8f5e9',
    collapsible: true,
  },
  {
    id: 3,
    date: 'Oct 5, 2023',
    title: 'Upcoming: API Changes',
    description: `Heads up, developers! On November 1st, we will be updating our public API to version 2.0. This new version includes a more consistent and robust set of endpoints, improved security, and better performance. We've also updated our documentation with clear examples and migration guides to ensure a smooth transition. We encourage all developers to start testing with the new API in our sandbox environment to prepare for the update.`,
    icon: <CodeIcon />,
    iconBgColor: '#f3e5f5',
    collapsible: false,
  },
  {
    id: 4,
    date: 'Sep 24, 2025',
    title: 'Scheduled Maintenance',
    description: `We have scheduled a system-wide maintenance window for our servers on October 25th, from 2:00 AM to 6:00 AM UTC. This essential maintenance is to upgrade our infrastructure and improve overall security and stability. During this period, the service may be temporarily unavailable. We apologize for any inconvenience this may cause and appreciate your understanding as we work to provide a better service.`,
    icon: <BuildIcon />,
    iconBgColor: '#ffecb3',
    collapsible: false,
  },
];


/**
 * A floating announcement icon component with a notification badge.
 * This component is designed to be placed in a fixed position on the screen.
 */
const FloatingAnnouncementIcon = () => {
  const [notificationCount, setNotificationCount] = useState(announcements.length);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [expandedAnnouncementId, setExpandedAnnouncementId] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleAnnouncementClick = () => {
    setIsDrawerOpen(true);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
    if (!open) {
      setNotificationCount(0);
    }
  };

  const toggleTextExpansion = (id) => {
    setExpandedAnnouncementId(prevId => prevId === id ? null : id);
  };

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1000,
        }}
      >
        <Badge
          badgeContent={notificationCount}
          color="secondary"
          max={99}
          overlap="circular"
          sx={{
            zIndex: 1100, // Ensure badge is above Fab
            '& .MuiBadge-badge': {
            zIndex: 1101, // Higher than Fab
            },
          }}
        >
          <Fab
            color="primary"
            aria-label="announcements"
            onClick={handleAnnouncementClick}
            sx={{
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
              borderRadius: '50%',
              zIndex: 1000
            }}
            size="large"
          >
            <CampaignIcon sx={{ fontSize: '32px' }} />
          </Fab>
        </Badge>
      </Box>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            width: 350,
            p: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
          role="presentation"
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" component="div">
              Announcements
            </Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Catch up on the latest news and updates
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <List sx={{ p: 0 }}>
            {announcements.map((announcement) => (
              announcement.collapsible ? (
                <Accordion
                  key={announcement.id}
                  expanded={expanded === `panel${announcement.id}`}
                  onChange={handleChange(`panel${announcement.id}`)}
                  sx={{
                    mb: 2,
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                    borderRadius: '8px',
                    '&:before': {
                      display: 'none',
                    },
                    '&.Mui-expanded': {
                      m: 0,
                      mb: 2,
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${announcement.id}-content`}
                    id={`panel${announcement.id}-header`}
                    sx={{
                      p: 2,
                      bgcolor: '#fff',
                      borderRadius: '8px',
                      '&.Mui-expanded': {
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 48, pt: '4px' }}>
                      <Avatar sx={{ bgcolor: announcement.iconBgColor, color: 'text.primary' }}>
                        {announcement.icon}
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      sx={{ my: 0 }}
                      primary={
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <Typography variant="caption" color="text.secondary">
                            {announcement.date}
                          </Typography>
                          <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
                            {announcement.title}
                          </Typography>
                        </Box>
                      }
                    />
                  </AccordionSummary>
                  <AccordionDetails sx={{ p: 2, pt: 0, bgcolor: '#fff', borderTop: '1px solid #eee' }}>
                    <Typography variant="body2" color="text.secondary">
                      {announcement.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ) : (
                <ListItem
                  key={announcement.id}
                  disablePadding
                  sx={{
                    alignItems: 'flex-start',
                    p: 2,
                    mb: 2,
                    borderRadius: '8px',
                    bgcolor: '#fff',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                    '&:last-child': {
                      mb: 0,
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 48, pt: '4px' }}>
                    <Avatar sx={{ bgcolor: announcement.iconBgColor, color: 'text.primary' }}>
                      {announcement.icon}
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary={
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="caption" color="text.secondary">
                          {announcement.date}
                        </Typography>
                        <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
                          {announcement.title}
                        </Typography>
                      </Box>
                    }
                    secondary={
                      <Box>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          component="span"
                          sx={{
                            mt: 0.5,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: expandedAnnouncementId === announcement.id ? 'unset' : 4,
                            WebkitBoxOrient: 'vertical',
                            whiteSpace: 'pre-line',
                          }}
                        >
                          {announcement.description}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="span"
                          onClick={() => toggleTextExpansion(announcement.id)}
                          sx={{
                            cursor: 'pointer',
                            color: 'primary.main',
                            textDecoration: 'underline',
                            mt: 1,
                            display: 'inline-block',
                          }}
                        >
                          {expandedAnnouncementId === announcement.id ? 'show less' : 'show more'}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
              )
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

// The main App component that renders the entire application.
const FloatComp = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth="md"
        sx={{
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
      </Container>
      <FloatingAnnouncementIcon />
    </ThemeProvider>
  );
};

export default FloatComp;
