import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";
import { login,register } from "../services/auth.api.js";
export function useAuth(){
     
    const context = useContext(AuthContext);
      const {user,setuser,setloading,loading} = context

           const handleLogin = async (username, password) => {
            setloading(true)
            try {
                const response = await login(username, password)
                console.log(response);
                
                setuser(response)
                console.log(user)
                return response
            }
            catch (err) {
                console.log(err.user)
            } finally {
                setloading(false)
            }
        }
    
       const handleRegister = async (username, email, password) => {

        setloading(true)

        try {
            const response = await register(username, email, password)
            setuser(response)
            return response
        } catch (err) {
            console.log(err)
        }
        finally {
            setloading(false)
        }

    }


    return {
        user,loading,handleLogin,handleRegister
    }
    
}