import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:3000",
    withCredentials: true,
})


export async function getFeed(){
      
    try {

    const response = await api.get("/api/post/getfeed");
  console.log(response.data.allPosts);
  
    return response.data.allPosts
        
    } catch (error) {
         throw error
    }

}

export async function createPost(imageFile,caption){
        
   try {
    
         const formData = new FormData();

         formData.append("image",imageFile);
         formData.append("caption",caption);

         const respone = await api.post("/api/post/create",formData);

         return respone.data
 

   } catch (error) {
     throw error
   }

}

export async function LikePost(postId){
  try {
    
   const respone = await api.post(`/api/post/like/${postId}`);

   return respone.data

  } catch (error) {
      throw error
  }
}