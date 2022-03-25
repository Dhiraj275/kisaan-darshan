import { Navigate, Route, Routes } from 'react-router-dom'
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
import Orders from './Pages/Orders';
import ChangePassword from './Pages/ChangePassword';
import firebase from './firebase';
import { createContext, useState } from 'react';
const UserDataProvider = createContext();
function App() {
  const [userData, setUserData] = useState(null)
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setUserData(user)
    }
    else{
      setUserData(undefined)
    }
  })
  console.log(userData)
  if (userData!==null) {
    if (userData !== null) {
      return (
        <>
          <UserDataProvider.Provider value={userData}>
            <Routes>
              <Route exact path="/" element={<KDIndex />} />
              <Route exact path="/home" element={<HomePage />} />
              <Route exact path="/contact" element={<ContactPage />} />
              <Route exact path="/about" element={<AboutPage />} />
              <Route exact path="/login" element={<LoginPage />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/about" element={<AboutPage />} />
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/register" element={<RegistrationPage />} />
              <Route exact path="/orders" element={<Orders />} />
              <Route exact path="/change-password" element={<ChangePassword />} />
              <Route
                path="*"
                element={<Navigate to="/home" replace />}
              />
            </Routes>
          </UserDataProvider.Provider>
        </>
      )
    }
    else {
      return (
        <Routes>
          <Route exact path="/" element={<KDIndex />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/register" element={<RegistrationPage />} />
          <Route exact path="/change-password" element={<ChangePassword />} />
          <Route
            path="*"
            element={<Navigate to="/home" replace />}
          />
        </Routes>
      );
    }
  }
  else {
    return (
      <div className="h-100 d-flex justify-content-center align-items-center">
        <img src="https://flevix.com/wp-content/uploads/2020/02/Loading-Image-1.gif" alt="" />
      </div>
    )
  }
}

export default App;
export { UserDataProvider }