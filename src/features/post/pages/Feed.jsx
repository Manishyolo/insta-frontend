import React from 'react'
import "../style/feed.scss"
import Posts from '../components/Posts'
import Nav from '../../shared/components/Nav'




const Feed = () => {
  return (
    <div className='feed-container'>
             <Nav/>
            <Posts></Posts>

    </div>
  )
}

export default Feed