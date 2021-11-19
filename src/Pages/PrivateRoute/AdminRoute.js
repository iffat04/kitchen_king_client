import { Navigate, Outlet, Route, useLocation } from "react-router";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import useAuth from '../../hooks/useAuth'

const AdminRoute = ({children,...rest}) => {
    //console.log(children);
    //console.log(rest);
    let location = useLocation();
    const {user,isloading, admin, verifying} = useAuth();
    if(isloading){
        return   <Box sx={{ display: 'flex' }}><CircularProgress /></Box>
    }
    if(!user.email  ){
        return <Navigate to="/login" state={{from:location}} />
    }
    else{
        if(verifying)  return   <Box sx={{ display: 'flex' }}><CircularProgress /></Box>
        if(admin) return <Outlet></Outlet>
        return <Navigate replace to='/' />

    }
    

   
   
   

};
export default AdminRoute;