import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import LijV from '../../assets/LijV.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  useEffect(() => {
  const handleScroll = () => {
    const sections = ['home', 'about', 'services', 'work', 'contact'];
    const scrollPosition = window.scrollY + 100; // ປັບ offset
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setMenu(section);
          break;
        }
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // ເອີ້ນຄັ້ງທຳອິດ
  
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <div className='navbar'>
      <img src={LijV} alt="" className='green-logo'/>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")} className={menu === "home" ? "active-nav" : ""}>ໜ້າຫຼັກ</p></AnchorLink>{menu==="home"?<img src={underline} alt='' className="active-icon"/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={220} href='#about'><p onClick={()=>setMenu("about")} className={menu === "about" ? "active-nav" : ""}>ກ່ຽວກັບຂ້ອຍ</p></AnchorLink>{menu==="about"?<img src={underline} alt='' className="active-icon"/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")} className={menu === "services" ? "active-nav" : ""}>ການບໍລິການ</p></AnchorLink>{menu==="services"?<img src={underline} alt='' className="active-icon"/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")} className={menu === "work" ? "active-nav" : ""}>ຜົນງານ</p></AnchorLink>{menu==="work"?<img src={underline} alt='' className="active-icon"/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")} className={menu === "contact" ? "active-nav" : ""}>ຕິດຕໍ່</p></AnchorLink>{menu==="contact"?<img src={underline} alt='' className="active-icon"/>:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>ຕິດຕໍ່ພວກເຮົາ</AnchorLink></div>
    </div>
  )
}

export default Navbar

