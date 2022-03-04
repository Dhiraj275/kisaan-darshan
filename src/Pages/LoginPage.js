import { Link } from 'react-router-dom';
import '../style/login.css'
import firebase from '../firebase'
import { useState } from 'react';
function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  firebase.auth().onAuthStateChanged(user=>{
    if(user){
     window.location.replace('/profile')
    }
    
  })
  const signIn = () =>{
    firebase.auth().signInWithEmailAndPassword(formData.email, formData.password).then(()=>{
      window.location.replace('/profile')
    })
  }
  return (
    <>
      <div className="login-page">
        <main>
            <center>
              <h1>Login</h1>
            </center>
            <input onChange={(event) => setFormData({...formData, email: event.target.value })} type="text" placeholder="Username" name="username" id="username" />
            <input onChange={(event) => setFormData({...formData, password: event.target.value })} type="password" placeholder="Password" name="password" id="password" />
            <div className="d-flex justify-content-center"><button onClick={signIn} style={{margin: '10px 0 30px 0'}}>Login</button></div>
            <Link style={{color: 'red', fontWeight: 'bold'}} to="/register">Create New Account</Link>
        </main>
      </div>
    </>
  );
}


export default LoginPage;