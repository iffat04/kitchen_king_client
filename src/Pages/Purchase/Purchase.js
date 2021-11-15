import UseAuth from '../../hooks/useAuth';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import './Purchase.css'
import axios from 'axios';
const Purchase = () => {
  const { id } = useParams();
  const { register, handleSubmit, reset, control } = useForm();
  console.log(id)  
 
  const {user}= UseAuth();
///get product info
    const [product,setProduct]= useState({});
    useEffect(()=>{
        fetch(`https://whispering-retreat-62906.herokuapp.com/purchase/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data));
    },[])
  console.log(product)

  //submit order 
  const onSubmit = data =>{
    data.status= false;
    data.image =product?.image;
    data.productName=product?.name;
    console.log(data);
    axios.post('https://whispering-retreat-62906.herokuapp.com/order',data)
        .then(res=>{
            console.log(res);

            const id= res.data.insertedId;
            if(id){
                alert('order placed successfully');
                reset()
            }
        })

  }
  return (
    <>
   <Grid container spacing={2} columns={{ sm:6 , md: 12 }} sx={{ justifyContent: 'center', marginTop:4 }} >
     
     <Grid item  sm={12} md={6} sx={{ display:"flex",justifyContent: 'center',alignItems:"center", flexDirection:"column"}}   >
     <Typography variant="h5" color="orange" paddingY="10px">Purchase Form</Typography>
     <div className="form-container">
       <form onSubmit={handleSubmit(onSubmit)}>
            <input  defaultValue={user?.displayName} required {...register("name", { required: true, maxLength: 20 })} />
            <input   defaultValue={user?.email} required  {...register("email", {required:true})}  />
            <input   defaultValue={id} required  {...register("id",{required:true} )}  />
            <input   {...register("phone",{required:true} )} placeholder="Phone Number"  />
            <input  {...register("address",{required:true} )} placeholder="Address" />
            <input type="submit" />
        </form>
    </div>
     </Grid>
     <Grid item  sm={12} md={6} sx={{ display:"flex",justifyContent: 'center',alignItems:"center", flexDirection:"column"}}   >
     <Typography variant="h5" color="orange" paddingY="10px">Product Details</Typography>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={product?.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product?.categories}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {product?.name}
        </Typography>
        <Typography color="orange" >Price: {product?.price}</Typography>
      </CardContent>
    </Card>
      </Grid>
    </Grid> 
    </>


   
  );
};

export default Purchase;