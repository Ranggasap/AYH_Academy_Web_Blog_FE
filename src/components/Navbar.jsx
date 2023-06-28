import React, { useContext } from 'react'
import {AuthContext} from '../context/authContext.js'
import {Link} from 'react-router-dom'
import './styles/navbar.scss'
import  {FaBars, FaTimes} from "react-icons/fa"
import {useRef} from "react"

const Navbar = () => {

  const navRef = useRef();
  const showNavbar = () =>{
    navRef.current.classList.toggle("responsive_nav")
  }

  const {currentUser , logout} = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className="container" ref={navRef}>
        <div className="logo">
          <Link className='link' to="/">
            <h1>Ayh Academy</h1>
          </Link>
        </div>
        <div className="links">
          <Link className='link' to="/blog">
            <h6>Blog</h6>
          </Link>
          <Link className='link' to="/portal">
            <h6>Portal</h6>
          </Link>
          <span>{currentUser?.username}</span>
         {currentUser? <span onClick={logout}>Logout</span> : <Link className='link' to="/login">Login</Link>}
          {currentUser?
          <span className='write'>
            <Link className='link' to="/blog/write">Write</Link>
          </span> : <div/>
          }
          
        </div>
        <button className='nav-btn nav-open-btn' onClick={showNavbar}>
          <FaBars/>
        </button>
      </div>
    </div>
    
  )
}

export default Navbar