import React from 'react'
import  {NavLink} from 'react-router-dom'
import simpleHouse from '../assets/images/simple-house-logo.png'
import '../style/templatemo-style.css'

function Header() {
    return (
        <div className="placeholder">
            <div className="parallax-window">
                <div className="tm-header">
                    <div className="row tm-header-inner">
                        <div className="col-md-6 col-12">
                            <img src={simpleHouse} alt="Logo" className="tm-site-logo" />
                            <div className="tm-site-text-box">
                                <h1 className="tm-site-title">KISHAN DARSHAN</h1>
                                <h6 className="tm-site-description">Our Slogan here if any</h6>
                            </div>
                        </div>
                        <nav className="col-md-6 col-12 tm-nav">
                            <ul className="tm-nav-ul">
                                <li className="tm-nav-li"><NavLink to="/home" className="tm-nav-link">Home</NavLink></li>
                                <li className="tm-nav-li"><NavLink to="/about" className="tm-nav-link">About</NavLink></li>
                                <li className="tm-nav-li"><NavLink to="/contact" className="tm-nav-link">Contact</NavLink></li>
                                <li className="tm-nav-li"><NavLink to="/login" className="tm-nav-link">Login</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header