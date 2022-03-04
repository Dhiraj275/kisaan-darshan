import {Route,Routes} from 'react-router-dom'
import KDIndex from "./Pages/KDIndex";
import HomePage from './Pages/HomePage';
import './style/globle.css'
import AboutPage from './Pages/AboutPage';
import LoginPage from './Pages/LoginPage'
import Cart from './Pages/Cart';
import Profile from './Pages/Profile'
import Products from './Pages/Products'
import ContactPage from './Pages/ContactPage';
import RegistrationPage from './Pages/RegistrationPage';
function App() {
  return (

          <Routes>
           <Route exact path="/" element={<KDIndex/>}/>
           <Route exact path="/home" element={<HomePage/>}/>
           <Route exact path="/contact" element={<ContactPage/>}/>
           <Route exact path="/about" element={<AboutPage/>}/>
           <Route exact path="/login" element={<LoginPage/>}/>
           <Route exact path="/cart" element={<Cart/>}/>
           <Route exact path="/profile" element={<Profile/>}/>
           <Route exact path="/about" element={<AboutPage/>}/>
           <Route exact path="/products" element={<Products/>}/>
           <Route exact path="/register" element={<RegistrationPage/>}/>
          </Routes>
      );
}

export default App;
