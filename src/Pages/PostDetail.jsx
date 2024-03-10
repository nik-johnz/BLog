import React from 'react'
import '../CSS/Posts.css'
import PostAuthor from '../Components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../Assets/blog22.png'

const PostDetail = () => {
  return (
      <section className="post-detail">
        <div className="container post-detail_container">
          <div className="post-detail_header">
            <div> 
            <PostAuthor/>
            </div>
            <div className="post-detail_button">
              <Link to={`/posts/viewer/edit`} className='btn sm primary'>Edit</Link>
              <Link to={`/posts/viewer/delete`} className='btn sm danger'>Delete</Link>
            </div>
          </div>
          {/* <h1>This is Post Title</h1> */}
          <div className="post-detail_thumbnail">
          <h1>This is Post Title</h1>
            <img src={Thumbnail} alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque expedita dicta adipisci illo facere iure ipsum autem assumenda voluptatum, quo, quos commodi, nisi a nemo eum blanditiis. Tenetur similique recusandae nam voluptatum debitis dolores quibusdam. Esse vitae mollitia consequuntur distinctio!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime laborum error sint. Amet sed molestias nostrum aperiam cum vero nulla eos commodi. Labore qui eos illo, earum explicabo maiores! Similique, provident non obcaecati inventore officia consequatur optio est reiciendis. Dignissimos distinctio quasi repellendus assumenda ab deserunt sunt officiis autem!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quibusdam iste reiciendis, earum, odit laboriosam hic voluptas cumque nam quidem repudiandae molestiae tenetur ipsam perspiciatis repellat et fugiat soluta. Accusamus, saepe facilis esse aliquid expedita quae deserunt, quasi quibusdam pariatur fuga autem! Perspiciatis odio maiores quidem voluptatem similique laborum quisquam provident modi ex ipsa, ipsam obcaecati et, velit ducimus! Possimus perspiciatis fugiat, tempora nulla autem minus incidunt facere, quia dolores hic sed neque ad nihil est commodi debitis! Magni recusandae officiis cupiditate illo placeat voluptatibus, debitis amet quae harum. Perspiciatis ea debitis minima alias consectetur! Voluptate doloremque non blanditiis quo.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit incidunt explicabo assumenda delectus, vitae aliquam cupiditate vel earum ad, nisi, ut rem sit optio reprehenderit dignissimos? Illo, enim excepturi? Vitae illum, inventore ex deserunt rerum aliquam numquam sunt consequuntur, totam necessitatibus quo? Perspiciatis blanditiis ad repellat iusto laudantium adipisci ipsa ullam sapiente, nam ducimus reprehenderit perferendis id atque qui ab commodi rerum voluptatibus dolore debitis, sint maiores deserunt placeat omnis numquam? Deleniti, asperiores quisquam numquam natus rem dolores animi praesentium sequi exercitationem officiis, porro voluptate magnam quas, iure quia sapiente accusantium est voluptatibus facilis molestiae? Ad sunt rerum repudiandae, consequatur quo magnam libero vel facere ex consequuntur, officia inventore recusandae cum eveniet quam atque facilis perferendis sapiente deleniti? Consequuntur voluptatum officia consequatur? Sapiente excepturi fugit incidunt aliquid sint eveniet veniam animi omnis in fuga expedita, hic ullam eum atque corrupti rem deserunt nesciunt, quod error ipsum! Quam ad veniam laboriosam necessitatibus eligendi officia quasi veritatis dolorum dolor asperiores enim temporibus deserunt labore molestias assumenda recusandae, officiis laborum dolores vel aperiam ex incidunt corrupti fugit tenetur. Eos ex a, officiis explicabo doloribus dolores dolore neque libero sunt quia? Quae a ad repellendus placeat maxime nobis aliquam dolorum accusamus aperiam veritatis.</p>
        </div>
      </section>
  )
}

export default PostDetail