
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
//import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
//import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { Button, Divider, Typography } from '@mui/material';
//import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UseAuth from '../../../hooks/useAuth';
//import { WindowSharp } from '@mui/icons-material';

const ManageOrders = () => {
    const[isUpdate, setIsUpdate] = React.useState(false)
    const[orders, setOrders]= React.useState([]);
    const {user} = UseAuth();
    const email=user.email;
    //show all orders in ui
    const url=`    https://whispering-retreat-62906.herokuapp.com/order`
    React.useEffect(()=>{
            fetch(url)
            .then(res=>res.json())
            .then(data=>setOrders(data))
    },[isUpdate])

    //delete order
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
                const restOrder = orders.filter(order=>order._id !== id);
                setOrders(restOrder);
            }
        })
        }
    }
    ////////////////////////////////////admin work approve order
    
    const handleApprove = (id, order)=>{
        const updateUrl= `https://whispering-retreat-62906.herokuapp.com/order/approve/${id}`
        order.status = true;
        console.log(order)
        fetch(updateUrl,{
            method:"PUT",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                alert('Approved')
                setIsUpdate(!isUpdate)
            }
        })
        }
        
    return (
        <div style={{display:"flex", justifyContent:"flex-start", alignItems:"flex-start", flexDirection:"column"}}>
            <h2>All Orders</h2>

            <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>

            
            {orders.map(order=>  <ListItem sx={{ border: 1, marginY:"15px",  boxShadow: "5px 10px 18px #888888" }} key={order._id} alignItems="flex-start" >
                        {order.status ||
                        <Button onClick={()=>handleApprove(order._id,order)} sx={{alignSelf:'center', color:"green" }}>
                            <CheckCircleIcon  sx={{ fontSize: 35 }} />
                        </Button>
                        
                        }

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


export default ManageOrders;