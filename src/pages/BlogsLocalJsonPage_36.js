import {useState} from 'react';

import blogData from '../data/blogData2_36';
import Wrapper from '../assets/wrapper/Blogs_36';
import { useDemoContext_36 } from '../context/DemoContext_36';

const BlogsLocalPages_36 = () => {
    // const [ name, setName] = useState('呂泰霖');
    // const [id , setId] = useState('210410436');

    // const [data, setData] = useState(blogData);
    // console.log('blog Data', data);
    const {pName, pId, blogs} = useDemoContext_36();

    return(
        <Wrapper>
        <section className="blogs">
      <div className="section-title">
        <h2>fetch Blogs From Local Json Data</h2>
        <h3> {pName} {pId}</h3>
      </div>
      <div className="blogs-center2">
        {blogs.map((item) => {
          const {id, img, remote_img, category,title,descrip} = item;
          return(
            <article key={id} className="blog">
          <img
            src={remote_img}
            alt={title}
            className="img blog-img"
          />
          <div className="blog-content">
            <span>{category} <i className="fa-solid fa-mug-saucer"></i></span>
            <h3>{title}</h3>
            <p>{descrip}</p>
            <a href="#">read more</a>
          </div>
        </article>
          )
        }) }
      
      </div>
    </section>
        </Wrapper>
    )
}

export default BlogsLocalPages_36;