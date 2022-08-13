import { BasicPage } from "../components/BasicPage";
import Home from "@mui/icons-material/Home";
import axios from 'axios'
import { useEffect, useState } from "react";



export const HomePage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_HOST}/posts`, {headers: {'Content-Type': 'application/json','authorization': window.localStorage.getItem('token')}})
    .then(response=>{
      console.log(response.data)
      setData(response.data.posts)
    })
    .catch(err => {
      console.log(err)
    })
  
    return () => {
      // second
    }
  }, [])
  
  return (
  <>
  <header class="main-header">
        <h1><span>Acrylic Painting</span> Gallery</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          quam!
        </p>
      </header>
  
      <main class="container">
      {data.map((post,i) =>
      {return <section class="card" data-aos="fade-left">
          <img src="https://i.ibb.co/VvC0vpN/paint-1.png" alt="" />
          <div>
            <h3>{post.title}</h3>
            <p>
              {post.description}
            </p>
            <a href="/" class="btn">Buy Now</a>
          </div>
        </section>}
     )}
        
  
        
      </main>
    
  </>
  )
  // <BasicPage title="Home Page" icon={<Home />} />;
};
