import React from 'react'
import ProfileComon from '../Component/ProfileComon'

function ChangePassword() {
    return (
        <body>
            <br />
            <br />
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <ProfileComon />
                    <div className="col-md-8">
                        <div className="p-3 py-5">

                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text">Change Password</h4>
                            </div>

                            <div className="row mt-2">
                                <div className="btn-block">
                                    <input type="password" className="form-control" placeholder="Enter Your Current Password" value="" />
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <input type="password" className="form-control" placeholder="Enter New Password" value="" />
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <input type="password" className="form-control" placeholder="Renter New Password" value="" />
                                </div>
                            </div>

                            <div className="mt-5 text-center">
                                <button className="btn btn-primary profile-button" type="button">
                                    Change Password
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </body>
    )
}

export default ChangePassword