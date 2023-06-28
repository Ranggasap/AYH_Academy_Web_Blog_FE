import React from 'react'
import './styles/location.scss'

function Location() {
  return (
    <div>
        <section className="location-container">
            <h1>Training Location</h1>
            <div className="location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7933.106550209225!2d106.61815912418612!3d-6.190479382073686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fea7eb985729%3A0x542725670657dd6f!2sBuddhi%20Dharma%20University!5e0!3m2!1sen!2sid!4v1686491485024!5m2!1sen!2sid" allowFullScreen loading="lazy" ></iframe>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0956648917913!2d106.64762181476934!3d-6.2511243954752125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb970070e405%3A0x3af50f29ee17767!2sBATALYON%20ARHANUD%201!5e0!3m2!1sen!2sid!4v1686491605020!5m2!1sen!2sid" allowFullScreen loading="lazy" ></iframe>
            </div>
        </section>
    </div>
  )
}

export default Location