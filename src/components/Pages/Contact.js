import React, {  useState, useEffect }  from "react";
import Footer from "../Home/Footer/Footer";
import axios from "axios";

function Contact() {
  

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
    <>
      <section className="google-map py-0">
        <iframe title="myFrame" frameBorder={0} height={500} width="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2357.813723854456!2d-1.5317319!3d53.775003399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795c33ce68c797%3A0x151dc4df828a47f0!2sMiracle%20Inside%203D%2F4D%20Baby%20Scan%20Centre!5e0!3m2!1sen!2sca!4v1664391797673!5m2!1sen!2sca" />
      </section>
      <section className="contact-layout1 pt-0 mt--100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-panel d-flex flex-wrap">
                <form className="contact-panel__form" method="post" action="" id="contactForm" noValidate="novalidate">
                  <div className="row">
                    <div className="col-sm-12">
                      <h4 className="contact-panel__title">How Can We Help? </h4>
                      <p className="contact-panel__desc mb-30">Please feel welcome to contact our friendly reception staff
                        with any general or medical enquiry. 
                      </p>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <div className="form-group">
                        <i className="icon-user form-group-icon" />
                        <input type="text" className="form-control" placeholder="Name" id="contact-name" name="contact-name" required aria-required="true" />
                      </div>
                    </div>{/* /.col-lg-6 */}
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <div className="form-group">
                        <i className="icon-email form-group-icon" />
                        <input type="email" className="form-control" placeholder="Email" id="contact-email" name="contact-email" required aria-required="true" />
                      </div>
                    </div>{/* /.col-lg-6 */}
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <div className="form-group">
                        <i className="icon-phone form-group-icon" />
                        <input type="text" className="form-control" placeholder="Phone" id="contact-Phone" name="contact-phone" required aria-required="true" />
                      </div>
                    </div>{/* /.col-lg-6 */}
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <div className="form-group">
                        <i className="icon-news form-group-icon" />
                        <select className="form-control" style={{ display: 'none' }}>
                          <option value={0}>Subject</option>
                          <option value={1}>Subject 1</option>
                          <option value={2}>Subject 1</option>
                        </select><div className="nice-select form-control" tabIndex={0}><span className="current">Subject</span><ul className="list"><li data-value={0} className="option selected">Subject</li><li data-value={1} className="option">Subject 1</li><li data-value={2} className="option">Subject 1</li></ul></div>
                      </div>
                    </div>{/* /.col-lg-6 */}
                    <div className="col-12">
                      <div className="form-group">
                        <i className="icon-alert form-group-icon" />
                        <textarea className="form-control" placeholder="Message" id="contact-message" name="contact-message" defaultValue={""} />
                      </div>
                      <button type="submit" className="btn btn__secondary btn__rounded btn__block btn__xhight mt-10">
                        <span>Submit Request</span> <i className="icon-arrow-right" />
                      </button>
                      <div className="contact-result" />
                    </div>{/* /.col-lg-12 */}
                  </div>{/* /.row */}
                </form>
                <div className="contact-panel__info d-flex flex-column justify-content-between bg-overlay bg-overlay-primary-gradient bg-img" style={{ backgroundImage: 'url("images/banners/1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
                  
                  <div dangerouslySetInnerHTML={{__html: data.rendered}}>
                   
                  </div>
                </div>
              </div>
            </div>{/* /.col-lg-6 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>
      <Footer/>
    </>
  );
}

export default Contact;
