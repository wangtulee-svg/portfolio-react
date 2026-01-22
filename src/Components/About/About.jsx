import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
//import profile_img from '../../assets/about_profile.svg'
import programmer from '../../assets/programmer.png'
const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>ກ່ຽວກັບຂ້ອຍ</h1>
        <img src={theme_pattern} alt="" className='change-logo'/>
      </div>
      <div className='about-sections'>
        <div className='about-left'>
          <div class="home-image">
            <div class="image-box">
              <div class="image-item">
           <img src={programmer} alt="" />
           </div>
           </div>
           </div>
        </div>
        <div id='about' className="about-right">
            <div className="about-para">
                <p>ຈົ່ງເປັນນັກພັດທະນາ Frontend ທີ່ມີຄວາມມຸ່ງໝັ້ນໃນການປ່ຽນແນວຄວາມຄິດ ໃຫ້ກາຍເປັນຜົນງານດິຈິຕອນທີ່ໃຊ້ງານໄດ້ຈິງ ແລະ ສວຍງາມ.</p>
                <p>ດ້ວຍປະສົບການໃນການນຳໃຊ້ເຕັກໂນໂລຊີທີ່ທັນສະໄໝ, ຈົ່ງພ້ອມທີ່ຈະຮຽນຮູ້ ແລະ ພັດທະນາຕົນເອງຢູ່ສະເໝີ ເພື່ອມອບສິ່ງທີ່ດີທີ່ສຸດໃຫ້ກັບທຸກໂຄງການ.</p>
            </div>
            <div className='about-skills'>
                <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className='about-skill'><p>React JS</p><hr style={{width:"70%"}}/></div>
                <div className='about-skill'><p>Javascript</p><hr style={{width:"60%"}}/></div>
                <div className='about-skill'><p>Next JS</p><hr style={{width:"50%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className='about-achievement'>
           <h1>6+</h1>
           <p>ປີປະສົບການ</p>
        </div>
        <hr />
        <div className='about-achievement'>
           <h1>90+</h1>
           <p>ໂປຣເຈັກທີ່ເຮັດໄປແລ້ວ</p>
        </div>
        <hr />
        <div className='about-achievement'>
           <h1>15+</h1>
           <p>ໂປຣເຈັກທີ່ລູກຄ້າພໍໃຈ</p>
        </div>
      </div>
    </div>
  )
}

export default About
