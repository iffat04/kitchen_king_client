import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import AllProducts from './Pages/AllProducts/AllProducts';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import Register from './Pages/Register/Register';
import AuthProvider from './contexts/authContext';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import UserDashBoard from './Pages/UserDashBoard/UserDashBoard/UserDashBoard';
import Pay from './Pages/UserDashBoard/Pay/Pay';
import MyOrder from './Pages/UserDashBoard/MyOrder/MyOrder';
import AdminDashBoard from './Pages/AdminDashBoard/AdminDashBoard/AdminDashBoard';
import ManageOrders from './Pages/AdminDashBoard/ManageOrders/ManageOrders';
import AddProduct from './Pages/AdminDashBoard/AddProduct/AddProduct';
import MakeAdmin from './Pages/AdminDashBoard/MakeAdmin/MakeAdmin';
import ManageProducts from './Pages/AdminDashBoard/ManageProducts/ManageProducts';
import AdminRoute from './Pages/PrivateRoute/AdminRoute';

function App() {

  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>}>
        </Route>
        <Route path = "/allProducts"  element = {<AllProducts />} />
        <Route path = "/addProduct" element ={<AddProduct/>}/> 
        <Route path = "/login" element={<Login/>} />
        <Route path = "/register" element={<Register/>} />
         
        <Route element = {<PrivateRoute/>} >
            <Route  path = "/purchase/:id" element={<Purchase />} />

            <Route path="/userDashBoard/*" element={<UserDashBoard/>} >
              <Route path="addProduct" element={<AddProduct/>} />
              <Route path="pay" element={<Pay/>} />
              <Route path="myOrder" element={<MyOrder/>}/>
            </Route>
        </Route>

          <Route element={<AdminRoute/>}>
            <Route path="/adminDashBoard/*" element={<AdminDashBoard/>}>
              <Route path="manageOrders" element={<ManageOrders/>}/>
              <Route path="addProduct" element={<AddProduct/>}/>
              <Route path="makeAdmin" element={<MakeAdmin/>} />
              <Route path="manageProducts"  element={<ManageProducts/>} />
            </Route>
            <Route path="/adminDashBoard" element={<AdminDashBoard/>}/>
          </Route>
     

        </Routes>
        <Footer/>

      </Router>
      </AuthProvider>

      
    </div>
  );
}

export default App;
