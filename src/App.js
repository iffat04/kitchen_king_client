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
import Topitems from './Pages/Home/Topitems/Topitems';
import Reviews from './Pages/Home/Reviews/Reviews';
import AllProducts from './Pages/AllProducts/AllProducts';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import Banner from './Pages/Home/Banner/Banner';
import Register from './Pages/Register/Register';
import AuthProvider from './contexts/authContext';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AddProduct from './Pages/AddProduct/AddProduct';
import UserDashBoard from './Pages/UserDashBoard/UserDashBoard';

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
        <Route path = "/login" element={<Login/>} />
        <Route path = "/register" element={<Register/>} />
         
        <Route element = {<PrivateRoute/>} >
            <Route  path = "/purchase/:id" element={<Purchase />} />
            <Route path="/dashBoard" element={<UserDashBoard/>} />
        </Route>

        </Routes>
        <Footer/>

      </Router>
      </AuthProvider>

      
    </div>
  );
}

export default App;
