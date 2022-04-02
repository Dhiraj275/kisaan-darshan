import { Link } from 'react-router-dom';
import '../style/login.css'
import firebase from '../firebase'
import Swal from 'sweetalert2'
import { useState } from 'react';
function LoginPage() {
  const [formData, setFormData] = useState({
    phone: '',
    password: ''
  })
  const setUpRecaptch = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        signIn();
      }
    });
  }
  var currentUser = firebase.auth().currentUser
  // console.log(currentUser)
  const signIn = (e) => {
    e.preventDefault()
    setUpRecaptch()
    // firebase.auth().signInWithEmailAndPassword(formData.email, formData.password).then(() => {
    //   window.location.replace('/profile')
    // }).catch((error) => {
    //   var code = error.code
    //   console.log(code)
    //   switch (code) {
    //     case 'auth/user-not-found':
    //       Swal.fire('User Not Found, Invalid Email', '', 'error')
    //     case 'auth/invalid-email':
    //       Swal.fire('Invalid Email', '', 'error')
    //     case 'auth/wrong-password':
    //       Swal.fire('Invalid Password', '', 'error')

    //   }

    // })
    const phoneNumber = `+91${formData.phone}`;
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        const code = window.prompt("enter otp")
        confirmationResult.confirm(code).then((result) => {
          Swal.fire("User Verified Successfully!", '', 'success').then(() => { window.location.replace('/profile') })
        }).catch((error) => {
          var code = error.code
          switch (code) {
            case '':
              Swal.fire("", '', "error")
          }
        });
      }).catch((error) => {
        console.log(error)
      });
  }
  const forgetPassword = () => {
    formData.email === "" ?
      Swal.fire('Enter valid Email', '', "warning")
      :
      firebase.auth().sendPasswordResetEmail(formData.email)
        .catch((error) => {
          var code = error.code;
          switch (code) {
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
        <form onSubmit={signIn} action="">

          <div id="wrapper">
            <legend>Login <span className="material-icons">
              login
            </span></legend>
            <div className='main-form'>
              <div className="inputs">
                <span className="material-icons input-icon">
                  call
                </span>
                <input type="number" maxLength={10} onChange={(event) => { setFormData({ ...formData, phone: event.target.value }) }} name="phone" id="phone" placeholder="Phone No." />
              </div>

              <button id="submit" onClick={signIn} type="submit" >Login</button>
            </div>
            <div className="other-link">
              <div className="d-flex justify-content-center p-1">
                <a onClick={forgetPassword} href="#">Forget Password?</a>
              </div>
              <div className="d-flex justify-content-center p-1">
                Not registered yet? &nbsp; <Link to="/register">Click here</Link> <br />
              </div>
              <div id="recaptcha-container"></div>
            </div>
          </div>

        </form>
      </div>
    </>
  );
}


export default LoginPage;