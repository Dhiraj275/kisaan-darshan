import React, { useState } from 'react'
import firebase from '../firebase';
function RegistrationPage() {

    const [formData, setFormData] = useState([])
    let name, value;
    const handleFormChanges = (event) => {
        name = event.target.name;
        value = event.target.value;
        setFormData({ ...formData, [name]: value });
    }
    const registrUser = ()=>{
        console.log(formData)
        firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password).then((event)=>{
            // console.log(event.user.uid)
            delete formData.password
            firebase.firestore().collection('users').doc(event.user.uid).set({...formData}).then(()=>{
                alert("User Registed Successfully!")
                window.location.replace('/login')
            })
        })
    }
    return (
        <>
            <div className="form_wrapper row p-5">
                <div className="form_container col-8 m-auto">
                    <div className="title_container">
                        <h2>Registration Form</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="">
                            <form>
                                <div className="row clearfix">
                                    <div className="col_half">
                                        <div className=" d-flex align-items-center  form-group d-flex flex-row"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                            <input type="text" className="form-control" onChange={handleFormChanges} name="firstname" placeholder="First Name" required />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="col_half">
                                        <div className=" d-flex align-items-center  form-group d-flex flex-row"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                            <input type="text" className="form-control" onChange={handleFormChanges} name="lastname" placeholder="Last Name" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="input_field  d-flex align-items-center  form-group"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                    <select className="form-control" onChange={handleFormChanges} name="accountType" id="">
                                        <option value="Farmer">Farmer</option>
                                        <option value="Consumer">Consumer</option>
                                        <option value="Coorporate">Coorporate</option>
                                    </select>
                                </div>
                                <div className="input_field  d-flex align-items-center  form-group"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                    <input type="text" className="form-control" onChange={handleFormChanges} name="address" placeholder="Address" required />
                                </div>
                                <div className=" d-flex align-items-center  form-group d-flex flex-row col-md-4">
                                    <select className="form-control" onChange={handleFormChanges}  name="state" id="inputState">
                                        <option value="SelectState">Select State</option>
                                        <option value="Andra Pradesh">Andra Pradesh</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madya Pradesh">Madya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Orissa">Orissa</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttaranchal">Uttaranchal</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="West Bengal">West Bengal</option>
                                        <option disabled>UNION Territories</option>
                                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                        <option value="Daman and Diu">Daman and Diu</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Lakshadeep">Lakshadeep</option>
                                        <option value="Pondicherry">Pondicherry</option>
                                    </select>
                                </div>
                                <div className=" d-flex align-items-center  form-group d-flex flex-row col-md-4">
                                    <select className="form-control" onChange={handleFormChanges}  id="inputDistrict" name="state">
                                        <option value="">Select District</option>
                                    </select>
                                </div>
                                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                                    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                                    crossorigin="anonymous"></script>
                              

                                <div className="input_field  d-flex align-items-center  form-group"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                    <input type="text" className="form-control" onChange={handleFormChanges} name="block" placeholder="Block No." required />
                                </div>
                                <div className="input_field  d-flex align-items-center  form-group"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                    <input type="number" name="phone" className="form-control" onChange={handleFormChanges} placeholder="Phone.no" required />
                                </div>
                                <div className="input_field  d-flex align-items-center  form-group"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                    <input type="email" name="email" className="form-control" onChange={handleFormChanges} placeholder="Email" required />
                                </div>
                                <div className="input_field  d-flex align-items-center  form-group"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                    <input type="text" className="form-control" onChange={handleFormChanges} name="username" placeholder="Username" required />
                                </div>
                                <div className="input_field  d-flex align-items-center  form-group"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                    <input type="password" name="password" className="form-control" onChange={handleFormChanges} placeholder="Password" required />
                                </div>
                                <div className="input_field  d-flex align-items-center  form-group"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                    <input type="password" name="password" className="form-control" placeholder="Re-type Password" required />
                                </div>
                                <div className="input_field  d-flex align-items-center  form-group radio_option">
                                    <input  onChange={()=>setFormData({...formData, gender:"male"})} type="radio" name="radiogroup1" id="rd1" />
                                    <label for="rd1">Male</label>
                                    <input  onChange={()=>setFormData({...formData, gender:"female"})} type="radio" name="radiogroup1" id="rd2" />
                                    <label for="rd2" >Female</label>
                                </div>
                                <div className="input_field  d-flex align-items-center  form-group checkbox_option">
                                    <input   type="checkbox" id="cb1" />
                                    <label for="cb1">I agree with terms and conditions</label>
                                </div>
                                <button onClick={registrUser} type="button">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegistrationPage