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
import { createContext, useEffect, useState } from 'react';
const UserIDProvider = createContext();
const ProductsDataProvider = createContext()
const UserDataProvider = createContext();
function App() {
  const [firebaseUserData, setFirebaseUserData] = useState(null)
  const [userData, setUserData] = useState()
  const [itemsData, setItemsData] = useState(null)

 


  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setFirebaseUserData(user)
      var uid = user.uid
      async function getData() {
        const sfRef = await firebase.firestore().collection("users").doc(uid).get()
        setUserData(sfRef.data())
      }
      getData()
    }
    else {
      setFirebaseUserData(undefined)
    }
  })
  if (firebaseUserData !== null) {
    if (firebaseUserData !== null) {
  
      return (
        <>
          <ProductsDataProvider.Provider value={itemsData}>
            <UserDataProvider.Provider value={userData}>
              <UserIDProvider.Provider value={firebaseUserData}>
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
                  <Route exact path="/orders" element={<Orders />} />
                  <Route exact path="/register" element={<RegistrationPage />} />
                  <Route exact path="/change-password" element={<ChangePassword />} />
                  <Route
                    path="*"
                    element={<Navigate to="/home" replace />}
                  />
                </Routes>
              </UserIDProvider.Provider>
            </UserDataProvider.Provider>
          </ProductsDataProvider.Provider>
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
export { UserIDProvider, UserDataProvider, ProductsDataProvider }