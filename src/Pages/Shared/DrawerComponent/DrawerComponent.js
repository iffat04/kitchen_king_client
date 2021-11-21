import React, { useState } from "react";
import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@mui/styles';
import {Paper,Menu, MenuItem } from '@mui/material'; 
import { yellow, orange } from '@mui/material/colors';
import useMediaQuery from '@mui/material/useMediaQuery';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import MenuIcon from '@mui/icons-material/Menu';
import LabelIcon from '@mui/icons-material/Label';
import PersonIcon from '@mui/icons-material/Person';
import { makeStyles } from '@mui/styles';
import useAuth from '../../../hooks/useAuth'
const useStyles = makeStyles(()=>({
  link:{
      textDecoration:"none",
      color: "blue",
      fontSize: "20px",
  },
  icon:{
      color: "white"
  }
}));

function DrawerComponent() {
const classes = useStyles();
const [openDrawer, setOpenDrawer] = useState(false);
const {user, logOut, isloading, admin} = useAuth();
const dashBoardPath = admin? '/adminDashBoard' : '/userDashBoard';
return (
  <>
    <Drawer
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      <List>
      <Link style={{textDecoration:"none", color:"tomato"}} to='/'>
       <ListItem onClick={() => setOpenDrawer(false)}>
          <ListItemText>
           Home
          </ListItemText>
        </ListItem>
        </Link>
        <Divider />

        <Link style={{textDecoration:"none", color:"tomato"}} to='/allProducts'>     
        <ListItem onClick={() => setOpenDrawer(false)}>
          <ListItemText>
            Explore
          </ListItemText>
        </ListItem>
        </Link>
        <Divider />

       
        {user.email &&
              <Link style={{textDecoration:"none", color:"tomato"}} to={dashBoardPath}>
               <ListItem onClick={() => setOpenDrawer(false)}>
               <ListItemText>
               DashBoard
               </ListItemText>
             </ListItem>
             </Link>  
         }
          <Divider />

          {user.email?
              <ListItem >
              <Button variant='outlined' color='warning' sx={{color:'tomato'}} onClick={logOut}>Log Out</Button>
                <PersonIcon/>{user.displayName} 
              </ListItem>
                  :
                <Link style={{textDecoration:"none", color:"tomato"}} to='/login'>
                <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  Login
                </ListItemText>
              </ListItem>
              </Link>
              }

      </List>
    </Drawer>
    <MenuIcon onClick={() => setOpenDrawer(!openDrawer)}>
      <MenuIcon />
    </MenuIcon>
    </>
);
}
export default DrawerComponent;
