import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import firebase from '../firebase'
const firestore = firebase.firestore()
function ProfileComon() {
    const [userData, setUserData] = useState([])
    const [userId, setUserId] = useState()
    firebase.auth().onAuthStateChanged(user => {
        if (user) { setUserId(user.uid) }
    }
    )
    async function getData() {
        const sfRef = await firestore.collection("users").doc(userId).get()
        setUserData(sfRef.data())
    }
    getData()

    return (
        <>
            <div className="col-md-4">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                    <img className="mb-5 rounded-circle" width="150px" src="https://www.coverallweb.in/images/team1.jpg" />
                    <span className="font-weight-bold">{userData ? userData.name : ''}</span>
                    <span className="text-black-50"> <a href="tel:+91 8849959488">+91 {userData ? userData.phone : ''}</a> </span>
                    <span className="text-black-50"> <a href="mailto:himanshubari789@mail.com">{userData ? userData.email : ''}</a> </span>
                </div>
                <br />

                <NavLink className="btn btn-primery" to="/profile">Profile</NavLink>
                <NavLink className="btn btn-primery" to="/orders">My Orders</NavLink>
                <NavLink className="btn btn-primery" to="/change-password">Change Password</NavLink>
            </div>
        </>
    )
}

export default ProfileComon