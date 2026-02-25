import React from 'react'
import "../style/Posts.scss"

const Post = ({user,post,handlelikePost,isPostLiked,setisPostLiked}) => {
 
    console.log(isPostLiked)


  return (
    <div className="post">
              <div className="top-section">
                <div className="user-info">
                    <div className="user-img">
                        <img src={user.profile_img} alt="" />
                    </div>
                    <h3 className='user-name'>
                        {user.username}
                    </h3>
                </div>
              </div>
               <div className="mid-section">
                <img src={post.imgUrl} alt="" />
               </div>
               <div className="bottom-section">
                <div className="controls">
                    <button >
                       {post.isLiked ? "Unlike" : "Like"}
                    </button>
                    <button>
                        Comment
                    </button>
                    <button>
                        Share
                    </button>
                </div>
                <p>{post.caption}</p>
               </div>
               <div className="divder"></div>
          </div>
  )
}

export default Post