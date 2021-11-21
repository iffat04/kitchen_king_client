import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { FormControl, Grid, InputLabel, MenuItem, Rating, Select, TextField } from '@mui/material';
import { padding } from '@mui/system';
import image from '../../../images/yellowcup3.jpg'

const Reviews = () => {
  const [reviews, setReviews]= React.useState([]);
  React.useEffect(()=>{
    fetch('https://whispering-retreat-62906.herokuapp.com/reviews')
    .then(res=>res.json())
    .then(data=>setReviews(data))
  },[])
  console.log(reviews)
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = reviews.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
      <>
     
    <Grid container spacing={2} sx={{ justifyContent: 'center', marginTop:4 }} >


        <Grid item xs={12} sm={12} md={12}    sx={{ display:"flex",justifyContent:"center"}} >
            <div style={{backgroundColor:"seashell"}} >
               <Typography  variant="h5" marginY="10px"   sx={{color:"orange"  }}  >Reviews </Typography>
                <Box sx={{ maxWidth: 500, flexGrow: 1,  }}>
                <Paper
                square
                elevation={0}
                sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent:'center',
                height: 50,
                pl: 2,
                backgroundColor:"SeaShell"
               
                }}
               >
                  
            <Typography sx={{backgroundColor:"white", paddingX:'100px', borderRadius:"10px", boxShadow:' 5px 10px 8px #888888' }} align="center">{reviews[activeStep]?.product}</Typography>
            </Paper>
            <Rating name="read-only" value={parseFloat(reviews[activeStep]?.rating)} precision={0.5}   readOnly />
            <div container style={{display:'flex', justifyContent:'space-between',alignItems: 'center',  flexWrap:'wrap'}} >
            <div style={{ height: 100, maxWidth: 500, width: '100%', p: 2, backgroundColor:"SeaShell" }}>
                {reviews[activeStep]?.review}
            </div>
            <div style={{ height: 200, maxWidth: 500, width: '100%', backgroundColor:"SeaShell", marginY:'10px',paddingY:"20px" }}>
                <Typography align="center">Picture</Typography>
                <img height="100%" style={{borderRadius:"10px",marginBottom:"10px"}} src={image} alt="" />
            </div>
            </div>

            <MobileStepper
                variant="text"
                sx={{marginTop:"30px"}}
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                <Button
                    sx={{color:"tomato"}}
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                >
                    Next
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                    ) : (
                    <KeyboardArrowRight />
                    )}
                </Button>
                }
                backButton={
                <Button   sx={{color:"tomato"}} size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                    ) : (
                    <KeyboardArrowLeft />
                    )}
                    Back
                </Button>
                }
            />
            </Box>
            </div>
        </Grid>
    </Grid>
    </>
  );
}


export default Reviews;















