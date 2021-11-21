import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import cupset from '../../../images/cupset.jpg'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Rating } from '@mui/material';
import Grow from '@mui/material/Grow';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

const theme = createTheme();

const Topitems = () => {
  const[products,setProducts] = React.useState([]);
  React.useEffect(()=>{
    fetch('https://whispering-retreat-62906.herokuapp.com/products/topitem')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])
  //console.log(products)
  const gret=(
    <Typography>hellow</Typography>
  )
    return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
          <ScrollAnimation animateIn="fadeIn">
          
            <Typography
              variant="h4"
              align="center"
              color="orange"
            >
             Top Selling Items
            </Typography> 
            </ScrollAnimation>
         
          </Container>
        </Box>
        <Container sx={{ py: 4 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {products.map((product) => 
              <Grid item key={product._id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column',
                      '&:hover':{
                        boxShadow: '4px -5px 23px 5px rgba(209,87,48,0.39)',
                        
                      }
                      }}
                >
                  <CardMedia
                    component="img"
                    image={product.image}
                    height="320px"
                    width="280"
                    alt=""
                  />
                   <CardContent sx={{display:"flex", justifyContent: 'space-between' }}>
                    <Button size="small">
                    <Rating name="read-only" value={parseInt(product.rating)} precision={0.5} readOnly />
                    </Button>
                    <Button size="small" sx={{color:"tomato"}}>
                    <AttachMoneyIcon/><Typography>{product.price}</Typography>
                    </Button>
                  </CardContent>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="h2">
                     {product.name}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{display:"flex", justifyContent: 'space-between' }}>
                    <Button size="small">
                     <AddShoppingCartIcon />
                    </Button>
                    <Link  style={{textDecoration:"none"}}  to={`/purchase/${product._id}`}>
                    <Button sx={{ '&:hover': {
                        backgroundColor: 'orange',
                        color:'white',
                        transform: 'scale(1.1)'
                       
                      } }} size="small">
                    Buy Now
                    </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            )}
          </Grid>
        </Container>
      </main>

      {/* 
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

export default Topitems;