import axios from "axios";
import React, { useState, useEffect } from "react";
import SlickSlider from "react-slick";

export default function Slider() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://miracleinside.info/wp-json/wp/v2/homeslider"
      );
      if (result.data) {
        setData(result.data);
        // console.log(result.data);
      }
    };
    fetchData();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    variableWidth: true,
  };
  return (
    <>
      <section className="slider">
        <div
          className="slick-carousel m-slides-0 slick-initialized slick-slider"
          data-slick='{"slidesToShow": 1, "arrows": true, "dots": false, "speed": 700,"fade": true,"cssEase": "linear"}'
        >
          <button
            className="slick-prev slick-arrow"
            aria-label="Previous"
            type="button"
            style={{}}
          >
            Previous
          </button>
          <div className="slick-list draggable">
            <div
              className="slick-track"
              style={{ opacity: 1, width: "5086px" }}
            >
              <div
                className="slide-item align-v-h bg-img slick-slide slick-current slick-active"
                data-slick-index={0}
                style={{
                  backgroundImage: 'url("images/sliders/2.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  width: "2543px",
                  position: "relative",
                  left: "0px",
                  top: "0px",
                  zIndex: 999,
                  opacity: 1,
                }}
                aria-hidden="false"
                tabIndex={0}
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                      <div className="slide__content">
                        <h2 className="slide__title">
                          Caring For The Health And Well Being Of Family.
                        </h2>
                        <p className="slide__desc">
                          The health and well-being of our patients and their
                          health care team will always be our priority, so we
                          follow the best practices for cleanliness.
                        </p>
                        <div className="d-flex flex-wrap align-items-center">
                          <a
                            href="appointment.html"
                            className="btn btn__primary btn__rounded mr-30"
                            tabIndex={0}
                          >
                            <span>Find A Doctor</span>
                            <i className="icon-arrow-right" />
                          </a>
                          <a
                            href="services.html"
                            className="btn btn__white btn__rounded"
                            tabIndex={0}
                          >
                            <span>Our Services</span>
                            <i className="icon-arrow-right" />
                          </a>
                        </div>
                      </div>
                      {/* /.slide-content */}
                    </div>
                    {/* /.col-xl-7 */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.container */}
              </div>
              <div
                className="slide-item align-v-h bg-img slick-slide"
                data-slick-index={1}
                style={{
                  backgroundImage: 'url("images/sliders/3.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  width: "2543px",
                  position: "relative",
                  left: "-2543px",
                  top: "0px",
                  zIndex: 998,
                  opacity: 0,
                }}
                aria-hidden="true"
                tabIndex={-1}
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                      <div className="slide__content">
                        <h2 className="slide__title">
                          All Aspects Of Medical Practice
                        </h2>
                        <p className="slide__desc">
                          The health and well-being of our patients and their
                          health care team will always be our priority, so we
                          follow the best practices for cleanliness.
                        </p>
                        <div className="d-flex flex-wrap align-items-center">
                          <a
                            href="appointment.html"
                            className="btn btn__primary btn__rounded mr-30"
                            tabIndex={-1}
                          >
                            <span>Find A Doctor</span>
                            <i className="icon-arrow-right" />
                          </a>
                          <a
                            href="services.html"
                            className="btn btn__white btn__rounded"
                            tabIndex={-1}
                          >
                            <span>Our Services</span>
                            <i className="icon-arrow-right" />
                          </a>
                        </div>
                      </div>
                      {/* /.slide-content */}
                    </div>
                    {/* /.col-xl-7 */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.container */}
              </div>
            </div>
          </div>
          {/* /.slide-item */}
          {/* /.slide-item */}
          <button
            className="slick-next slick-arrow"
            aria-label="Next"
            type="button"
            style={{}}
          >
            Next
          </button>
        </div>
        {/* /.carousel */}
      </section>
      {/* <div>
          <SlickSlider {...settings}>
            {
              data.map((item, index) => (
                <div key={index} style={{ width: 2543 }}>
                  <img src={item.acf.slider_image_url} alt='mI'/>
                </div>
              ))
  }
          </SlickSlider>
        </div> */}
    </>
  );
}
