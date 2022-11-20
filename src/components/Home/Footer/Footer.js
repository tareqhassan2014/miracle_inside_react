import axios from 'axios'
import React, {  useState, useEffect } from 'react'
import logo from '../../../images/logo/milight2.png'

export default function Footer() {


  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://miracleinside.info/wp-json/wp/v2/posts/95',
      );
      setData(result.data.content);
    };

    fetchData();
  }, []);

  return (
    
    <div>
        <footer className="footer">
          <div className="footer-primary">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-3">
                  <div className="footer-widget-about">
                    <img src={logo} style={{height: "120px"}} alt="logo" className="mb-30" />
                    <h6 className="footer-widget__title">Scan Studio Address : </h6><p className="color-gray">Prestige Court Business Centre ,Beza Road,Leeds, LS10 2BD, West Yorkshire,United Kingdom.</p>
                     <a href="https://www.google.com/" className="btn btn__primary btn__primary-style2 btn__link">
                      <span>Book Appointment</span> <i className="icon-arrow-right" />
                    </a> 
                  </div>{/* /.footer-widget__content */}
                </div>{/* /.col-xl-2 */}
                <div className="col-sm-6 col-md-6 col-lg-2 offset-lg-1">
                  <div className="footer-widget-nav">
                     <h6 className="footer-widget__title">Quick Links</h6> 
                    <nav>
                      <ul className="list-unstyled">
                      <li><a href="/scan">Book Scan</a></li>
                        <li><a href="/bloodtest">Book Blood Test</a></li>
                        <li><a href="https://www.google.com/">Offers</a></li>
                        <li><a href="https://www.google.com/">Gift Cards</a></li>
                      </ul>
                    </nav>
                  </div>{/* /.footer-widget__content */}
                </div>{/* /.col-lg-2 */}
                <div className="col-sm-6 col-md-6 col-lg-2">
                  <div className="footer-widget-nav">
                  <h6 className="footer-widget__title">Quick Links</h6> 
                    <nav>
                      <ul className="list-unstyled">
                        <li><a href="https://www.google.com/">Blogs</a></li>
                        <li><a href="https://www.google.com/">Testimonials</a></li>
                        <li><a href="https://www.google.com/">Faq</a></li>      
                        <li><a href="https://www.google.com/">Gallery</a></li>                    
                      </ul>
                    </nav>
                  </div>{/* /.footer-widget__content */}
                </div>{/* /.col-lg-2 */}
                <div dangerouslySetInnerHTML={{__html: data.rendered}} className="col-sm-12 col-md-6 col-lg-4">
                 
                </div>{/* /.col-lg-2 */}
              </div>{/* /.row */}
            </div>{/* /.container */}
          </div>{/* /.footer-primary */}
          <div className="footer-secondary">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <span className="fz-14">© 2022 Miracle Inside, All Rights Reserved. Developed by </span>
                  <a className="fz-14 color-primary" href="https://www.google.com/">IT</a>
                
                    <p>                   
                    Registered Office Address : No 35 , Victoria Road , HD6 4DX , Brighouse ,
West Yorkshire.
                    </p>
                </div>{/* /.col-lg-6 */}
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <nav>
                    <ul className="list-unstyled footer__copyright-links d-flex flex-wrap justify-content-end mb-0">
                      <li><a href="/terms-of-use/">Terms of use</a></li>
                      <li><a href="/privacy-policy">Privacy Statement</a></li>
                      <li><a href="/online-booking-guidelines">Online-Booking-Guidelines</a></li>
                    </ul>
                  </nav>
                </div>{/* /.col-lg-6 */}
              </div>{/* /.row */}
            </div>{/* /.container */}
          </div>{/* /.footer-secondary */}
        </footer>{/* /.Footer */}
        <div className="search-popup">
          <button type="button" className="search-popup__close"><i className="fas fa-times" /></button>
          <form className="search-popup__form">
            <input type="text" className="search-popup__form__input" placeholder="Type Words Then Enter" />
            <button className="search-popup__btn"><i className="icon-search" /></button>
          </form>
        </div>{/* /. search-popup */}
        <button id="scrollTopBtn"><i className="fas fa-long-arrow-alt-up" /></button>
      </div>
  );
}


