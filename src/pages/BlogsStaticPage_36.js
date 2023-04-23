import {useState} from 'react';
import Wrapper from '../assets/wrapper/Blogs_36';
import { useDemoContext_36 } from '../context/DemoContext_36';

const BlogsStaticPages_36 = () => {
    // const [ name, setName] = useState('呂泰霖');
    // const [id , setId] = useState('210410436');
    const {pName, pId, blogs} = useDemoContext_36();

    return(
        <Wrapper>
        <section className="blogs">
      <div className="section-title">
        <h2>{pName} {pId}</h2>
      </div>
      <div className="blogs-center2">
        <article className="blog">
          <img
            src="/images/1.jpg"
            alt="Coffee photo"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>lifestyle <i className="fa-solid fa-mug-saucer"></i></span>
            <h3>seven reasons why coffee is awesome</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article className="blog">
          <img
            src="/images/2.jpg"
            alt="Coffee photo"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>travel <i className="fa-solid fa-globe"></i></span>
            <h3>travel to paris</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article className="blog">
          <img
            src="/images/3.jpg"
            alt="Coffee photo"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>lifestyle <i className="fa-solid fa-mug-saucer"></i></span>
            <h3>coffee brings friendship</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article className="blog">
          <img
            src="/images/4.jpg"
            alt="Coffee photo"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>lifestyle <i className="fa-solid fa-mug-saucer"></i></span>
            <h3>coffee make you feel good</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article className="blog">
          <img
            src="/images/5.jpg"
            alt="Coffee photo"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>lifestyle <i className="fa-solid fa-mug-saucer"></i></span>
            <h3>coffee make you calm</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article className="blog">
          <img
            src="/images/6.jpg"
            alt="Coffee photo"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>travel <i className="fa-solid fa-globe"></i></span>
            <h3>101 tower in Taipei</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article className="blog">
          <img
            src="/images/7.jpg"
            alt="Coffee photo"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>travel <i className="fa-solid fa-mug-saucer"></i></span>
            <h3>sun rise from the mountain</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article className="blog">
          <img
            src="/images/8.jpg"
            alt="Coffee photo"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>travel <i className="fa-solid fa-mug-saucer"></i></span>
            <h3>serene lake with trees</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article className="blog">
          <img
            src="/images/9.jpg"
            alt="Coffee photo"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>travel <i className="fa-solid fa-mug-saucer"></i></span>
            <h3>rocks of queen head in Yehliu Taiwan</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#">read more</a>
          </div>
        </article>
      </div>
    </section>
        </Wrapper>
    )
}

export default BlogsStaticPages_36;