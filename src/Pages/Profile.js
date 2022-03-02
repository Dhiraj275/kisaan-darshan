import '../style/Profile.css'
import ProductHeader from '../Component/ProductHeader';

function Profile() {
    return (
        <>
        <ProductHeader />
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
                                <td className="label"><label for="full-name">Name</label></td>
                                <td> <input type="text" name="full-name" id="full-name" /> </td>
                            </tr>
                            <tr>
                                <td className="label"><label for="address">Address</label></td>
                                <td> <input type="text" name="address" id="address" /> </td>
                            </tr>
                            <tr>
                                <td className="label"><label for="city">City</label></td>
                                <td> <input type="text" name="city" id="city" /> </td>
                            </tr>
                            <tr>
                                <td className="label"><label for="pincode">Pincode</label></td>
                                <td> <input type="number" maxLength="6" name="pincode" id="pincode" /> </td>
                            </tr>
                            <tr>
                                <td className="label"><label for="state">State</label></td>
                                <td> <input type="text" name="state" id="state" /> </td>
                            </tr>
                            <tr>
                                <td className="label"><label for="phone-num">Phone No.</label></td>
                                <td> <input type="number" max="999999" name="phone-num" id="phone-num" /> </td>
                            </tr>
                            <tr>
                                <td className="label"><label for="email">Email Id</label></td>
                                <td> <input type="mail" name="email" id="email" /> </td>
                            </tr>
                            <tr>
                                <td className="label"><label for="password">Password</label></td>
                                <td> <input type="password" name="password" id="password" /> </td>
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