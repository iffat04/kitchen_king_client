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
import UseAuth from "../../../hooks/useAuth";

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
            <Link to="/">Home</Link>
          </ListItemText>
        </ListItem>

        <ListItem onClick={() => setOpenDrawer(false)}>
          <ListItemText>
            <Link to="/allProducts">Explore</Link>
          </ListItemText>
        </ListItem>

       
        {user.email &&
               <ListItem onClick={() => setOpenDrawer(false)}>
               <ListItemText>
                 <Link to="/DashBoard">DashBoard</Link>
               </ListItemText>
             </ListItem>
         }
          {user.email?
              
              <Button align="right" onClick={logOut}>
                <PersonIcon/>{user.displayName} 
                <Typography marginX="10px" bgcolor="yellow" padding="5px" borderRadius="4px">Log Out</Typography>
                </Button>
                  :
             
                <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link to="/login">Login</Link>
                </ListItemText>
              </ListItem>
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
