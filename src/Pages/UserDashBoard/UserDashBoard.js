
import React, { useState } from "react";
import {
  Button,
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
import UseAuth from '../../hooks/useAuth'

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

const UserDashBoard = () => {
const classes = useStyles();
const [openDrawer, setOpenDrawer] = useState(false);
const {user, logOut} = UseAuth();
return (
  <>
    <Drawer
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      <List>
       <ListItem onClick={() => setOpenDrawer(false)}>
          <ListItemText>
            <Link to="/myorder">Myorder</Link>
          </ListItemText>
        </ListItem>

        <ListItem onClick={() => setOpenDrawer(false)}>
          <ListItemText>
            <Link to="/pay">pay</Link>
          </ListItemText>
        </ListItem>

       
      
               <ListItem onClick={() => setOpenDrawer(false)}>
               <ListItemText>
                 <Link to="/review">Review</Link>
               </ListItemText>
             </ListItem>
      
             
                <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link to="/" onClick={logOut}>LogOut</Link>
                </ListItemText>
              </ListItem>
              

      </List>
    </Drawer>
    <MenuIcon sx={{fontSize:"100px"}} onClick={() => setOpenDrawer(!openDrawer)}>
      <Typography>Open DashBoard</Typography><MenuIcon />
    </MenuIcon>
    </>
);
}



export default UserDashBoard;