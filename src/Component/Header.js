import React from 'react'
import { NavLink } from 'react-router-dom'
import simpleHouse from '../assets/images/simple-house-logo.png'
import '../style/templatemo-style.css'
import { UserIDProvider } from '../App'
function Header() {
    return (
        <div className="placeholder">
            <div className="parallax-window">
                <div className="tm-header">
                    <div className="row tm-header-inner">
                        <div className="col-md-6 col-12">
                            <img src={simpleHouse} alt="Logo" className="tm-site-logo" />
                            <div className="tm-site-text-box">
                                <h1 className="tm-site-title">eKisan Darshan</h1>
                                <h6 className="tm-site-description">Our Slogan here if any</h6>
                            </div>
                        </div>
                        <nav className="col-md-6 col-12 tm-nav">
                            <ul className="tm-nav-ul">
                                <li className="tm-nav-li"><NavLink to="/home" className="tm-nav-link">Home</NavLink></li>
                                <li className="tm-nav-li">
                                    <UserIDProvider.Consumer>
                                        {
                                            (userData) => {
                                                if (userData) {
                                                    return(
                                                    <NavLink to="/profile" className="tm-nav-link">Profile</NavLink>)
                                                }
                                                else{
                                                    return(
                                                        <NavLink to="/Login" className="tm-nav-link">Login</NavLink>)    
                                                    
                                                }

                                            }
                                        }
                                    </UserIDProvider.Consumer>

                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header