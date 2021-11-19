
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { Button, Divider, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import UseAuth from '../../../hooks/useAuth';
//import { WindowSharp } from '@mui/icons-material';

const MyOrder = () => {
    const[myOrder, setMyOrder]= React.useState([]);
    const {user} = UseAuth();
    const email=user.email;
    const url=`    https://whispering-retreat-62906.herokuapp.com/myorder/${email}`
    React.useEffect(()=>{
            fetch(url)
            .then(res=>res.json())
            .then(data=>setMyOrder(data))
    },[])

    const handleDelete = (id)=>{
        const result = window.confirm("are you sure to delete?");
        
        console.log(id)
        if(result){
        const dlturl = `    https://whispering-retreat-62906.herokuapp.com/order/delete/${id}`
        fetch(dlturl,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('deleted succesfully')
                const restOrder = myOrder.filter(order=>order._id !== id);
                setMyOrder(restOrder);
            }
        })
        }
    }
    
        
    return (
        <div style={{display:"flex", justifyContent:"flex-start", alignItems:"flex-start", flexDirection:"column"}}>
            <h2>My Orders</h2>

            <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>

            
            {myOrder.map(order=>  <ListItem sx={{ border: 1, marginY:"15px",  boxShadow: "5px 10px 18px #888888" }} key={order._id} alignItems="flex-start" >
                    <Button onClick={()=>handleDelete(order._id)} sx={{alignSelf:'center', color:"red" }}>
                        <CancelIcon  sx={{ fontSize: 35 }} /> 
                    </Button>
                    <ListItemAvatar>
                    <Avatar alt="" src={order.image} />
                    </ListItemAvatar>
                    <ListItemText
                    primary={order.productName}
                    
                    />
                    <Divider orientation="vertical" sx={{marginX:"5px"}} flexItem />
                    {order.status? 
                    <Typography  sx={{color:"green", alignSelf:'center' }}  >Approved</Typography>
                    :
                    <Typography  sx={{color:"tomato", alignSelf:'center' }}  >Pending</Typography>
                    }
                    
                   
                    
                </ListItem>
             )}         
            </List>
        

    </div>
    );
};

export default MyOrder;