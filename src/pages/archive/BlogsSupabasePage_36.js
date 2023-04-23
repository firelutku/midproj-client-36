import {useState ,useEffect} from 'react';
// import axios from 'axios';

// import blogData from '../data/blogData2_36';

// let api_url = `http://localhost:5000/api/card2_36`;

//  let api_url = `https://one112-server-card-demo-36.onrender.com/api/card2_36`;

import { supabase } from '../db/clientSupabase';

import Wrapper from '../assets/wrapper/Blogs_36';

const BlogsSupabasePages_36 = () => {
    const [ name, setName] = useState('呂泰霖');
    const [id , setId] = useState('210410436');

    const [data, setData] = useState([]);
    // console.log('blog Data', data);

    const  fetchBlogDataFromSupabase = async() => {
      try{
        let { data, error } = await supabase.from('card_36').select('*')

        console.log('data', data);
        // console.log('result', result);
        setData(data);
      } catch (error){
        console.log(error);
      }
    }

    useEffect(()=> {
      fetchBlogDataFromSupabase();
    }, []);

    return(
        <Wrapper>
        <section className="blogs">
      <div className="section-title">
        <h2>fetch Blogs From Supabase Data</h2>
        <h3> {name} {id}</h3>
      </div>
      <div className="blogs-center2">
        {data.map((item) => {
          const {id, img, remote_img, category,title,desc} = item;
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
            <p>{desc}</p>
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

export default BlogsSupabasePages_36;