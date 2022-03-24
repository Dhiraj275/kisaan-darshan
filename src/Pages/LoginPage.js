import { Link } from 'react-router-dom';
import '../style/login.css'
import firebase from '../firebase'
import Swal from 'sweetalert2'
import { useState } from 'react';
function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  var currentUser = firebase.auth().currentUser
  // console.log(currentUser)
  const signIn = () => {
    firebase.auth().signInWithEmailAndPassword(formData.email, formData.password).then(() => {
      window.location.replace('/profile')
    }).catch((error) => {
      var code = error.code
      switch (code) {
        case 'auth/invalid-email':
          Swal.fire('Invalid Email', '', 'error')
        case 'auth/wrong-password':
          Swal.fire('Invalid Password', '', 'error')
      }

    })
  }
  const forgetPassword = () => {
    formData.email === "" ? 
    Swal.fire('Enter valid Email', '', "warning") 
    : 
    firebase.auth().sendPasswordResetEmail(formData.email)
   .catch((error)=>{
        var code = error.code;
        switch(code){
          case 'auth/invalid-email':
            Swal.fire(`Email is invalid`, '', "error")

          case 'auth/user-not-found':
            Swal.fire(`Email: ${formData.email} Do not exist in Database`, '', "error")
        }
      }) 
      .then(
        Swal.fire(`Password Reset Link Sent on ${formData.email}`, '', "success")
        )
  }
  return (
    <>
      <div className="login-page">

        <div id="wrapper">

          <legend>Login <span className="material-icons">
            login
          </span></legend>
          <div className='main-form'>
            <div className="inputs">
              <span className="material-icons input-icon">
                person
              </span>
              <input type="text" onChange={(event) => { setFormData({ ...formData, email: event.target.value }) }} name="username" id="username" placeholder="Username or mail-Id" />
            </div>
            <div className="inputs">
              <span className="material-icons input-icon">
                key
              </span>
              <input type="text" onChange={(event) => { setFormData({ ...formData, password: event.target.value }) }} name="password" id="password" placeholder="Password" />
            </div>
            <button id="submit" onClick={signIn} type="button" >Login</button>
          </div>
          <div className="other-link">
            <div className="d-flex justify-content-center p-1">
              <a onClick={forgetPassword} href="#">Forget Password?</a>
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