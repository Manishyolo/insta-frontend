import { createContext, useState } from "react";


export const PostContext = createContext();

export function PostProvider({children}){
       const [loading,setloading] = useState(false);
       const [feed,setfeed] = useState(null);
       const [post,setpost] = useState(null);
       const [isPostLiked,setisPostLiked] = useState(false);



       return (
          <PostContext.Provider value={{loading,setloading,post,setpost,feed,setfeed,isPostLiked,setisPostLiked}}>
             {children}
          </PostContext.Provider>
       )
}