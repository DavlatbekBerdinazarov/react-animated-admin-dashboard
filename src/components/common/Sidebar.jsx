import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { images } from "../../assets";

const dashboardMenues = [
  {
    path: "home",
    title: "Dashboard",
    icon: <DashboardIcon/>,
    state: "dashboard"
  },
  {
    path: "employees",
    title: "Mijozlar",
    icon: <PeopleAltOutlinedIcon/>,
    state: "employees"
  },
  {
    path: "tasks",
    title: "Kategoriya",
    icon: <TextSnippetOutlinedIcon/>,
    state: "tasks"
  },
  {
    path: "userinfo",
    title: "Mahsulotlar",
    icon: <PersonOutlineOutlinedIcon/>,
    state: "userinfo"
  },
];

const preferenceIcons = [
  {
    path:"settings",
    title: "Sozlamalar",
    icon: <SettingsOutlinedIcon />,
    state: "financeadvice"
  },
  {
    path:"logout",
    title: "Chiqish",
    icon: <ExitToAppOutlinedIcon />,
    state: "savingaccount"
  }
];

const drawerWidth = 280;

function ResponsiveDrawer(props,{  }) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* logo */}
      <Box sx={{ marginLeft:"38px"}}>
        <img src={images.logo} width={220} alt="" />    
      </Box>
            {/* logo */}
      <Divider />
      <List
       sx={{ marginLeft:'18px',height:'70vh' }}>
        {dashboardMenues.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
             sx={{
              borderRadius: "6px",
              bgcolor: props.isActive ? 'rgba(67, 24, 255, 1)' : "",
              color: props.isActive ? colors.common.white : "",
              "&:hover": {
                bgcolor: props.isActive ? 'rgba(67, 24, 255, 1)' : "",
                color: props.isActive ? colors.common.white : "",
              }
            }}
            
            >
              <ListItemIcon
                 sx={{
                  minWidth: "40px",
                  color: props.isActive ? colors.common.white : "",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{position:'fixed', bottom:"0px",left:'18px'}}>
        {preferenceIcons.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor:'red',
          height:'60px'
        }}
      >
        <Toolbar sx={{  }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
