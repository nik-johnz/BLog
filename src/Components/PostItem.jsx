import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'
import '../CSS/Posts.css'

const PostItem = ({postID, category, title, description, authorID, thumbnail}) => {
    const shortDescription = description.length > 200 ? description.substr(0, 200) + '...' : description;
    const PostTitle = title.length > 35 ? title.substr(0, 35) + '...' : title;
  return (
    <article className='post'>
        {/* <div className="post_thumnail">
            <img src={thumbnail} alt={title} />
        </div>
        <div className="post_content">
            <Link to={`/posts/${postID}`}><h3>{PostTitle}</h3></Link>
            <p>{shortDescription}</p>
            <div className="post_footer">
                <PostAuthor/>
                <Link to={`posts/categories/${category}`} className='btn category'>{category}</Link>
            </div>
        </div> */}
        <div className="post_content">
            <img src={thumbnail} alt={title} />
            <div className="post_thumbnail">
            <Link to={`/posts/${postID}`}><h3>{PostTitle}</h3></Link>
            <p>{shortDescription}</p>
            <div className="post_footer">
                <PostAuthor/>
                <Link to={`posts/categories/${category}`} className='btn category'>{category}</Link>
            </div>    
            </div>
        </div>
    </article>
  )
}

export default PostItem