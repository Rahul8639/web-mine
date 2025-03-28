import React from 'react'

const Contact = () => {
  return (
    <>
    <div id="contact-container">
    <div id="line"></div>
      <div className="contact-content">
        <div className="contact-left">
          <h3>Email</h3>
          <a href="https://mail.google.com/mail/u/0/?fs=1&to=bio.rahulprasad@gmail.com&tf=cm" target="_blank" rel="noopener noreferrer">contact@bio.rahul</a>
          
          <h3>Location</h3>
          <p>Pune, India</p>
        </div>
        
        <div className="contact-middle">
          <h3>Social</h3>
          <div className="social-links">
            <a href="https://github.com/Rahul8639" target="_blank" rel="noopener noreferrer">Github <i className="ri-arrow-right-up-line"></i></a>
            <a href="https://www.linkedin.com/in/rahul-prasad-18320424b/" target="_blank" rel="noopener noreferrer">Linkedin <i className="ri-arrow-right-up-line"></i></a>
            <a href="https://x.com/jj34498dnj29iru33r29njfefs" target="_blank" rel="noopener noreferrer">Twitter <i className="ri-arrow-right-up-line"></i></a>
            <a href="https://www.instagram.com/___rahu.l___/" target="_blank" rel="noopener noreferrer">Instagram <i className="ri-arrow-right-up-line"></i></a>
          </div>
        </div>

        <div className="contact-right">
          <p>Designed and Developed</p>
          <p>by <a href="/" className="name-link">Rahul Prasad</a></p>
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact