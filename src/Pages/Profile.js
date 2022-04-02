import '../style/Profile.css'
import ProductHeader from '../Component/ProductHeader';
import firebase from '../firebase'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileComon from '../Component/ProfileComon';
const firestore = firebase.firestore()
function Profile() {
    const [userData, setUserData] = useState([])
    const [userId, setUserId] = useState()
    firebase.auth().onAuthStateChanged(user => {
        if (user) { setUserId(user.uid) }
        else {
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
            
                    <br />
                    <br />
                    <div className="container profile-page rounded bg-white  mb-5">
                        <div className="row">
                            <ProfileComon/>
                            <div className="col-md-8">
                                <div className="p-3 py-5">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4 className="text">Profile Settings</h4>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="btn-block"><label className="labels">Name</label><input  type="text" className="form-control" placeholder="Name" value={userData.name} /></div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <label className="labels">Mobile Number</label>
                                            <input  type="text" className="form-control" placeholder="" value={userData.phone} />
                                        </div>

                                        <div className="col-md-12">
                                            <label className="labels">Address Line</label>
                                            <input  type="text" className="form-control" placeholder="" value={userData.address} />
                                        </div>

                                        <div className="col-md-12">
                                            <label className="labels">Email ID</label>
                                            <input  type="text" className="form-control" placeholder="" value={userData.email} />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="labels">State</label>
                                            <input  type="text" className="form-control" placeholder="" value={userData.state} />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="labels">District</label>
                                            <input  type="text" className="form-control" placeholder="" value={userData.district} />
                                        </div>

                                        {/* <div className="col-md-12">
                                            <label className="labels">Ditrict</label>
                                            <input  type="text" className="form-control" placeholder="" value={userData.name} />
                                        </div> */}

                                        <div className="col-md-12">
                                            <label className="labels">Block No.</label>
                                            <input  type="text" className="form-control" placeholder="" value={userData.pincode} />
                                        </div>

                                    </div>
                                    <div className="mt-5 text-center">
                                        <button className="btn btn-primary profile-button" type="button">
                                            Update Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





            </>
    );
}


export default Profile;