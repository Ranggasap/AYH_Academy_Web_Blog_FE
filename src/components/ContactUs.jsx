import React from 'react'
import './styles/contactUs.scss'


function ContactUs() {
  return (
    <div className='contactUs'>
        <section className="contact-container" id="contact">
        <div className="contactContent">
            <div className='contactContentContainer'>
                <div className='contactText'>
                    <h1>Contact Us</h1>
                    <div className='button-contact-us'>
                        <a className="btn" href="mailto:ayh21.academy@gmail.com"><i className="bi bi-envelope-fill"></i> ayh21.academy@gmail.com</a>
                        <a className="btn" href="https://wa.me/6285162941069"><i className="bi bi-whatsapp"></i> +62 851 6294 1069</a>
                        <a className="btn" href="tel:+6285711241570"><i className="bi bi-telephone-fill"></i> +62 857 1124 1570</a>
                    </div>
                </div>
                <div className="contactFooter">
                    <p>Nov 27th 2021</p>
                </div>
            </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5869075666124!2d106.62505521413723!3d-6.185998862330775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fea7eb985729%3A0x542725670657dd6f!2sBuddhi%20Dharma%20University!5e0!3m2!1sen!2sid!4v1638108289260!5m2!1sen!2sid"></iframe>
        </section>
    </div>
  )
}

export default ContactUs