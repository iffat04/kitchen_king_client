import React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
//import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
//import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
//import Grid from '@mui/material/Grid';
//import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import DiningIcon from '@mui/icons-material/Dining';
import { ThemeProvider, createMuiTheme } from '@mui/styles';
import {Paper,Menu, MenuItem, Button } from '@mui/material'; 
import { yellow, orange } from '@mui/material/colors';
import useMediaQuery from '@mui/material/useMediaQuery';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import MenuIcon from '@mui/icons-material/Menu';
import LabelIcon from '@mui/icons-material/Label';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import DrawerComponent from '../DrawerComponent/DrawerComponent';
import { useTheme } from '@mui/material/styles';
import useAuth from '../../../hooks/useAuth';
import PersonIcon from '@mui/icons-material/Person';
const useStyles = makeStyles (theme => ({
    navlinks: {
      //marginLeft: theme.spacing(10),
      display: "flex"
      
    },
   logo: {
      cursor: "pointer",
      color : "orange",
      display: "flex",
      justifyContent:"center",
     
    },
    link: {
      textDecoration: "none",
      margin: "10px",
      color: "black",
      fontSize: "20px",
      //marginLeft: theme.spacing(10),
      "&:hover": {
        color: "tomato",
        borderBottom: "1px solid white",
      },
    },
  }));

const Header = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const {user, logOut, isloading, admin} = useAuth();
   
    const dashBoardPath = admin? '/adminDashBoard' : '/userDashBoard'

    return (
    <React.Fragment>  
      <AppBar color="" sx={{ mb: "30px", marginBottom:"30px" }}  position="fixed"  >
        <CssBaseline />
        <Toolbar>
          <Link to='/'>
        <DiningIcon  fontSize="large" className={classes.logo}  />
        </Link>  
          {isMobile ? 
          (<DrawerComponent />) : (
             <> 
             <Link to='/' className={classes.link}>
            <Typography variant="h5" className={classes.logo} sx={{ justifyContent: 'center', marginRight:"20px" }} >
            KithcenMaster 
            </Typography>
              </Link>
            <div className={classes.navlinks}>
              <Link to="/home" className={classes.link}>
                Home
              </Link>
              <Link to="/allProducts" className={classes.link}>
                Explore
              </Link>
              {user.email &&
              <Link to={dashBoardPath} className={classes.link}>
             DashBoard
              </Link>
               }

              {isloading ||
              
              (user.email?
              
              <Button align="right" onClick={logOut}>
                <PersonIcon/>{user.displayName} 
                <Typography marginX="10px" bgcolor="yellow" padding="5px" borderRadius="4px">Log Out</Typography>
                </Button>
                  :
              <Link to="/login" className={classes.link}>
                Login
              </Link>
              )
              }
            </div>
            </>)
        }
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
      </React.Fragment>
    );
  }
  

export default Header;