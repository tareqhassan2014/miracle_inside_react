import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
var isDataFilled = false;
export default function Testimonial() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://miracleinside.info/wp-json/wp/v2/testimonies"
      );
      setData(result.data);
      // console.log(result.data);
    };
    if (isDataFilled) {
    } else {
      isDataFilled = true;
      fetchData();
    }
  }, [data]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 8000,
    pauseOnHover: true,
  };

  return (
    <>
      <section className="testimonials-layout1 pt-130 pb-80">
        <div className="container">
          <div className="testimonials-wrapper">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-7 offset-lg-5">
                <div className="heading-layout2">
                  <h3 className="heading__title">Inspiring Stories!</h3>
                </div>
                {/* /.heading */}
              </div>
              {/* /.col-lg-7 */}
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="slider-with-navs">
                  <Slider {...settings}>
                    {/* Testimonial #1 */}

                    {data.map((item, index) => (
                      <div className="testimonial-item" key={index}>
                        <h3
                          className="testimonial__title"
                          dangerouslySetInnerHTML={{
                            __html: item.content.rendered,
                          }}
                        ></h3>
                        <div className="testimonial__meta">
                          {/* <div className="testimonial__thmb">
                            <img src="images/testimonials/thumbs/3.png" alt="author thumb" />
                          </div> */}
                          <div>
                            <br />
                            <br />
                            <h4 className="testimonial__meta-title">-</h4>
                            <h4
                              className="testimonial__meta-title"
                              dangerouslySetInnerHTML={{
                                __html: item.title.rendered,
                              }}
                            ></h4>
                            {/* <p className="testimonial__meta-desc">Web Inc</p> */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                {/* /.slick-carousel */}
                <div className="testimonials__rating">
                  <div className="testimonials__rating-inner d-flex align-items-center">
                    <span className="total__rate">4.9</span>
                    <div>
                      <span className="overall__rate">
                        <a href="https://www.facebook.com/miracleinside4Dbabyscan">
                          {" "}
                          Facebook{" "}
                        </a>{" "}
                        Overall Rating
                      </span>
                      <span>, based on 665 reviews.</span>
                    </div>
                  </div>
                  {/* /.testimonials__rating-inner */}
                </div>
                {/* /.testimonials__rating */}
              </div>
              {/* /.col-lg-7 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.testimonials-wrapper */}
        </div>
        {/* /.container */}
      </section>
      {/* /.testimonials layout 1 */}
    </>
  );
}
