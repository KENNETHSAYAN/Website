import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'; // Importing useSelector from react-redux
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; // Import Button from MUI
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import { FaCirclePlus } from "react-icons/fa6";
import { MdExplore } from 'react-icons/md'; // Import Explore icon from 'react-icons/md'
import Cookies from 'js-cookie'; // For secure token storage
import http from '../axios';


export default function Profile() {
  const navigate = useNavigate();
  const tokens = Cookies.get('auth_token');
  const [data, setData] = useState(null);
  // const [tasks, setTasks] = useState({done: false});
  const [tasks, setTasks] = useState([]);
  const task = useSelector(state => state.tasks); // Accessing tasks from Redux store

  const handleTaskDoneToggle = (index) => {
    const updatedTasks = [...tasks];
    if (updatedTasks[index]) {
      updatedTasks[index].done = !updatedTasks[index].done;
      setTasks(updatedTasks);
    } else {
      console.error(`Task at index ${index} is undefined.`);
    }
  };

  useEffect(() => {
    if (!tokens) {
      navigate("/");
    } else {
      http.get('auth/users/me/', {
        headers: {
          'Authorization': `Token ${tokens}`
        }
      }).then((response) => setData(response.data)
      ).catch((error) =>
        console.log(error)
      )
    }
  }, [tokens, navigate]);

  const handleLogout = () => {
    Cookies.remove('auth_token');
    navigate('/');
  }

  return (
    <div>
      {data ? (
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%' }}>
          <Drawer
            sx={{
              width: 240,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: 240,
                boxSizing: 'border-box',
              },
            }}
            variant="permanent"
            anchor="center"
          >
            {/* Sidebar Content */}
            <List>
              <ListItem>
                <ListItemText
                  primary="Edukada"
                  primaryTypographyProps={{
                    variant: 'h5',
                    style: { fontWeight: 'bold', color: 'Black', marginLeft: '40px', marginTop: '6px', fontSize: '30px' },
                  }}
                />
              </ListItem>

              {/* Dashboard Link */}
              <ListItem component={Link} to="/Course">
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>

              {/* Explore Quiz Icon */}
              <ListItem sx={{ mt: 'auto' }} component={Link} to="/quiz">
                <ListItemIcon>
                  <MdExplore />
                </ListItemIcon>
                <ListItemText primary="Explore Quiz" />
              </ListItem>
            </List>
            
              {/* Profile Link */}
              <ListItem component={Link} to="/Profile">
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItem>
          </Drawer>

          {/* Dashboard Content */}
          <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginLeft: '150px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginLeft: '20px', marginTop: '10px' }}>
              <Typography variant="h5" gutterBottom>
                Profile
              </Typography>
              <Button onClick={handleLogout} sx={{ backgroundColor: 'black', color: 'white' }}>Sign Out</Button>
            </Box>

            <Box // profile box
              sx={{
                mt: 'auto', // Move the box to the middle vertically
                mx: 'auto', // Center the box horizontally
                display: 'flex',
                flexDirection: 'column',
                color: 'white',
                alignItems: 'center',
                bgcolor: 'purple', // Change the background color to light pink
                p: 2,
                borderRadius: '8px',
                width: '850px',
                height: '180px',
                position: 'relative',
                marginTop: '70px'
              }}
            >
              <Typography variant="subtitle1" sx={{ fontSize: '30px', fontWeight: 'bold', marginRight: '590px', marginTop: '20px' }}>{data.first_name} {data.last_name}</Typography>
              <Typography variant="body1" sx={{ fontSize: '16px', marginRight: '520px', marginTop: '15px' }}>Welcome to the Edukada Website!</Typography>
              <Avatar
                alt="Profile Icon"
                src="/assets/profile.png"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: '20px',
                  transform: 'translateY(-50%)',
                  width: 300,
                  height: 300,
                }}
              />
            </Box>
          </Box>
        </Box>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </div>
  );
}
