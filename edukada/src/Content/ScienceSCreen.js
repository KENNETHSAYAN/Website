import React from 'react';
import Typography from '@mui/material/Typography';
import { Container, Paper } from '@mui/material';

const ScienceScreen = () => {
  return (
    <Container maxWidth="md" style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Science
      </Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to the Science course! Here, you will find a variety of topics covering the natural and physical sciences.
      </Typography>

      <Paper style={{ marginTop: '20px', padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Physics
        </Typography>
        <Typography variant="body1" paragraph>
          Physics is the natural science that studies matter, its motion and behavior through space and time, and the related entities of energy and force.
        </Typography>
        <Typography variant="body1" paragraph>
          Example:
          <ul>
            <li>Newton's Laws of Motion</li>
            <li>Electricity and Magnetism</li>
            <li>Thermodynamics</li>
            <li>Optics</li>
            <li>Astrophysics</li>
            <li>Quantum Mechanics</li>
            <li>Fluid Dynamics</li>
          </ul>
        </Typography>
      </Paper>

      <Paper style={{ marginTop: '20px', padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Chemistry
        </Typography>
        <Typography variant="body1" paragraph>
          Chemistry is the study of the properties and behavior of matter. It deals with the composition, structure, and properties of substances, as well as the changes they undergo during chemical reactions.
        </Typography>
        <Typography variant="body1" paragraph>
          Example:
          <ul>
            <li>Atomic Structure</li>
            <li>Chemical Bonding</li>
            <li>Acids and Bases</li>
            <li>Organic Chemistry</li>
            <li>Biochemistry</li>
            <li>Analytical Chemistry</li>
            <li>Physical Chemistry</li>
          </ul>
        </Typography>
      </Paper>

      <Paper style={{ marginTop: '20px', padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Biology
        </Typography>
        <Typography variant="body1" paragraph>
          Biology is the natural science that studies life and living organisms, including their physical structure, chemical processes, molecular interactions, physiological mechanisms, development, and evolution.
        </Typography>
        <Typography variant="body1" paragraph>
          Example:
          <ul>
            <li>Cell Biology</li>
            <li>Genetics</li>
            <li>Ecology</li>
            <li>Anatomy</li>
            <li>Physiology</li>
            <li>Microbiology</li>
            <li>Zoology</li>
          </ul>
        </Typography>
      </Paper>
    </Container>
  );
};

export default ScienceScreen;
