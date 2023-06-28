import React from 'react'
import './styles/home.scss'
import Jumbotron from '../components/Jumbotron'
import About from '../components/About'
import Video from '../components/VideoAbout'
import Location from '../components/Location'
import ContactUs from '../components/ContactUs'
import Portofolio from '../components/Portofolio'

const Home = () => {
  return (
    <div className='home'>
      <Jumbotron/>
      <About/>
      <Video/>
      <Portofolio/>
      <ContactUs/>
      <Location/>
    </div>
  )
}

export default Home