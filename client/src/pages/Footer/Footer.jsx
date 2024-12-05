import { useEffect } from 'react';
import './Footer.scss';

const Footer = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='footer'>
      <div className="container">
        <div className="top">
          <div className="item">
            <h1>Categories</h1>
            <span>Graphic & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
          </div>
          <div className="item">
            <h1>About</h1>
            <span>About Us</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
          <div className="item">
            <h1>Support</h1>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Fiverr</span>
            <span>Buying on Fiverr</span>
          </div>

          <div className="item">
            <h1>More From Fiverr</h1>
            <span>Fiverr Business</span>
            <span>Fiverr Pro</span>
            <span>Fiverr Studios</span>
          </div>
        </div>
        <div className="p-5 text-center">
                      <span className='text-[#74767e]'>
                        © Gigsta {new Date().getFullYear()}. Powered by MISLA
                      </span>

                  </div>
      </div>
    </div>
  )
}

export default Footer