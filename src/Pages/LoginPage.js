import { Link } from 'react-router-dom';
import '../style/login.css'
function LoginPage() {
  return (
    <>
      <div className="login-page">
        <main>
            <center>
              <h1>Login</h1>
            </center>
            <input type="text" placeholder="Username" name="username" id="username" />
            <input type="password" placeholder="Password" name="password" id="password" />
            <div className="d-flex justify-content-center"><Link to="/profile"><button style={{margin: '10px 0 30px 0'}}>Login</button></Link></div>
      
        </main>
      </div>
    </>
  );
}


export default LoginPage;