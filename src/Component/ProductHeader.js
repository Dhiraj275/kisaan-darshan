import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/navbar.css';
import firebase from '../firebase'
function Product_header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">eKisan Darshan</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                I want to buy
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <NavLink className="dropdown-item" to="/products">Vegetables</NavLink>
                                <NavLink className="dropdown-item" to="/products">Fruits</NavLink>
                                <NavLink className="dropdown-item" to="/products">Grains and Pulses</NavLink>
                            </div>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart">Cart</NavLink>
                        </li> 
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" onClick={()=>{firebase.auth().signOut()}} to="/login">Sign Out</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Product_header;