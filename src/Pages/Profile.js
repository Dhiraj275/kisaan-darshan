import '../style/Profile.css'
import ProductHeader from '../Component/ProductHeader';
import firebase from '../firebase'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const firestore = firebase.firestore()
function Profile() {
    const [userData, setUserData] = useState([])
    const [userId, setUserId] = useState()
    firebase.auth().onAuthStateChanged(user => {
        if(user){setUserId(user.uid)}
        else{
            window.location.replace('/login')
        }
    }
    )
    async function getData() {
        const sfRef = await firestore.collection("users").doc(userId).get()
        setUserData(sfRef.data())
    }
    getData()

  
        return (

            userData === undefined ? 'hello' :
                <>
                    <ProductHeader />
                    <br />
                    <br />
                    <div id="profile">
                        <div id="profile-top">
                            <div id="profile-picture-container">
                                <img id='profile-picture' src="" alt="" />
                            </div>
                            <div id="profile-main-details">
    
                            </div>
                        </div>
                        <div id="profile-other-details">
                            <form action="" method="post">
                                <table id="other-details">
                                    <tr>
                                        <td className="label"><label htmlFor="full-name">Name</label></td>
                                        <td> <input type="text" disabled value={`${userData.name}`} name="full-name" id="full-name" /> </td>
                                    </tr>
                                    <tr>
                                        <td className="label"><label htmlFor="address">Address</label></td>
                                        <td> <input type="text" disabled value={userData.address} name="address" id="address" /> </td>
                                    </tr>
                                    <tr>
                                        <td className="label"><label htmlFor="city">City</label></td>
                                        <td> <input type="text" disabled value={`wait man`} name="city" id="city" /> </td>
                                    </tr>
                                    <tr>
                                        <td className="label"><label htmlFor="pincode">Pincode</label></td>
                                        <td> <input type="number" maxLength="6" disabled value={userData.address} name="pincode" id="pincode" /> </td>
                                    </tr>
                                    <tr>
                                        <td className="label"><label htmlFor="state">State</label></td>
                                        <td> <input type="text" disabled value={userData.state} name="state" id="state" /> </td>
                                    </tr>
                                    <tr>
                                        <td className="label"><label htmlFor="phone-num">Phone No.</label></td>
                                        <td> <input type="number" max="999999" disabled value={userData.phone} name="phone-num" id="phone-num" /> </td>
                                    </tr>
                                    <tr>
                                        <td className="label"><label htmlFor="email">Email Id</label></td>
                                        <td> <input type="mail" disabled value={userData.email} name="email" id="email" /> </td>
                                    </tr>
    
                                    <input id='submit-button' type="submit" value="Update Details" />
                                    
                                </table>
                            </form>
                        </div>
                    </div>
    
                </>
        );
    }


export default Profile;