import React from 'react'
import './Hero.css'
//import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import programmer from '../../assets/programmer.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div class="img-wrapper">
        <div class="img-box home-img">
         <img src={programmer} alt="" />
        </div>
      </div>
      <h1>
            <span style={{ "--i": 3 }} data-text="I'm Lij_Vaj,">I'm Lij_Vaj, </span>{" "}
            <span style={{ "--i": 2 }} data-text="ຂ້ອຍຊື່ ລີ່ວ່າງ,">ຂ້ອຍຊື່ ລີ່ວ່າງ, </span>{" "}
            <span style={{ "--i": 1 }} data-text="I'm Ly_Vang,">I'm Ly_Vang, </span>{" "}
            frontend developer based in Laos.
          </h1>
      <p>ຂ້ອຍມີຄວາມຫຼົງໄຫຼໃນການສ້າງສັນເວັບໄຊ໌ທີ່ສວຍງາມ ແລະ ໃຊ້ງານງ່າຍ ໂດຍເນັ້ນການມອບປະສົບການທີ່ດີທີ່ສຸດໃຫ້ແກ່ຜູ້ໃຊ້.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>ຕິດຕໍ່ພວກເຮົາ</AnchorLink></div>
        <div className="hero-resume">ເບິ່ງຊີວະປະຫວັດ</div>
      </div>
      </div>
  )
}

export default Hero
