import React, {useState, useEffect, useContext} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import Menu from '../components/Menu'
import axios from 'axios'
import moment from 'moment'
import { AuthContext } from '../context/authContext'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import DOMPurify from 'dompurify'
import './styles/single.scss'

const Single = () => {
  const [post, setPost] = useState({})

    const location = useLocation()
    const navigate = useNavigate()

    const postId = location.pathname.split("/")[3]

    const {currentUser} = useContext(AuthContext)
  
    useEffect(() => {
      const fetchData = async () =>{
        try{
          const res = await axios.get(`https://api.ayhacademy.com/api/posts/${postId}`)
          setPost(res.data)
        } catch (err){
          console.log(err);
        }
      }
      fetchData();
    }, [postId])

    const handleDelete = async ()=>{
      try{
        const instance = await axios.create({
          withCredentials: true,
          baseURL: 'https://api.ayhacademy.com',
          headers:{'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
          credentials: 'include'
        })
        await instance.delete(`https://api.ayhacademy.com/api/posts/${postId}`)
        navigate("/blog")
      } catch (err){
        console.log(err);
      }
    }

    const getText = (html) => {
      const doc = new DOMParser().parseFromString(html, 'text/html')
      return doc.body.textContent
    }

    

  return (
    <div className='single'>
      <div className='content'>
        <img src={`https://api.ayhacademy.com/api/posts/image/${post.img}`} alt="" />
        <div className="user">
          {post.userImage && 
          <img src={post.userImage} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?
          <div className="edit">
            <Link to={`/blog/write?edit=${post.id}`} state={post}>
              <img src={Edit} alt="" />
            </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
          </div> : <div/>}
        </div>
        <h1>{post.title}</h1>
        <p  dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.description),
          }}></p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single