import React from 'react'
import video1 from '../videos/video1.mp4'
import './styles/videoAbout.scss'

function VideoAbout() {
  return (
      <div className='aboutMeVideo'>
      <section className="aboutMe-section bg-light" id="aboutMe">
            <h1 className="aboutMeTitle">Check This Out!</h1>
            <div className="aboutMe-container">
              <div className='aboutMeContent'>
                <div className='aboutMeText'>
                  <h2>Special Offer</h2> 
                  <p>Ayh Academy sedang membuka kesempatan bagi kalian yang ingin mengembangkan skills dibidang bahasa inggris. Ayok jangan lepaskan kesempatan ini</p>
                  <p>Nov 27th 2021</p>
                </div>
                <div className="aboutMe-footer">
                  <a href="https://www.instagram.com/ayh_academy/" target="_blank" className="btnAbout bg-primary mb-3">Read More</a>
                </div>
              </div>
                <iframe className='myVideo' src="https://www.youtube.com/embed/sLlB2euNPOI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </section>
    </div>
  )
}

export default VideoAbout