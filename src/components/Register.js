import React,{useState} from 'react'
import './Register.css'
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useAuth } from '../auth/Authenticate';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const { user,loginUpdate } = useAuth();
    const [username , setUserName] = useState('');
    const [password, setPassword] = useState('');
   
    const navigate = useNavigate();

    function changesignup(){
      const signup = document.getElementById('alter-sign-up')
      signup.style.visibility="hidden"
      signup.style.position="absolute"
      const signup1 = document.getElementById('alter-sign-up1')
      signup1.style.visibility="visible"
      signup1.style.position="relative"
      const signin = document.getElementById('alter-sign-in')
      signin.style.visibility="visible"
      signin.style.position="relative"
      const signin1 = document.getElementById('alter-sign-in1')
      signin1.style.visibility="hidden"
      signin1.style.position="absolute"

    }
    function changesignin(){
      const signup = document.getElementById('alter-sign-up')
      signup.style.visibility="visible"
      signup.style.position="relative"
      const signup1 = document.getElementById('alter-sign-up1')
      signup1.style.visibility="hidden"
      signup1.style.position="absolute"
      const signin = document.getElementById('alter-sign-in')
      signin.style.visibility="hidden"
      signin.style.position="absolute"
      const signin1 = document.getElementById('alter-sign-in1')
      signin1.style.visibility="visible"
      signin1.style.position="relative"

    }
   
    function onUserNameChange(e){
       setUserName(e.target.value);
       console.log(username);
    }
   
    function onPasswordChange(e){
       setPassword(e.target.value);
       console.log(password);
    }
   
     const onFormSubmit = async e => {
       e.preventDefault();
   
       try {
         const response = await axios.post('https://dummyjson.com/user/login', { username, password });
         loginUpdate(response.data)
         toast.success('Login Successfully', { position : 'top-center'})
         setTimeout(() =>{ navigate('/products')},5000);
         console.log(response);
         console.log('User data',user);
       } catch (error) {
           toast.error('Login Failed',{ position : 'top-center'})
         console.error('Login failed:', error.response.data.msg);
       }
     };
  return (
    <div>
        <ToastContainer/>
         <div id="frame1">
        <div class="Login" style={{display: "flex"}}>
        <div class="left" >
          <div id='alter-sign-in1' className='alter-sign-in1'><div class="log">
                <form  onSubmit={onFormSubmit}>
                <div class="welcome"><h1 style={{margin: "3px"}}>Sign In</h1><h4 style={{margin: "3px"}}>Welcome back buddy</h4></div>
                <div class="email"><label for="email"  >Email:</label><input type="text" name="text" id="email" value={username}  onChange={onUserNameChange} /></div>
                <div class="pass"><label for="password">Password:</label><input type="password" name="password" id="password"  value={password} onChange={onPasswordChange}/></div>
                <div class="tick"><span class="rem"><input type="checkbox" id="rem" name="remember" required/><label for="remember">Remember me</label></span>
                                  </div>
                <div class="sign"><button class="button-sign">Sign In</button></div>
                </form>
                <div class="google"><button class="button-signg">Sign In with Google</button></div>
            </div>
            <div class="acc"><p>Don't Have an account?</p><Link style={{textAlign:" center", display: "flex", alignItems: "center",margin: "10px"}} href='#'><button onClick={changesignup}>Sign Up</button></Link>
            </div>
            </div>

            <div className='alter-sign-in' id='alter-sign-in'>
         
         </div>
        </div>
        <div class="right">
        <div className='alter-sign-up1' id='alter-sign-up1'>
        <form  onSubmit={onFormSubmit}>
                <div class="welcome-reg"><h1 style={{margin: "3px"}}>Sign Up</h1><h4 style={{margin: "3px"}}>Lets start with your journey</h4></div>
                <div class="email-reg"><label for="email"  >Email:</label><input type="text" name="text" id="email" value={username}  onChange={onUserNameChange} /></div>
                <div class="mobile-reg"><label for="Mobile"  >Mob.No:</label><input type="number" name="number" id="mobile number"/></div>
                <div class="pass-reg"><label for="password">Password:</label><input type="password" name="password" id="password"  value={password} onChange={onPasswordChange}/></div>
                <div class="con-pass-reg"><label for="password">Password:</label><input type="password" name="password" id="confirm-password"/></div>
                <div class="sign-reg"><button class="button-sign-reg">Sign Up</button></div>
                </form>
                <div class="acc"><p>Already Have an account?</p><Link style={{textAlign:" center", display: "flex", alignItems: "center",margin: "10px"}} href='#'><button onClick={changesignin}>Sign In</button></Link></div>
                </div>
                <div className='alter-sign-up' id='alter-sign-up'>
          
         </div>
         </div>
        
        </div>
    </div>
    </div>
  )
}

export default Register