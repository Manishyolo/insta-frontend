import React, { useEffect } from 'react'
import "../style/Posts.scss"
import 'remixicon/fonts/remixicon.css'
import Post from './Post'
import { useNavigate } from 'react-router'
import { usePosts } from '../hooks/usePosts'

const Posts = () => {

    const {loading,feed,handlegetfeed,handlelikePost,isPostLiked,setisPostLiked} = usePosts();


    useEffect(()=>{
             
         handlegetfeed()


    },[])


        if(loading || !feed){
        return (<main><h1>Feed is loading...</h1></main>)
    }


    console.log(feed);
    


  return (
    <div className='posts'>
        {
            feed.map((post)=>{

                
                return (
                      <Post user={post.userId} likePost={handlelikePost} setisPostLiked={setisPostLiked} isPostLiked={isPostLiked} post={post}></Post>
                )
            })
        }
        

    </div>
  )
}

export default Posts