import React, { useState } from 'react'
import '../CSS/Posts.css'
import { Link } from 'react-router-dom'
import authorData from '../Data/author'

// import Avatar1 from '../Assets/avatar1.png'
// import Avatar2 from '../Assets/avatar2.png'
// import Avatar3 from '../Assets/avatar1.png'
// import Avatar4 from '../Assets/avatar2.png'
// import Avatar5 from '../Assets/avatar1.png'

// const authorData = [
//   {id: 1, avatar: Avatar1, name: 'Nikhil John', posts: 3},
//   {id: 2, avatar: Avatar2, name: 'Nikhil John', posts: 9},
//   {id: 3, avatar: Avatar3, name: 'Nikhil John', posts: 5},
//   {id: 4, avatar: Avatar4, name: 'Nikhil John', posts: 6},
//   {id: 5, avatar: Avatar5, name: 'Nikhil John', posts: 2},
// ]

const Authors = () => {
  const [authors, setAuthors] = useState(authorData)

  return (
    <section className='authors'>
      <h1>Author's</h1>
     {
      authors.length > 0 ?
      <div className='container authors_container'>
        {authors.map(({id, avatar, name, posts})=>{
          return <Link className='author' key={id} to={`/posts/users/${id}`}>
            <div className="author_avatar">
            <img src={avatar} alt={`Image of ${name}`} />
            </div>
            <div className="author_info">
              <h4>{name}</h4>
              <p>{posts}</p>
            </div>
          </Link>
        })}
      </div>: <h2 className='center'>No Authors/Users Found.</h2> }
    </section>
  )
}

export default Authors