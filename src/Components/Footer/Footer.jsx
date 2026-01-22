import React from 'react'
import './Footer.css'
import Logo_V from '../../assets/Logo_V.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  
  const scrollToTop = () => {
    // Smooth scroll to top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLogoClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    
    // If we're already on the home page, just scroll to top
    if (window.location.pathname === '/') {
      scrollToTop();
    } else {
      // Navigate to home page first, then scroll to top after a small delay
      window.location.href = '/';
      
      // After navigation, scroll to top
      setTimeout(() => {
        scrollToTop();
      }, 100);
    }
  };

  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
           {/* Use anchor tag with onClick handler */}
           <a href="/" onClick={handleLogoClick}>
             <img 
               src={Logo_V} 
               alt="Home" 
               className='green-logo'
               style={{ cursor: 'pointer' }}
             />
           </a>
           <p>ຈົ່ງເປັນນັກພັດທະນາ Frontend ທີ່ມຸ່ງໝັ້ນໃນການສ້າງສັນຜົນງານດີຈີຕອນທີ່ມີຄຸນນະພາບ ແລະ ຕອບໂຈດການໃຊ້ງານຕົວຈິງ.</p>
        </div>
        <div className='footer-top-right'>
            <div className='footer-email-input'>
                <img src={user_icon} alt="" className='user-icon'/>
                <input type='email' placeholder='ໃສ່ອີເມວຂອງທ່ານ' />
            </div>
            <div className='footer-subscribe'>Subscribe</div>
        </div>
      </div>
      <hr />
      <div className='footer-bottom'>
        <p className='footer-bottom-left'>© {new Date().getFullYear()} ສະຫງວນລິຂະສິດທັງໝົດ. ສ້າງດ້ວຍ ❤️ ໂດຍນັກພັດທະນາລາວ.</p>
        <div className='footer-bottom-right'>
            <p>ເງື່ອນໄຂການບໍລິການ</p>
            <p>ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ</p>
            <p>ຕິດຕໍ່ຫາພວກເຮົາ</p>
        </div>
      </div>
    </div>
  )
}

export default Footer