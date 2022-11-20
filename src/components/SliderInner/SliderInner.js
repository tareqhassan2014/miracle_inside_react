import React, { Component } from 'react'
import Backgroundimg from '../../images/page-titles/1.jpg'

function SliderInner({image})  {

    return (
      <>
      <section className="page-title page-title-layout3 bg-img" style={{backgroundImage: `url(${image?(image):(Backgroundimg)})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5">
              {/* <h1 className="pagetitle__heading">Caring For The Health &amp; Well Being Of Family.</h1>
              <p className="pagetitle__desc">Medcity has been present in Europe since 1990, offering innovative
                solutions, specializing in medical services for treatment of medical infrastructure.
              </p> */}

            </div>{/* /.col-xl-5 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>
      </>
    )

}

export default SliderInner