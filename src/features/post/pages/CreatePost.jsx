import React, { useRef, useState } from 'react'
import { usePosts } from '../hooks/usePosts';
import { useNavigate } from 'react-router';
const CreatePost = () => {

  const [caption,setcaption] = useState("");
  const postImageInputFieldRef = useRef(null);
  const navigate = useNavigate();
  const {loading,handleCreatePost} = usePosts();

  const handlesubmit = async(e)=>{
 e.preventDefault()
    try {  
    const file = postImageInputFieldRef.current.files[0]
 console.log("lallalalla")
     await handleCreatePost(file,caption);

    navigate("/feed")
        
    } catch (error) {
        
    }
 
  }

  if(loading){
    return (
        <main>
            <h1>Creating Post....</h1>
        </main>
    )
  }

  return (
    <main>
        <div className="form-container">
             <h1>Create post</h1>
              <form onSubmit={handlesubmit}>
                <label className='button primary-button' htmlFor="file">Select file</label>
                <input ref={postImageInputFieldRef} type="file" hidden  id='file'/>
                <input onChange={(e)=>setcaption(e.target.value)} value={caption} type="text" placeholder='Enter caption' />
                <button className='button primary-button'>Create</button>
              </form>

        </div>

    </main>
  )
}

export default CreatePost