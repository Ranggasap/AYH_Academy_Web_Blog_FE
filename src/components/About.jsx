import React from 'react'
import './styles/aboutMe.scss'
import aboutMeImg from '../img/foto2.png'

const About = () => {
  return (
    <div className='aboutMeBackgroundColor'>
      <div className='aboutMe'>
      <section className="aboutMe-section bg-light" id="aboutMe">
            <h1 className="aboutMeTitle">About Me</h1>
            <div className="aboutMe-container">
              <div className='aboutMeContent'>
                <div className='aboutMeText'>
                  <h2>Ayh Academy</h2> 
                  <p>Ayh Academy adalah organisasi yang merangkul dan melatih anak muda dalam bidang olahraga. Selain melatih Ayh Academy juga merupakan event organizer pertandingan olahraga yang sudah memiliki banyak pengalaman.</p>
                  <p>Nov 27th 2021</p>
                </div>
                <div className="aboutMe-footer">
                  <a href="https://www.instagram.com/ayh_academy/" target="_blank" className="btnAbout bg-primary mb-3">Read More</a>
                </div>
              </div>
              <div className='imgAbout'>
                <img src={aboutMeImg} alt="Foto2"/>
              </div>
            </div>
        </section>
    </div>
    </div>
  )
} 

export default About