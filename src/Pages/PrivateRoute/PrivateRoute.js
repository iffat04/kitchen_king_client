
import { Navigate, Outlet, Redirect, Route, useLocation } from "react-router";

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import useAuth from '../../hooks/useAuth'

const PrivateRoute = ({children,...rest}) => {
    //console.log(children);
    //console.log(rest);
    let location = useLocation();
    const {user,isloading} = useAuth();
    if(isloading){
        return   <Box sx={{ display: 'flex' }}><CircularProgress /></Box>
    }
    if(!user.email){
        return <Navigate to="/login" state={{from:location}} />
    }

    return (
       <Outlet></Outlet>
    );
};
export default PrivateRoute;