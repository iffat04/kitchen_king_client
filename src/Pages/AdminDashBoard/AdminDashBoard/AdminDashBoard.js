import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DiningIcon from '@mui/icons-material/Dining';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AddTaskIcon from '@mui/icons-material/AddTask';
import MenuIcon from '@mui/icons-material/Menu';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Outlet } from "react-router";
import image from '../../../images/Control Panel.gif'
import { CardMedia } from '@mui/material';
import video from '../../../images/Control Panel.mp4'
import image2 from '../../../images/manufacturing-process-animate.svg'
const drawerWidth = 240;

function UserDashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
     
  const drawer = (
    <div>
        <Toolbar>
        <DiningIcon  fontSize="large"  sx={{color:"orange"}}  />
            <Typography variant="h5" sx={{ justifyContent: 'center', marginRight:"20px" , color:"orange"}} >
            KithcenMaster 
            </Typography>
        </Toolbar>
      <Divider />
  
     
      <Divider />
      <List className="list-container">
          <Link to="manageOrders" style={{textDecoration:"none", color:"grey"}} >
          <ListItem button className="item">
            <ListItemIcon>
           < AddTaskIcon sx={{color:"orange"}} />
            </ListItemIcon>
            <ListItemText primary="Manage Orders" />
          </ListItem>
          </Link>

          <Link to="addProduct" style={{textDecoration:"none", color:"grey"}} >
          <ListItem button className="item">
            <ListItemIcon>
           <AddBoxIcon sx={{color:"orange"}} />
            </ListItemIcon>
            <ListItemText primary="Add Product" />
          </ListItem>
          </Link>

          <Divider />

          <Link to="makeAdmin" style={{textDecoration:"none",color:"grey" }} >
          <ListItem button className="item">
            <ListItemIcon>
           <AddModeratorIcon sx={{color:"orange"}} />
            </ListItemIcon>
            <ListItemText primary="Make Admin" />
          </ListItem>
          </Link>

          <Divider />

          <Link to="manageProducts" style={{textDecoration:"none", color:"grey"}} >
          <ListItem button className="item">
            <ListItemIcon>
           <SettingsApplicationsIcon sx={{color:"orange"}}  />
            </ListItemIcon>
            <ListItemText primary="Manage Products" />
          </ListItem>
          </Link>
          <Divider />
          <Link to="Log Out" style={{textDecoration:"none", color:"grey"}} >
          <ListItem button className="item">
            <ListItemIcon>
           <LogoutIcon sx={{color:"orange"}}  />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem>
          </Link>

      </List>

      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex',minHeight:"100vh" }}>
      <CssBaseline />
      <AppBar
        color="inherit"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          mt:{xs:"50px", md:"65px"},
        }}
      >
        <Toolbar>
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
            <span style={{color:"tomato"}}>Admin </span> DashBoard
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

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Outlet />
        
        <img height="300vh" src={image2} alt=""/>
      
        
        
        <Typography paragraph>

        </Typography>
       
      </Box>
    </Box>
  );
}

UserDashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default UserDashBoard;
