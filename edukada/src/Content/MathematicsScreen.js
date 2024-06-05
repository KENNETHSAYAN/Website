import React from 'react';
import Typography from '@mui/material/Typography';
import { Container, Paper, List, ListItem, ListItemText } from '@mui/material';

const MathematicsScreen = () => {
  return (
    <Container maxWidth="md" style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Mathematics
      </Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to the Mathematics course! Here, you will find a wealth of resources to help you learn and master mathematical concepts.
      </Typography>

      <Paper style={{ marginTop: '20px', padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Algebra
        </Typography>
        <Typography variant="body1" paragraph>
          Algebra involves the study of mathematical symbols and the rules for manipulating these symbols. It is a unifying thread of almost all of mathematics and includes everything from solving elementary equations to studying abstractions such as groups, rings, and fields.
        </Typography>
        <Typography variant="body1" paragraph>
          Example:
          <List sx={{ paddingLeft: '20px' }}>
            <ListItem>
              <ListItemText primary="Solving linear equations: 2x + 3 = 7" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Factoring polynomials: x^2 + 5x + 6 = 0" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Working with matrices: [[a, b], [c, d]] * [[x], [y]] = [[e], [f]]" />
            </ListItem>
          </List>
        </Typography>
      </Paper>

      <Paper style={{ marginTop: '20px', padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Geometry
        </Typography>
        <Typography variant="body1" paragraph>
          Geometry is concerned with properties of space that are related to distance, shape, size, and relative position of figures. It includes the study of points, lines, planes, surfaces, angles, and solids, and the relationships between them.
        </Typography>
        <Typography variant="body1" paragraph>
          Example:
          <List sx={{ paddingLeft: '20px' }}>
            <ListItem>
              <ListItemText primary="Finding the area of a triangle: A = 1/2 * base * height" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Calculating the volume of a sphere: V = (4/3) * π * r^3" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Determining the distance between two points in 3D space: d = sqrt((x2 - x1)^2 + (y2 - y1)^2 + (z2 - z1)^2)" />
            </ListItem>
          </List>
        </Typography>
      </Paper>

      <Paper style={{ marginTop: '20px', padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Calculus
        </Typography>
        <Typography variant="body1" paragraph>
          Calculus is the mathematical study of continuous change. It has two major branches: differential calculus (concerning rates of change and slopes of curves) and integral calculus (concerning accumulation of quantities and the areas under and between curves).
        </Typography>
        <Typography variant="body1" paragraph>
          Example:
          <List sx={{ paddingLeft: '20px' }}>
            <ListItem>
              <ListItemText primary="Finding the derivative of a function: f'(x) = lim(h→0) [(f(x + h) - f(x)) / h]" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Integrating a function over an interval: ∫[a, b] f(x) dx = lim(n→∞) Σ f(x_i) Δx" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Using calculus to optimize functions: Finding maximum or minimum values of functions" />
            </ListItem>
          </List>
        </Typography>
      </Paper>
    </Container>
  );
};

export default MathematicsScreen;
