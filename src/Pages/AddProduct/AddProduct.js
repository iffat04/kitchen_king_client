import { Checkbox } from '@mui/material';
import React from 'react';
import { Controller, useForm } from "react-hook-form";

const AddProduct = () => {
  
  const { register,handleSubmit, control, reset } = useForm({
    defaultValues: {
      checkbox: false,
    }
  });
  const onSubmit = data => {
    console.log(data);
  fetch('https://whispering-retreat-62906.herokuapp.com/products',{
    method:"POST",
    headers:{
      'content-type':"application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res=>res.json())
  .then(data=>{
    reset();
  })
  }


  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="name" {...register("name")} />
      <br/>
      <select {...register("categories")}>
        <option value="Spoon">Spoon</option>
        <option value="Bowl">Bowl</option>
        <option value="Cup">Cup</option>
        <option value="Glass">Glass</option>
        <option value="Plate">Plate</option>
        <option value="Knife">Knife</option>
        <option value="Spoon Set">Spoon Set</option>
        <option value="Fork">Fork</option>
        <option value="Blender">Blender</option>
        <option value="chopping board">Chopping Board</option>
        <option value="Decorative Item">Decorative Item</option>
        <option value="Others">Others</option>
      </select>
      <br/> 
      <input type="number" placeholder="Price" {...register("price")} />
      <br/>
      <input placeholder="Rating" type="number" {...register("rating")} />
      <br/>
      <input placeholder="Image-url" {...register("image")} />
      <br/>
      <label>Top Sale</label>
      <Controller
        name="checkbox"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Checkbox {...field} />}
      />
      <br/>
      <input type="submit" />
    </form>
     </div>
    );
};

export default AddProduct;