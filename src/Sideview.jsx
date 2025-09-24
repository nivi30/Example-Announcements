import React, { useState } from 'react';
import {
  Box,
  Card,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Modal,
  Button,
} from '@mui/material';
import {
  RocketLaunch,
  Speed,
  Api,
  ArrowForward,
  Campaign,
  Close
} from '@mui/icons-material';

const useStyles = () => ({
  card: {
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    padding: '24px',
    backgroundColor: '#fff',
    maxWidth: '400px',
    margin: '20px auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
  },
  headerText: {
    fontWeight: 600,
    fontSize: '24px',
    color: '#333',
  },
  listItem: {
    padding: '16px 0',
    display: 'flex',
    alignItems: 'flex-start',
  },
  iconContainer: {
    minWidth: '40px',
    marginRight: '16px',
  },
  iconWrapper: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    fontSize: '12px',
    color: '#888',
    marginBottom: '4px',
  },
  titleText: {
    fontWeight: 600,
    color: '#333',
    marginBottom: '8px',
  },
  descriptionText: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '16px',
  },
  actionButton: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: 500,
    width: 'fit-content',
    cursor: 'pointer',
    textDecoration: 'none',
    borderRadius: '8px',
    padding: '8px 16px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      textDecoration: 'none',
      filter: 'brightness(95%)',
    },
  },
  launchIconWrapper: {
    backgroundColor: '#f1f0ff',
    color: '#6c63ff',
  },
  speedIconWrapper: {
    backgroundColor: '#e7fff1',
    color: '#52d385',
  },
  apiIconWrapper: {
    backgroundColor: '#fff0fe',
    color: '#ff63b4',
  },
  // Highlighting button colors with background
  launchActionButton: {
    backgroundColor: '#f1f0ff',
    color: '#6c63ff',
  },
  speedActionButton: {
    backgroundColor: '#e7fff1',
    color: '#52d385',
  },
  apiActionButton: {
    backgroundColor: '#fff0fe',
    color: '#ff63b4',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalPaper: {
    backgroundColor: '#fff',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
    padding: '24px',
    borderRadius: '16px',
    width: '100%',
    maxWidth: '600px',
    outline: 'none',
  },
  modalHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
    position: 'relative',
  },
  modalCloseButton: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  modalIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '16px',
  },
  modalTitle: {
    fontWeight: 600,
    fontSize: '24px',
    color: '#333',
    margin: 0,
  },
  modalDescription: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '24px',
  },
  gotItButton: {
    backgroundColor: '#6c63ff',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#5a55d4',
    },
    borderRadius: '8px',
    fontWeight: 'bold',
  },
});

const updates = [
  {
    date: 'Oct 17, 2023',
    title: 'New Feature: AI-Powered Insights',
    description: 'Discover deeper trends with our new AI analytics module. It’s smarter and faster.',
    icon: <RocketLaunch />,
    actionText: 'View Feature',
    iconWrapperStyle: 'launchIconWrapper',
    actionButtonStyle: 'launchActionButton',
  },
  {
    date: 'Oct 12, 2023',
    title: 'Dashboard Performance Update',
    description: 'We’ve rolled out an update that makes your dashboard load 50% faster. Enjoy the speed!',
    icon: <Speed />,
    actionText: 'Learn More',
    iconWrapperStyle: 'speedIconWrapper',
    actionButtonStyle: 'speedActionButton',
  },
  {
    date: 'Oct 5, 2023',
    title: 'Upcoming: API Changes',
    description: 'Heads up! We’re updating our API to be more robust and easier to use. Check the docs.',
    icon: <Api />,
    actionText: 'Read Docs',
    iconWrapperStyle: 'apiIconWrapper',
    actionButtonStyle: 'apiActionButton',
  },
];

const Sideview = () => {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleOpen = (item) => {
    setModalContent(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography variant="h3" component="h1" fontWeight="extrabold" gutterBottom sx={{ mb: 4 }}>
        2. (Side view) - Dashboard similar
      </Typography>

    <Box sx={{ p: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', backgroundColor: '#f0f4f9' }}>
      <Card sx={styles.card}>
        <Box sx={styles.header}>
          <Typography variant="h5" sx={styles.headerText}>
            What's New
          </Typography>
          <IconButton aria-label="notifications">
            <Campaign sx={{ color: '#888' }} />
          </IconButton>
        </Box>
        <List disablePadding>
          {updates.map((item, index) => (
            <React.Fragment key={item.date}>
              <ListItem sx={styles.listItem} disablePadding>
                <ListItemIcon sx={styles.iconContainer}>
                  <Box sx={{ ...styles.iconWrapper, ...styles[item.iconWrapperStyle] }}>
                    {item.icon}
                  </Box>
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Box>
                      <Typography sx={styles.dateText}>{item.date}</Typography>
                      <Typography variant="subtitle1" sx={styles.titleText}>{item.title}</Typography>
                      <Typography variant="body2" sx={styles.descriptionText}>{item.description}</Typography>
                      <Box
                        sx={{ ...styles.actionButton, ...styles[item.actionButtonStyle] }}
                        onClick={() => handleOpen(item)}
                      >
                        <Typography sx={{ mr: 1, fontWeight: 'bold' }}>{item.actionText}</Typography>
                        <ArrowForward fontSize="small" />
                      </Box>
                    </Box>
                  }
                />
              </ListItem>
              {index < updates.length - 1 && <Divider component="li" />}
            </React.Fragment>
          ))}
        </List>
      </Card>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        sx={styles.modal}
        open={open}
        onClose={handleClose}
      >
        <Box sx={styles.modalPaper}>
          <Box sx={styles.modalHeader}>
            <Box sx={{ ...styles.modalIcon, ...styles[modalContent.iconWrapperStyle] }}>
              {modalContent.icon}
            </Box>
            <Typography id="transition-modal-title" variant="h6" component="h2" sx={styles.modalTitle}>
              {modalContent.title}
            </Typography>
            <IconButton onClick={handleClose} sx={styles.modalCloseButton} aria-label="close">
              <Close />
            </IconButton>
          </Box>
          <Typography id="transition-modal-description" sx={styles.modalDescription}>
            {modalContent.description}
          </Typography>
          <Button onClick={handleClose} variant="contained" sx={styles.gotItButton}>
            Got It!
          </Button>
        </Box>
      </Modal>
    </Box>
    </>
  );
};

export default Sideview;
