import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/navbar.css';
function Product_header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Kishan Darshan</a>
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
                                <a className="dropdown-item" href="#">Vegetables</a>
                                <a className="dropdown-item" href="#">Fruits</a>
                                <a className="dropdown-item" href="#">Grains and Pulses</a>
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
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Product_header;