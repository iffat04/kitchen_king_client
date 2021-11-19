import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur= e=>{
        setEmail(e.target.value);
        e.target.value= email;
    }
    const handleMakeAdmin= e=>{
        e.preventDefault();
        const user={email}
        fetch('    https://whispering-retreat-62906.herokuapp.com/makeAdmin', {
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
           setEmail('');
           setSuccess(true);
        })

    }

    console.log(email)
    return (
        <div>
            <h3>Make Admin</h3>
            <form sx={{display:"flex", justifyContent:"center"}} onSubmit={handleMakeAdmin}>
            <TextField id="filled-basic"
              label="Email"
              size="small"
              sx={{ borderRadius: '50%' }}
              onBlur={handleOnBlur}
              variant="filled" />
            <Button type="submit" variant="contained" color="warning"  size="large" sx={{alignself:"center"}} >Make admin</Button>
            </form>
            {success &&
            <Alert align="center" severity="success">Successfuly added to the Admin Team</Alert>
            }
        </div>
    );
};

export default MakeAdmin;