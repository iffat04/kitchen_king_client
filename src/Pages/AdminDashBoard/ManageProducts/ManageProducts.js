import { Avatar, IconButton, LinearProgress, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import image from '../../../images/plate.jpg'
const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://whispering-retreat-62906.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
        .finally(()=>{
          setLoading(false)
        })
    },[])
    
  if(loading)
  return <LinearProgress  color="secondary" />
  else return (
        <div>
            <h2>Manage Products</h2>
           
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div"> 
            Working on it...
          </Typography>
       
            <List>
                {products.map(product=><ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <img src={product.image} alt="" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={product.categories}
                    secondary={product.name}
                  />
                </ListItem>
                )}
            </List>
        
       
        </div>
    );
};

export default ManageProducts;