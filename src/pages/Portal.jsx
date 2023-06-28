import React from 'react'
import picture1 from '../img/ayh.jpg'
import picture2 from '../img/eki.jpg'
import './styles/portal.scss'

const Portal = () => {
  return (
    <div className='portal'>
      <section className="heroContainer">
      <div className="imageHero" align="center">
        <a href="https://www.instagram.com/allan_hakkinen_one/" target="_blank">
          <img className="imageIg" src={picture2} alt="" />
        </a>
        <a href="https://www.instagram.com/ayh_academy/">
          <img className="imageIg" src={picture1} alt="" target="_blank" />
        </a>
      </div>
    <div className="descriptionHero">
      <p> Blogger | Trainer | Fotografer | Event Organizer</p>
    </div>
    <hr />
  </section>
  <section className="bodyContainer">
    <div className="bodyContainerDiv">
      <h1>Yuk, Kepoin Apa Saja Kegiatan Kami!</h1>
      <div className='listLink' align="center">
        <a href="" className="btn btn-dark" target="_blank">
          My Website
        </a>
        <a
          href="https://www.instagram.com/ayh_academy/"
          className="btn btn-dark"
          target="_blank"
        >
          My Instagram
        </a>
        <a
          href="https://www.facebook.com/allan.y.hakkinen"
          className="btn btn-dark"
          target="_blank"
        >
          My Facebook
        </a>
        <a
          href="https://shopee.co.id/eki_sukses"
          className="btn btn-dark"
          target="_blank"
        >
          My Shopee
        </a>
        <a
          href="https://ygdffkurash.blogspot.com/2023/05/manfaat-renang-buat-tubuh-manusia.html"
          className="btn btn-dark"
          target="_blank"
        >
          My Blog
        </a>
        <a
          href="https://wa.me/6285162941069"
          target="_blank"
          className="btn btn-dark"
        >
          Contact Me
        </a>
      </div>
    </div>
  </section>
    </div>

  )
}

export default Portal