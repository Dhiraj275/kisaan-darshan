import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { UserDataProvider, UserIDProvider } from '../App';
import StateDisctrict from '../Component/StateDisctrict';
import firebase from '../firebase';
import '../style/registration.css'
function RegistrationPage() {

    const [formData, setFormData] = useState([])
    let name, value;

    const handleFormChanges = (event) => {
        name = event.target.name;
        value = event.target.value;
        setFormData({ ...formData, [name]: value });
    }
    const registrUser = (firebaseUserData) => {
        console.log(firebaseUserData)
        var uid = firebaseUserData.uid  
          firebase.firestore().collection('users').doc(uid).set({ ...formData, phone: firebaseUserData.phoneNumber }).then(() => {
                Swal.fire("User Registed Successfully!", '', 'success').then(()=> {window.location.replace('/profile')})
            })
    
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
            <UserIDProvider.Consumer>
                {
                    (firebaseUserData) => {
                        console.log(firebaseUserData)
                        return (
                            <UserDataProvider.Consumer>
                                {
                                    (userData) => {
                                        if (userData === undefined) {
                                            return (
                                                <>
                                                    <div className="registration">
                                                        <form>
                                                            <div id="wrapper">
                                                                <legend>Registration<span className="material-icons">
                                                                    edit
                                                                </span></legend>
                                                                <div className="d-flex justify-content-center">
                                                                    <input required onChange={handleFormChanges} className="inputs-reg" type="text" name="name" id="name" placeholder="Full Name" />
                                                                </div>
                                                                <div className="d-flex justify-content-center">
                                                                    <input required onChange={handleFormChanges} className="inputs-reg" type="text" name="address" id="address" placeholder="Address" />
                                                                </div>
                                                                <div className="d-flex justify-content-center">
                                                                    <input required onChange={handleFormChanges} className="inputs-reg" type="email" name="email" id="email" placeholder="Email (optional)" />
                                                                </div>
                                                                <StateDisctrict formData={formData} handleFormChanges={handleFormChanges} />
                                                                <br />
                                                                <div className="d-flex">
                                                                    <label for="agree"><input type="checkbox" name="agree" id="agree" />I agree to the terms and condition mentioned in <a href="">privacy policy and agreement statement</a>.</label>
                                                                    <br />
                                                                </div>
                                                                <input className="inputs-reg" value="Submit" id="submit" type="button" onClick={()=>{registrUser(firebaseUserData)}} />
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
                                        else {
                                            window.location.replace('/profile')
                                        }
                                    }
                                }
                            </UserDataProvider.Consumer>
                        )
                    }
                }
            </UserIDProvider.Consumer>
        </>
    )
}

export default RegistrationPage