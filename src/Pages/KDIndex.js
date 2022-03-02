import React from 'react'
import '../style/kd-index.css'
import {Link} from 'react-router-dom'
function KDIndex() {
    return (
        <>
            <div className='kd-index'>
                <main>
                    <h1>Welcome to Kishan Darshan</h1>
                    <center><Link to="/home"><button>Visit Us</button></Link></center><hr />

                    <h2>Kishan Darshan enables farmers to lead the the world of agricultural system. Here investors, markets, consumers, intellectuals & professionals along with government entities interact seamlessly with farming community.</h2>
                    <div id="join">
                        <a href="register-as.html"><button>Register</button></a>
                        <a href="login-as.html"><button>Login</button></a>
                    </div>
                </main>
            </div>
        </>
    )
}

export default KDIndex