import React, { useState } from 'react'
import PostItem from './PostItem'
import '../CSS/Posts.css'
import { DUMMY_POSTS } from '../Data/data'




const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className='posts'>
       {posts.length > 0 ? <div className="container post_container">
        {
            posts.map(({id, thumbnail, category, title, des, authorID})=> 
            <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={des} authorID={authorID} />)
        }
        </div> : <h2 className='center'>No Post Founds</h2> }
    </section>
  )
}

export default Posts