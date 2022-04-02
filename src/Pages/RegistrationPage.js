import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import StateDisctrict from '../Component/StateDisctrict';
import firebase from '../firebase';
import '../style/registration.css'
function RegistrationPage() {

    const [formData, setFormData] = useState([])
    let name, value;
    const setUpRecaptch = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            size: 'invisible',
            callback: (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                registrUser();
            }
        });
    }
    const handleFormChanges = (event) => {
        name = event.target.name;
        value = event.target.value;
        setFormData({ ...formData, [name]: value });
    }
    const registrUser = () => {
        setUpRecaptch()
        const phoneNumber = `+91${formData.phone}`;
        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                const code = window.prompt("ente otp")
                confirmationResult.confirm(code).then((result) => {
                    // User signed in successfully.
                    const user = result.user;
                    delete formData.password
                    firebase.firestore().collection('users').doc(result.user.uid).set({ ...formData }).then(() => {
                        Swal.fire("User Registed Successfully!", '', 'success').then(() => { window.location.replace('/login') })
                    })
                }).catch((error) => {
                    console.error(error)
                });
            }).catch((error) => {
                console.log(error)
            });
        // firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password)
        // .then((event) => {
        //     console.log(event.user.uid)
        //     delete formData.password
        //     firebase.firestore().collection('users').doc(event.user.uid).set({ ...formData }).then(() => {
        //         Swal.fire("User Registed Successfully!", '', 'success').then(()=> {window.location.replace('/login')})
        //     })
        // })
        // .catch((error) => {
        //     var code = error.code
        //     console.log(code)
        //     switch (code) {
        //       case 'auth/email-already-in-use':
        //         Swal.fire('Email Already Exist', '', "warning")

        //     }

        //   })
    }
    return (
        <>
            <div className="registration">
                <form>
                    <div id="wrapper">
                        <legend>Registration<span className="material-icons">
                            edit
                        </span></legend>
                        <div className="d-flex justify-content-center">
                            <input onChange={handleFormChanges} className="inputs-reg" type="text" name="name" id="name" placeholder="Full Name" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <input onChange={handleFormChanges} className="inputs-reg" type="text" name="address" id="address" placeholder="Address" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <input onChange={handleFormChanges} className="inputs-reg" type="tel" name="phone" id="phone" placeholder="Phone Number" maxlength="10" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <input onChange={handleFormChanges} className="inputs-reg" type="email" name="email" id="email" placeholder="Email (optional)" />
                        </div>
                        {/* <div className="d-flex justify-content-center">
                        <input onChange={handleFormChanges} className="inputs-reg" type="password" name="password" id="address" placeholder="Create Password" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <input onChange={handleFormChanges} className="inputs-reg" type="password" name="password_confirm" id="address" placeholder="Re-enter Password" required="" />
                    </div> */}
                        <StateDisctrict formData={formData} handleFormChanges={handleFormChanges} />
                        {/* <div className="d-flex justify-content-center">
                        <select onChange={handleFormChanges} className="inputs-reg" name="gender" id="gender" required="">
                            <option value="Not Selected" selected="" disabled="">Select gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div> */}
                        <br />
                        <div className="d-flex">
                            <label for="agree"><input type="checkbox" name="agree" id="agree" />I agree to the terms and condition mentioned in <a href="">privacy policy and agreement statement</a>.</label>
                            <br />
                        </div>
                        <button onClick={registrUser} className="inputs-reg" id="submit" type="button" >Submit</button>
                        <br /><br />
                        <div id="recaptcha-container"></div>
                        <div className="d-flex justify-content-center">
                            <Link to="/login">Hava a account? Login</Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegistrationPage