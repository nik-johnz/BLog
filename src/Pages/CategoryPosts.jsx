import React, { useState } from 'react'
import PostItem from '../Components/PostItem'
import { DUMMY_POSTS } from '../Data/data'
import '../CSS/Posts.css'

const CategoryPosts = () => {
  const[posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className='posts'>
       {posts.length < 0 ? <div className="container post_container">
        {
            posts.map(({id, thumbnail, category, title, des, authorID})=> 
            <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={des} authorID={authorID} />)
        }
        </div> : <h2 className='no'>No Post Founds</h2> }
    </section>
  )
}

export default CategoryPosts