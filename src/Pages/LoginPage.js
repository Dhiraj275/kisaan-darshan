import { Link } from 'react-router-dom';
import '../style/login.css'
import firebase from '../firebase'
import { useState } from 'react';
function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      window.location.replace('/profile')
    }

  })
  const signIn = () => {
    firebase.auth().signInWithEmailAndPassword(formData.email, formData.password).then(() => {
      window.location.replace('/profile')
    })
  }
  return (
    <>
      <div className="login-page">
      
           <div id="wrapper">

          <legend>Login <span class="material-icons">
            login
          </span></legend>
          <div className='main-form'>
            <div class="inputs">
              <span class="material-icons input-icon">
                person
              </span>
              <input type="text" onChange={(event)=>{setFormData({...formData, email:event.target.value})}} name="username" id="username" placeholder="Username or mail-Id" />
            </div>
            <div class="inputs">
              <span class="material-icons input-icon">
                key
              </span>
              <input type="text" onChange={(event)=>{setFormData({...formData, password:event.target.value})}} name="password" id="password" placeholder="Password" />
            </div>
            <button id="submit" onClick={signIn} type="button" >Login</button>
          </div>
          <div className="other-link">
            <div className="d-flex justify-content-center p-1">
              <a href="">Forget Password?</a>
            </div>
            <div className="d-flex justify-content-center p-1">
              Not registered yet? &nbsp; <Link to="/register">Click here</Link> <br />
            </div>

          </div>
        </div>

      </div>
    </>
  );
}


export default LoginPage;