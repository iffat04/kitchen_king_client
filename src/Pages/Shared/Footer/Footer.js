import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './Footer.css'
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link style={{textDecoration:"none"}} color="inherit" to="https://mui.com/">
        Kitchen King
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {
  //const { description, title } = props;

  return (
    <div style={{marginTop:"25px"}}>
   
      <Box color="white" px={{xs:15, sm:10}} py={{sx:5, sm:10}} mt={{xs:15, md:15}} bgcolor="text.secondary" >
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            <Grid alignSelf="center" item xs={12} sm={4}>
            <Box borderBottom={1} mb={1} pb={1}>Help</Box>
              <Box>
                <Link style={{textDecoration:"none"}} to='/' color="inherit">
                Contact
                </Link>
              </Box>
              <Box>
                <Link style={{textDecoration:"none"}} to='/' color="inherit">
                Support
                </Link>
              </Box>
              <Box>
                <Link style={{textDecoration:"none"}} to='/' color="inherit">
                Social Support
                </Link>
              </Box>
              <Box sx={{marginTop:"5px", display:'flex', justifyContent:"center", gap:"5px"}}>
              <Link style={{textDecoration:"none", color:"white"}} to='/' >
              <FacebookIcon sx={{'&:hover':{transform:'scale(1.1)',color:"yellow" }}} />
              </Link>
              <Link style={{textDecoration:"none", color:"white"}} to='/'>
              <InstagramIcon sx={{'&:hover':{transform:'scale(1.1)', color:"yellow" }}} />
              </Link>
              <Link style={{textDecoration:"none", color:"white"}} to='/' >
              <TwitterIcon sx={{'&:hover':{transform:'scale(1.1)', color:"yellow"}}} />
              </Link>
              <Link style={{textDecoration:"none", color:"white"}} to='/' >
              <YouTubeIcon sx={{'&:hover':{transform:'scale(1.1)',color:"yellow" }}} />
              </Link>
              
              
              
            </Box>
            
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box  mb={1} pb={1} borderBottom={1}>Account</Box>
              <Box>
                <Link style={{textDecoration:"none"}} to='/login' color="inherit">
                Login
                </Link>
              </Box>
              <Box>
                <Link style={{textDecoration:"none"}} to='/register' color="inherit">
               Register
                </Link>
              </Box>
              <Box>
                <Link style={{textDecoration:"none"}} to='/' color="inherit">
                Cancel Membership
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box  mb={1} pb={1} borderBottom={1}>About</Box>
              <Box>
                <Link style={{textDecoration:"none"}} to='/' color="inherit">
                Privacy 
                </Link>
              </Box>
              <Box>
                <Link style={{textDecoration:"none"}} to='/' color="inherit">
               Terms and Condition
                </Link>
              </Box>
              <Box>
                <Link style={{textDecoration:"none"}} to='/' color="inherit">
                 Recommendation
                </Link>
              </Box>
            </Grid>

          </Grid>
         
          <Box marginTop={{xs:3, sm:5}} paddingY={{ xs:3 }}>
            <Copyright/>
          </Box>
        </Container>
      </Box>
   
    </div>
  );
}



export default Footer;