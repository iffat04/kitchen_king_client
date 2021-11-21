import React, { useRef, useState } from 'react';

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
import axios from 'axios';


const Review = () => {
const theme = useTheme();

const [status, setStatus]= useState(false);


  //handle input
  const [rating, setRating] = useState(5);
  const [product, setProduct] = useState('');
  const [review,setReview] = useState('');
 

const handleData =()=>{
    console.log(rating,product, review)
    const data ={
      rating:rating,
      product:product,
      review:review
    }
    axios.post('https://whispering-retreat-62906.herokuapp.com/review',data)
    .then(res=>{
      setStatus(true);
    alert('post success')
    setRating(5);
    setReview('');
    setProduct('');
    })
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
                        value={review}
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
                            label="Product"
                            >
                            <MenuItem value={"spoon"}>Spoon</MenuItem>
                            <MenuItem value="bowl">Bowl</MenuItem>
                            <MenuItem value="knife">Knife</MenuItem>
                            </Select>
                    </FormControl>
                    <Typography variant="p" align="left" component="legend"> Rating</Typography>
                    <Rating
                        name="simple-controlled"
                        value={rating}
                        precision={0.5}
                        onChange={(event, newValue) => {
                        setRating(newValue);
                        }}
                     
                    />

                    </Grid>
                   
                </Grid>
                <Button onClick={handleData} variant="outlined" color="warning">Submit</Button>
            </div>
        </Grid>

        <Grid item xs={6} sm={12} md={6}    sx={{ display:"flex",justifyContent:"center"}} >
        </Grid>
    </Grid>
    </>
  );
}


export default Review;
