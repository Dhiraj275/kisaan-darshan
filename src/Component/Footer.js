import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (

        <>
            <footer className="tm-footer text-center">
                <p>Copyright © 2022 Example name</p>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </footer>
        </>
    )
}

export default Footer