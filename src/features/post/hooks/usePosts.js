import { getFeed ,createPost, LikePost} from "../services/Post.api";
import { PostContext } from "../Post.Context";
import { useContext, useEffect } from "react";



export function usePosts(){
       
     const context = useContext(PostContext);

     const {loading,setloading,feed,setfeed,isPostLiked,setisPostLiked} = context

     async function handlegetfeed (){
           setloading(true)
         try {
            const response = await getFeed();
            console.log(response);
            
            setfeed(response)

         } catch (error) {
            console.log(error)
         }finally{
            setloading(false)
         }
    }
    async function handleCreatePost(imageFile,caption){
        setloading(true)
        const data = await createPost(imageFile,caption);
        setfeed([data.post],...feed);
        setloading(false)
    }

    async function handlelikePost(postId){
           
      setisPostLiked(false)
      await LikePost(postId);
      setisPostLiked(true)

    }


    useEffect(()=>{
      handlegetfeed()
    },[])
 return {loading,feed,handlegetfeed,handleCreatePost,isPostLiked,setisPostLiked,handlelikePost};

}