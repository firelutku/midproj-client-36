import {useState ,useEffect} from 'react';
import axios from 'axios';
import Wrapper from '../assets/wrapper/Blogs_36';

import { useDemoContext_36 } from '../context/DemoContext_36';


// import blogData from '../data/blogData2_36';

// let api_url = `http://localhost:5000/api/card2_36`;

 let api_url = `https://one112-server-card-demo-36.onrender.com/api/card2_36`;


const BlogsNodeServerPages_36 = () => {
    // const [ name, setName] = useState('呂泰霖');
    // const [id , setId] = useState('210410436');

    // const [data, setData] = useState([]);
    // console.log('blog Data', data);

    const {pName, pId, blogs2} = useDemoContext_36();


    const  fetchBlogDataFromNodeServer = async() => {
      try{
        const result = await axios.get(api_url);
        console.log('result', result);
        // setData(result.data);
      } catch (error){
        console.log(error);
      }
    }

    useEffect(()=> {
      fetchBlogDataFromNodeServer();
    }, []);

    return(
        <Wrapper>
        <section className="blogs">
      <div className="section-title">
        <h2>fetch Blogs From Node Server Data</h2>
        <h3> {pName} {pId}</h3>
      </div>
      <div className="blogs-center2">
        {blogs2.map((item) => {
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

export default BlogsNodeServerPages_36;