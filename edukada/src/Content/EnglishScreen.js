import React from 'react';
import Typography from '@mui/material/Typography';
import { Container, Paper, List, ListItem, ListItemText } from '@mui/material';

const EnglishScreen = () => {
  return (
    <Container maxWidth="md" style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        English
      </Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to the English course! Here, you will delve into the rich world of language and literature, exploring the nuances of communication and expression.
      </Typography>

      <Paper style={{ marginTop: '20px', padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Literary Analysis
        </Typography>
        <Typography variant="body1" paragraph>
          Dive into the world of literature, analyzing themes, characters, and narratives across various genres such as novels, plays, poetry, and short stories. Explore the works of renowned authors and gain insights into the human experience.
        </Typography>
        <Typography variant="body1" paragraph>
          Examples:
          <List sx={{ paddingLeft: '20px' }}>
            <ListItem>
              <ListItemText primary="Analyze the themes of love and loss in Shakespeare's 'Romeo and Juliet'" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Examine the symbolism of the green light in F. Scott Fitzgerald's 'The Great Gatsby'" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Explore the existential themes in Albert Camus' 'The Stranger'" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Discuss the portrayal of social class in Jane Austen's 'Pride and Prejudice'" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Interpret the allegorical elements in George Orwell's 'Animal Farm'" />
            </ListItem>
          </List>
        </Typography>
      </Paper>

      <Paper style={{ marginTop: '20px', padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Language Skills
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your language skills through reading, writing, speaking, and listening activities. Improve your vocabulary, grammar, and comprehension abilities to effectively communicate and express ideas in English.
        </Typography>
        <Typography variant="body1" paragraph>
          Examples:
          <List sx={{ paddingLeft: '20px' }}>
            <ListItem>
              <ListItemText primary="Expand your vocabulary by reading diverse genres of literature" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Practice writing essays, stories, and poems to develop your writing skills" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Engage in conversations with native speakers to improve your speaking fluency" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Listen to podcasts, audiobooks, and speeches to enhance your listening comprehension" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Use grammar exercises and quizzes to reinforce grammatical rules" />
            </ListItem>
          </List>
        </Typography>
      </Paper>

      <Paper style={{ marginTop: '20px', padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Communication and Rhetoric
        </Typography>
        <Typography variant="body1" paragraph>
          Learn the art of persuasion and effective communication through the study of rhetoric and public speaking. Develop your ability to articulate ideas, engage with different audiences, and convey messages convincingly.
        </Typography>
        <Typography variant="body1" paragraph>
          Examples:
          <List sx={{ paddingLeft: '20px' }}>
            <ListItem>
              <ListItemText primary="Deliver persuasive speeches on topics of interest or social issues" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Participate in debates to refine your argumentation and critical thinking skills" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Create compelling presentations using visual aids and storytelling techniques" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Write persuasive essays advocating for specific viewpoints or causes" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Practice active listening and empathy in communication to build rapport and trust" />
            </ListItem>
          </List>
        </Typography>
      </Paper>
    </Container>
  );
};

export default EnglishScreen;
