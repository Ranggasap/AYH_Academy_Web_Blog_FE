import React from 'react'
import './styles/jumbotron.scss'
import jumbotronImage from '../img/foto3.png'

const Jumbotron = () => {
  return (
    <div className='jumbotron'>
         <div className='jumbotronBody'>
            <div className="jumbotronContent">
                <h1>Sports Make You a Better Person</h1>
                <p>Ayh Academy</p>
            </div>
        </div>
        <img src={jumbotronImage} alt="sport"/>
    </div>
  )
}

export default Jumbotron