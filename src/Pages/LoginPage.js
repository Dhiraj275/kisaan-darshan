import { Link } from 'react-router-dom';
import '../style/login.css'
import firebase from '../firebase'
import Swal from 'sweetalert2'
import { useState } from 'react';
import { UserDataProvider } from '../App'
function LoginPage() {
  const [otpStates, setOtpStates] = useState(false)
  const [userData, setUserData] = useState(null)
  const [formData, setFormData] = useState({
    phone: '',
    password: ''
  })
  const OtpMain = () => {
    const [EnteredOTP, setEnteredOTP] = useState()
    const verifyOtp = (e) => {
      e.preventDefault()
      var confirmationResult = window.confirmationResult
      confirmationResult.confirm(EnteredOTP).then((result) => {
        setOtpStates(false)
        Swal.fire("User Verified Successfully!", '', 'success').then(() => {
          var uid = result.user.uid

          async function getData() {
            const sfRef = await firebase.firestore().collection("users").doc(uid).get()
            setUserData(sfRef.data())
            if (sfRef.data() !== null) {
              if (sfRef.data() === undefined) {
                window.location.replace('/register')
              }
              else {
                window.location.replace('/profile')
              }
            }
          }
          getData().then(() => {
            console.log(userData)
            if (userData !== null) {
              if (userData === undefined) {
                window.location.replace('/register')
                window.location.reload()
              }
              else {
                window.location.replace('/profile')
              }
            }
            else {
              getData()
            }
          })

        })
      }).catch((error) => {
        if (error.code === "auth/invalid-verification-code") {
          Swal.fire("Invalid OTP", "Enter correct OTP and try again", 'error')
        }
      })

    }
    return (
      <>
        <div className="otp-main">
          <div className="otp-box">
            <h3>Enter Otp</h3>
            <form action="" onSubmit={verifyOtp}>
              <input type="number" placeholder="Enter OTP" value={EnteredOTP} onChange={(e) => { setEnteredOTP(e.target.value) }} />
              <input type="submit" value="Verify" />
            </form>
          </div>
        </div>
      </>
    )
  }
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
        setOtpStates(true)
       
      }).catch((error) => {
        console.log(error)
      });
  }
 
  return (
    <UserDataProvider.Consumer>
      {
        (userDataConsumer) => {
          if (userDataConsumer !== undefined) {
            window.location.replace('/home')
          }
          else {
            return (
              <>
                {
                  otpStates === true ? <OtpMain /> : ""
                }


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

                      {/* <div className="d-flex justify-content-center p-1">
                          <a onClick={forgetPassword} href="#">Forget Password?</a>
                        </div> */}
                      {/* <div className="d-flex justify-content-center p-1">
                          Not registered yet? &nbsp; <Link to="/register">Click here</Link> <br />
                        </div> */}
                      <div id="recaptcha-container"></div>

                    </div>

                  </form>
                </div>
              </>
            );
          }
        }
      }
    </UserDataProvider.Consumer>
  )


}


export default LoginPage;