import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Menu = ({cat}) => {
    // const posts = [
    //     {
    //           id: 1,
    //           title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //           desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //           img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //         },
    //         {
    //           id: 2,
    //           title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //           desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //           img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //         },
    //         {
    //           id: 3,
    //           title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //           desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //           img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //         },
    //         {
    //           id: 4,
    //           title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //           desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //           img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //         },
    //   ];

    const [posts, setPosts] = useState([])

    useEffect(() => {
      const fetchData = async () =>{
        try{
          const instance = await axios.create({
            withCredentials: true,
            baseURL: 'https://api.ayhacademy.com',
            headers:{'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
            credentials: 'include'
          })
          const res = await instance.get(`https://api.ayhacademy.com/api/posts/`)
          console.log(res.data)
          setPosts(res.data)
        } catch (err){
          console.log(err);
        }
      }
      fetchData();
    }, [cat])

    

  return (
    <div className='menu'>
        <h1>Other Post You Like</h1>
        {posts.map((post) => (
            <div className="post" key={post.id}>
            <img src={`https://api.ayhacademy.com/api/posts/image/${post.img}`} alt="" />
            <h2>{post.title}</h2>
            <button>Read More</button>
        </div>
        ))}
    </div>
  )
}

export default Menu