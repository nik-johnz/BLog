
import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../Assets/avatar1.png'
import '../CSS/Posts.css'

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/sdfsdf`} className='post_author'>
        <div className="post_author-avatar">
            <img src={Avatar} alt="" />
        </div>
        <div className="post_auhtor-details">
            <h5>By: Ernest</h5>
            <small>Just Now</small>
        </div>
    </Link>
  )
}

export default PostAuthor