import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Feature() {


  const [data, setData] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://miracleinside.info/wp-json/wp/v2/posts/52'
      );
      setData(result.data.content);
      
    };
    fetchData();


  }, []);


  return (
    <>

<section className="features-layout1 pt-130 pb-50 mt--90 bg-img" style={{backgroundImage: 'url("images/backgrounds/1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
        <div className="container">
          <div className="row mb-40">
            <div className="col-sm-12 col-md-12 col-lg-5">
              <div className="heading__layout2">
                <h3 className="heading__title">Providing Care for The Sickest In Community.</h3>
              </div>
            </div>{/* /col-lg-5 */}
            <div className="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
              <p className="heading__desc font-weight-bold" dangerouslySetInnerHTML={{__html: data.rendered }}>
              </p>
              <div className="d-flex flex-wrap align-items-center mt-40 mb-30">
                <a href="/scan" className="btn btn__primary btn__rounded mr-30">
                  <span>Make Appointment</span>
                  <i className="icon-arrow-right" />
                </a>

              </div>
            </div>{/* /.col-lg-6 */}
          </div>{/* /.row */}
          <div className="row">
            {/* Feature item #1 */}
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="feature-item">
                <div className="feature__content">
                  <div className="feature__icon">
                    <i className="icon-heart" />
                    <i className="icon-heart feature__overlay-icon" />
                  </div>
                  <h4 className="feature__title">Medical Advices &amp; Check Ups</h4>
                </div>{/* /.feature__content */}
                {/* <a href="#" className="btn__link">
                  <i className="icon-arrow-right icon-outlined" />
                </a> */}
              </div>{/* /.feature-item */}
            </div>{/* /.col-lg-3 */}
            {/* Feature item #2 */}
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="feature-item">
                <div className="feature__content">
                  <div className="feature__icon">
                    <i className="icon-doctor" />
                    <i className="icon-doctor feature__overlay-icon" />
                  </div>
                  <h4 className="feature__title">Trusted Medical Treatment </h4>
                </div>{/* /.feature__content */}
                {/* <a href="#" className="btn__link">
                  <i className="icon-arrow-right icon-outlined" />
                </a> */}
              </div>{/* /.feature-item */}
            </div>{/* /.col-lg-3 */}
            {/* Feature item #3 */}
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="feature-item">
                <div className="feature__content">
                  <div className="feature__icon">
                    <i className="icon-ambulance" />
                    <i className="icon-ambulance feature__overlay-icon" />
                  </div>
                  <h4 className="feature__title">Emergency Help Available 24/7</h4>
                </div>{/* /.feature__content */}
                {/* <a href="#" className="btn__link">
                  <i className="icon-arrow-right icon-outlined" />
                </a> */}
              </div>{/* /.feature-item */}
            </div>{/* /.col-lg-3 */}
            {/* Feature item #4 */}
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="feature-item">
                <div className="feature__content">
                  <div className="feature__icon">
                    <i className="icon-drugs" />
                    <i className="icon-drugs feature__overlay-icon" />
                  </div>
                  <h4 className="feature__title">Medical Research Professionals </h4>
                </div>{/* /.feature__content */}
                {/* <a href="#" className="btn__link">
                  <i className="icon-arrow-right icon-outlined" />
                </a> */}
              </div>{/* /.feature-item */}
            </div>{/* /.col-lg-3 */}
            {/* Feature item #5 */}
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="feature-item">
                <div className="feature__content">
                  <div className="feature__icon">
                    <i className="icon-first-aid-kit" />
                    <i className="icon-first-aid-kit feature__overlay-icon" />
                  </div>
                  <h4 className="feature__title">Only Qualified Doctors</h4>
                </div>{/* /.feature__content */}
                {/* <a href="#" className="btn__link">
                  <i className="icon-arrow-right icon-outlined" />
                </a> */}
              </div>{/* /.feature-item */}
            </div>{/* /.col-lg-3 */}
            {/* Feature item #6 */}
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="feature-item">
                <div className="feature__content">
                  <div className="feature__icon">
                    <i className="icon-hospital" />
                    <i className="icon-hospital feature__overlay-icon" />
                  </div>
                  <h4 className="feature__title">Cutting Edge <br /> Facility</h4>
                </div>{/* /.feature__content */}
                {/* <a href="#" className="btn__link">
                  <i className="icon-arrow-right icon-outlined" />
                </a> */}
              </div>{/* /.feature-item */}
            </div>{/* /.col-lg-3 */}
            {/* Feature item #7 */}
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="feature-item">
                <div className="feature__content">
                  <div className="feature__icon">
                    <i className="icon-expenses" />
                    <i className="icon-expenses feature__overlay-icon" />
                  </div>
                  <h4 className="feature__title">Affordable Prices For All Patients</h4>
                </div>{/* /.feature__content */}
                {/* <a href="#" className="btn__link">
                  <i className="icon-arrow-right icon-outlined" />
                </a> */}
              </div>{/* /.feature-item */}
            </div>{/* /.col-lg-3 */}
            {/* Feature item #8 */}
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="feature-item">
                <div className="feature__content">
                  <div className="feature__icon">
                    <i className="icon-bandage" />
                    <i className="icon-bandage feature__overlay-icon" />
                  </div>
                  <h4 className="feature__title">Quality Care For Every Patient</h4>
                </div>{/* /.feature__content */}
                {/* <a href="#" className="btn__link">
                  <i className="icon-arrow-right icon-outlined" />
                </a> */}
              </div>{/* /.feature-item */}
            </div>{/* /.col-lg-3 */}
          </div>{/* /.row */}
          {/* <div className="row">
            <div className="col-md-12 col-lg-6 offset-lg-3 text-center">
              <p className="font-weight-bold mb-0">Serve the community by improving the quality of life through better health.
                We have put protocols to protect our patients and staff while continuing to provide medically necessary
                care.
                <a href="#" className="color-secondary">
                  <span>Contact Us For More Information</span> <i className="icon-arrow-right" />
                </a>
              </p>
            </div>
          </div> */}
        </div>{/* /.container */}
      </section>
    </>

  )

}
