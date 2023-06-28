import React from 'react'
import './styles/portofolio.scss'
import foto1 from '../img/foto1.png'
import foto2 from '../img/foto2.png'
import foto3 from '../img/foto3.png'
import foto4 from '../img/foto4.jpeg'
import foto5 from '../img/foto5.jpeg'
import foto6 from '../img/foto6.jpeg'

function Portofolio() {
  return (
    <div className='portofolio'>
            
        <h1 className="text-center">My Portofolio</h1>
        <section className="portofolio-container" id="portofolio">
        <div className="card">
            <img src={foto1} alt=""/>
            <div className="card-body">
            <h3>Judo</h3>
            <p>Judo adalah salah satu olahraga beladiri yang berasal dari negara Jepang. Beladiri ini sudah tersebar diberbagai negara di Asia dan salah satunya Indonesia </p>
            </div>
            <div className="card-footer">
            <p>Nov 27th 2021</p>
            <a href="https://www.instagram.com/ayh_academy/" target="_blank" className="btn">Read More</a>
            </div>
        </div>
        <div className="card">
            <img src={foto2} alt=""/>
            <div className="card-body">
            <h3>Latihan Fisik</h3>
            <p>Latihan fisik adalah salah satu latihan yang diterapkan untuk para remaja yang ingin meningkatkan stamina, kelincahan, kekuatan dan daya tahan. Tidak heran mengapa Latihan fisik cukup diminati oleh para remaja</p>
            </div>
            <div className="card-footer">
            <p>Nov 27th 2021</p>
            <a href="https://www.instagram.com/ayh_academy/" target="_blank" className="text-decoration none btn bg-primary">Read More</a>
            </div>
        </div>
        <div className="card">
            <img src={foto3} alt=""/>
            <div className="card-body">
            <h3>Event Organizer</h3>
            <p>Selain melatih anak muda dalam hal olahraga, Ayh Academy juga mengadakan beberapa event torunament olahraga untuk menilai potensi anak didik mereka ketika berhadapan dengan club lain.</p>
            </div>
            <div className="card-footer">
            <p>Nov 27th 2021</p>
            <a href="https://www.instagram.com/ayh_academy/" target="_blank" className="text-decoration none btn bg-primary">Read More</a>
            </div>
        </div>
        <div className="card">
            <img src={foto4} alt=""/>
            <div className="card-body">
            <h3>Judo Banjar</h3>
            <p>Judo merupakan olahraga beladiri yang sangat diminati. Oleh karena itu Ayh Academy membuka pelatihan mereka disalah satu gym sekitar banjar. Lokasi tempat pelatihan terdapat dibagian another location</p>
            </div>
            <div className="card-footer">
            <p>Nov 27th 2021</p>
            <a href="https://www.instagram.com/p/CW8VzE1PWFK/" target="_blank" className="text-decoration none btn bg-primary">Read More</a>
            </div>
        </div>
        <div className="card">
            <img src={foto5} alt=""/>
            <div className="card-body">
            <h3>Judo for Kids</h3>
            <p>Selain digemari olah para remaja, Judo juga digemari olah anak anak sekolah dasar. Dengan pelatihan yang tepat para murid sekolah dasar bisa menjadi bibit unggul kedepannya</p>
            </div>
            <div className="card-footer">
            <p>Nov 27th 2021</p>
            <a href="https://www.instagram.com/ayh_academy/" target="_blank" className="text-decoration none btn bg-primary">Read More</a>
            </div>
        </div>
        <div className="card">
            <img src={foto6} alt=""/>
            <div className="card-body">
            <h3>Physical Training</h3>
            <p>Latihan fisik merupakan sarana latihan para atlet untuk mengasah stamina, kelincahan serta kekuatan mereka. Ini adalah salah satu dokumentasi latihan fisik yang dilaksanakan di lapangan ahmad yani tangerang</p>
            </div>
            <div className="card-footer">
            <p>Nov 27th 2021</p>
            <a href="https://www.instagram.com/ayh_academy/" target="_blank" className="text-decoration none btn bg-primary">Read More</a>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Portofolio