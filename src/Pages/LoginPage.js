import { Link } from 'react-router-dom';
import '../style/login.css'
import firebase from '../firebase'
import Swal from 'sweetalert2'
import { useState } from 'react';
import { UserIDProvider } from '../App'
function LoginPage() {
  const [userData, setUserData] = useState(null)
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
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        const code = window.prompt("enter otp")
        confirmationResult.confirm(code).then((result) => {
          Swal.fire("User Verified Successfully!", '', 'success').then(() => {
            var uid = result.user.uid
    
            
            async function getData() {
              const sfRef = await firebase.firestore().collection("users").doc(uid).get()
              setUserData(sfRef.data())
              if(sfRef.data()!==null){
                if(sfRef.data()===undefined){
                  window.location.replace('/register')
                }
                else{
                  window.location.replace('/profile')
                }
              }
            }
            getData().then(()=>{
              console.log(userData)
              if(userData!==null){
                if(userData===undefined){
                  window.location.replace('/register')
                }
                else{
                  window.location.replace('/profile')
                }
              }
              else{
                getData()
              }
            })

          })

          // console.log(userData)
          // if(userData===undefined){
          //   window.location.replace("/register")
          // }
          // else{
          //   window.location.replace('/profile')
          // }
          // .then(() => { window.location.replace('/profile') })

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
  // const forgetPassword = () => {
  //   formData.email === "" ?
  //     Swal.fire('Enter valid Email', '', "warning")
  //     :
  //     firebase.auth().sendPasswordResetEmail(formData.email)
  //       .catch((error) => {
  //         var code = error.code;
  //         switch (code) {
  //           case 'auth/invalid-email':
  //             Swal.fire(`Email is invalid`, '', "error")

  //           case 'auth/user-not-found':
  //             Swal.fire(`Email: ${formData.email} Do not exist in Database`, '', "error")
  //         }
  //       })
  //       .then(
  //         Swal.fire(`Password Reset Link Sent on ${formData.email}`, '', "success")
  //       )
  // }
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
                <input onChange={(event) => { setFormData({ ...formData, phone: event.target.value }) }} placeholder="Phone No." max="9999999999" min="1000000000" required="required" type="number"  ></input>
                {/* <input required type="tel"   name="phone" id="phone" placeholder="Phone No." /> */}
              </div>

              <input id="submit" type="submit" value="Login" />
            </div>
            <div className="other-link">
              {/* <div className="d-flex justify-content-center p-1">
                <a onClick={forgetPassword} href="#">Forget Password?</a>
              </div> */}
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