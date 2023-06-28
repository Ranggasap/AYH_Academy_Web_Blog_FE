import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import axios from "axios"
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import moment from 'moment'
import './styles/write.scss'

const Write = () => {
  const state = useLocation.state
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc, "")
  const [file, setFile] = useState("")
  const [cat, setCat] = useState(state?.cat || "")
  const navigate = useNavigate()

  const upload = async () => {
    try{
      const instance = await axios.create({
        withCredentials: true,
        baseURL: 'https://api.ayhacademy.com',
        headers:{'Access-Control-Allow-Origin': '*', 'Content-Type': 'multipart/form-data' },
        credentials: 'include'
      })

      const formData = new FormData();
      formData.append("file", file)
      const res = await instance.post("https://api.ayhacademy.com/api/upload", formData)
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  const handleClick = async (e)=>{
    e.preventDefault()
    const imgUrl = await upload()
    try{
      const instance = await axios.create({
        withCredentials: true,
        baseURL: 'https://api.ayhacademy.com',
        headers:{'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
        credentials: 'include'
      })

      state ? instance.put(`https://api.ayhacademy.com/api/posts/${state.id}`, {
        title, desc:value, cat, img: file ? imgUrl: ""
      }) : await instance.post(`https://api.ayhacademy.com/api/posts`, {
        title, desc:value, cat, img: file ? imgUrl: "", date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      })
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }

  console.log(value);
  return (
    <div className='add'>
      <div className="content">
        <input type="text" value={title}  placeholder='Title' onChange={e=>setTitle(e.target.value)}/>
        <div className="editorContainer">
          <ReactQuill className='editor' theme='snow' value={value} onChange={setValue}/>
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{ display:"none" }} type="file" name='' id='file' onChange={e=>setFile(e.target.files[0])} />
          <label className='file' htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a Draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>

          <div className="cat">  
            <input type="radio" checked={cat === "sport"} name='cat' value="sport" id="sport" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="sport">Sport</label>
          </div>
          <div className="cat">  
          <input type="radio" checked={cat === "Event"} name='cat' value="event" id="event" onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="event">Event</label>
          </div>
          <div className="cat">  
          <input type="radio" checked={cat === "about"} name='cat' value="about" id="about" onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="about">About</label>
          </div>
          <div className="cat">  
          <input type="radio" checked={cat === "other"} name='cat' value="other" id="other" onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="other">Other</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write