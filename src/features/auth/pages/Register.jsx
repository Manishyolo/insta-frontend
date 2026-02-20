import React from "react";

import "../style/form.scss";
import { Link } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const [username, Setusername] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");

   const {handleRegister,loading} = useAuth();
        const navigate = useNavigate();

        const handleSubmit = (e)=>{
         e.preventDefault();
               handleRegister(username,email,password).then((res)=>{
                  console.log(res);
                  navigate("/")
                  
               })
        }

         if(loading){
            return (
               <h1>Loading......</h1>
            )
         }



  return (
    <div className="form-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={(e)=>Setusername(e.target.value)} value={username} type="text" placeholder="Username" />
        <input onChange={(e)=>Setemail(e.target.value)} value={email} type="text" placeholder="Email" />
        <input onChange={(e)=>Setpassword(e.target.value)} value={password} type="text" placeholder="Password" />
        <button>Register</button>
      </form>
      <p>
        Already have account <Link to={"/login"}>Login</Link>{" "}
      </p>
    </div>
  );
};

export default Register;
