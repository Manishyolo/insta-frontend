import { BrowserRouter,Routes,Route } from "react-router";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Feed from "./features/post/pages/Feed";
import CreatePost from "./features/post/pages/CreatePost";

function AppRoutes(){

    return (
       <BrowserRouter>
         <Routes>
           
            <Route path="/login" element={<Login></Login>}/>
            <Route path="/register" element={<Register></Register>}/>
            <Route path="/feed" element={<Feed></Feed>}/>
            <Route path="/createpost" element={<CreatePost></CreatePost>}></Route>
         </Routes>
       
       </BrowserRouter>

    )
}

export default AppRoutes;