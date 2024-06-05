import React from 'react';
import Typography from '@mui/material/Typography';
import { Container, Paper, List, ListItem, ListItemText } from '@mui/material';

const HistoryScreen = () => {
  return (
    <Container maxWidth="md" style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        History
      </Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to the History course! Here, you will explore the fascinating stories of the past, understanding how events, cultures, and societies have shaped the world we live in today.
      </Typography>

      <Paper style={{ marginTop: '20px', padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Ancient Civilizations
        </Typography>
        <Typography variant="body1" paragraph>
          Learn about the rise and fall of ancient civilizations such as Mesopotamia, Egypt, Greece, and Rome. Discover their achievements, innovations, and cultural legacies that continue to influence modern society.
        </Typography>
        <Typography variant="body1" paragraph>
          Examples:
          <List sx={{ paddingLeft: '20px' }}>
            <ListItem>
              <ListItemText primary="The construction of the Great Pyramid of Giza" />
            </ListItem>
            <ListItem>
              <ListItemText primary="The development of democracy in ancient Athens" />
            </ListItem>
            <ListItem>
              <ListItemText primary="The conquests of Alexander the Great" />
            </ListItem>
            <ListItem>
              <ListItemText primary="The establishment of the Roman Republic" />
            </ListItem>
            <ListItem>
              <ListItemText primary="The spread of Christianity in the Roman Empire" />
            </ListItem>
          </List>
        </Typography>
      </Paper>

      <Paper style={{ marginTop: '20px', padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          World Wars
        </Typography>
        <Typography variant="body1" paragraph>
          Explore the causes, events, and consequences of World War I and World War II. Analyze the political, social, and economic impact of these global conflicts on nations and societies around the world.
        </Typography>
        <Typography variant="body1" paragraph>
          Examples:
          <List sx={{ paddingLeft: '20px' }}>
            <ListItem>
              <ListItemText primary="The assassination of Archduke Franz Ferdinand" />
            </ListItem>
            <ListItem>
              <ListItemText primary="The Treaty of Versailles and its repercussions" />
            </ListItem>
            <ListItem>
              <ListItemText primary="The rise of totalitarian regimes" />
            </ListItem>
            <ListItem>
              <ListItemText primary="The Holocaust and its legacy" />
            </ListItem>
            <ListItem>
              <ListItemText primary="The atomic bombings of Hiroshima and Nagasaki" />
            </ListItem>
          </List>
        </Typography>
      </Paper>

      <Paper style={{ marginTop: '20px', padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Modern History
        </Typography>
        <Typography variant="body1" paragraph>
          Examine key moments and movements in modern history, including the Cold War, decolonization, civil rights movements, and the globalization of the world economy. Understand how these developments have shaped contemporary geopolitics and society.
        </Typography>
        <Typography variant="body1" paragraph>
          Examples:
          <List sx={{ paddingLeft: '20px' }}>
            <ListItem>
              <ListItemText primary="The Cuban Missile Crisis" />
            </ListItem>
            <ListItem>
              <ListItemText primary="The collapse of the Soviet Union" />
            </ListItem>
            <ListItem>
              <ListItemText primary="The independence movements in Africa and Asia" />
            </ListItem>
            <ListItem>
              <ListItemText primary="The civil rights movement in the United States" />
            </ListItem>
            <ListItem>
              <ListItemText primary="The rise of globalization and multinational corporations" />
            </ListItem>
          </List>
        </Typography>
      </Paper>
    </Container>
  );
};

export default HistoryScreen;
