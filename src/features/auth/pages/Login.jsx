import React, { useState } from 'react'

import { Link } from 'react-router'
import "../style/form.scss";
import { useAuth } from '../hooks/useAuth.js';
import { useNavigate } from 'react-router';


const Login = () => {
    
          
           const [username,Setusername] = useState('');
           const [password,Setpassword] = useState('');
       
        const {user,handleLogin,loading} = useAuth();
        const navigate = useNavigate();

        const handleSubmit = (e)=>{
         e.preventDefault();
               handleLogin(username,password).then((res)=>{
                  console.log(user);
                  navigate("/feed")
                  
               })
        }

         if(loading){
            return (
               <h1>Loading......</h1>
            )
         }




  return (
     <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit }>
       <input onChange={(e)=>Setusername(e.target.value)} value={username} type="text"placeholder='Username' />
       <input onChange={(e)=>Setpassword(e.target.value)} value={password} type="text" placeholder='Password' />
       <button>Login</button>
      </form>
      <p>Dont have account create now <Link to={'/register'}>Register</Link></p>
     </div>

  )
}

export default Login