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

const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

const Reviews = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  //handle rating
  const [value, setValue] = React.useState(2);
  const reviewRef= React.useRef();

  /*console.log(ratingRef.current.value)*/
  //handle form product
  const [product, setProduct] = React.useState('');
  const [review,setReview] = React.useState('');
 

const handleData =()=>{
    console.log(value,product, review)
}


  return (
      <>
     
    <Grid container spacing={2} columns={{ sm:6 , md: 12 }} sx={{ justifyContent: 'center', marginTop:4 }} >
     
        <Grid item xs={6} sm={12} md={6} sx={{ display:"flex",justifyContent: 'center',}}   >
       
            <div>
            <Typography variant="h5"  sx={{color:"orange" }}  >Give Reviews </Typography>
                <Grid container spacing={2} marginY="20px" sx={{backgroundColor: "SeaShell",padding:"15px"}} > 
                    <Grid item xs>
                        <TextField
                        id="outlined-multiline-static"
                        label="Review"
                        onChange={(event)=>{
                            setReview(event.target.value)
                        }}
                        multiline
                        rows={4}/>
                    </Grid>
                    <Grid item xs={6}>
                    <FormControl align="left" variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Product</InputLabel>
                            <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={product}
                            onChange={(event)=>{
                                setProduct(event.target.value)
                            }}
                            label="Age"
                            >
                            <MenuItem value={"spoon"}>Spoon</MenuItem>
                            <MenuItem value="bouwl">Bowl</MenuItem>
                            <MenuItem value="knife">Knife</MenuItem>
                            </Select>
                    </FormControl>
                    <Typography variant="p" align="left" component="legend"> Rating</Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        precision={0.5}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                     
                    />

                    </Grid>
                   
                </Grid>
                <Button onClick={handleData} variant="outlined" color="warning">Submit</Button>
                  
                    
                    

                   

            </div>
        </Grid>

        <Grid item xs={6} sm={12} md={6}    sx={{ display:"flex",justifyContent:"center"}} >
            <div >
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
                  
            <Typography sx={{backgroundColor:"SeaShell"}} align="center">{steps[activeStep].label}</Typography>
            </Paper>
            <Box sx={{ height: 255, maxWidth: 500, width: '100%', p: 2, backgroundColor:"SeaShell" }}>
                {steps[activeStep].description}
            </Box>


            <MobileStepper
                variant="text"
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