import React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import DiningIcon from '@mui/icons-material/Dining';
import { red, yellow } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import Banner from '../Banner/Banner';
import Topitems from '../Topitems/Topitems';
import Reviews from '../Reviews/Reviews';
import AddProduct from '../../AddProduct/AddProduct';
import TopProducts from '../../TopProducts/TopProducts';

const Home = () => {
    const bg= red[400]
    return (
        <>
           <div sx={{ my: "30px",}}  >
               <Container align="center" bgColor={bg}  >
                   
                   <Banner/>
                   <AddProduct/>
                   <Topitems/>
                  <TopProducts/>
                   <hr></hr>

                   <Typography variant ="h4" sx={{ my: 3 }}  align="center" color="GrayText" gutterBottom>Customer Reviews</Typography>
                  {/*
                   <div>
                       <Grid container spacing={2} sx={{ justifyContent: 'center' }} >
                           <Grid item>
                             <Button variant="contained">Button</Button>
                            </Grid>
                            <Grid item>
                             <Button variant="outlined">Button</Button>
                            </Grid>

                       </Grid>
                   </div>
                  */}
               </Container>
               <Reviews/>
           </div>
        

        </>
    );
};

export default Home;