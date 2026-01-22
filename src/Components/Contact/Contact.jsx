import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
  
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "76355c32-271f-4d34-bc5e-6cf8ac004fd7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const res = await response.json();

      if (res.success) {
        alert("✅ ພວກເຮົາໄດ້ສົ່ງຂໍ້ຄວາມຂອງທ່ານສຳເລັດແລ້ວ");
        event.target.reset(); // clear form
      } else {
        alert("❌ Failed to send message. " + res.message);
      }
    } catch (error) {
      alert("⚠️ Something went wrong: " + error.message);
      console.error(error);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>ຕິດຕໍ່ສອບຖາມພວກເຮົາ</h1> 
        <img src={theme_pattern} alt="" className='change-logo'/>   
      </div>      
      <div className='contact-section'>
        <div className='contact-left'>
            <h1>ຍິນດີຕ້ອນຮັບ</h1>
            <p>ພວກເຮົາພ້ອມສະເໝີທີ່ຈະຮັບຟັງແນວຄວາມຄິດໃໝ່ໆ ຫຼື ໂຄງການທີ່ທ້າທາຍ. ຖ້າທ່ານມີຄຳຖາມ ຫຼື ຢາກປຶກສາວຽກ, ສາມາດຕິດຕໍ່ຫາຂ້ອຍໄດ້ທຸກເວລາ,
              ການຮ່ວມມືເລີ່ມຕົ້ນດ້ວຍການສົນທະນາ. ມາເລົ່າເລື່ອງຂອງທ່ານ ແລະ ພວກເຮົາຈະຫາວິທີແກ້ໄຂທີ່ເໝາະສົມກັບທ່ານ.
            </p>
            <div className="contact-details">
                <div className="contact-detail">
                   <img src={mail_icon} alt="" className='mail-icon'/> <p>yoojyim205@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" className='call-icon'/> <p>+856 20 7866 2986</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" className='location-icon'/> <p>VT, Laos</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor="">ຊື່ຂອງທ່ານ</label>
            <input type="text" placeholder='ຂຽນຊື່ຂອງທ່ານ' name='name' required />
            <label htmlFor="">ອີເມວຂອງທ່ານ</label>
            <input type="email" placeholder='ຂຽນອີເມວຂອງທ່ານ' name='email' required />
            <label htmlFor="">ພີມຂໍ້ຄວາມຂອງທ່ານໄດ້ທີ່ນີ້</label>
            <textarea name="message" rows="8" placeholder='ພີມຂໍ້ຄວາມຂອງທ່ານ' required></textarea>
            <button type='submit' className='contact-submit'>ສົ່ງຂໍ້ຄວາມ</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
