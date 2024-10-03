import React, { useState } from 'react';
import './Login copy.css'; 
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useAuth } from '../auth/Authenticate';

const Login1 = () => {
    const { user,loginUpdate } = useAuth();
    const [username , setUserName] = useState('');
    const [password, setPassword] = useState('');
   
    const navigate = useNavigate();
   
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
    <div className='donlog'>
       <ToastContainer/>
      <form onSubmit={onFormSubmit} className='conatiner'>
      <label><h1>LOGIN PAGE</h1></label>
        <div>
          <label for='email'>Email:</label><br/>
          <input type="text"
          id='user'
          name="username"
          value={username}
          onChange={onUserNameChange}
          required style={{width:'100%'}}/>
        </div>
        <div>
          <label for='password'>password:</label><br/>
          <input type="password"
          name="password"
          value={password}
          onChange={onPasswordChange}
          required style={{width:'100%'}}/><br/>
        </div>
        <div style={{textAlign:'center'}}>
          <button type='submit' style={{backgroundColor:'#51e6798f',borderRadius:'5px',border:'2px solid 1px solid white'}}>submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login1