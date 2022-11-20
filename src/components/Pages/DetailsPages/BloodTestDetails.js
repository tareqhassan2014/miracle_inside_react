import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../Home/Footer/Footer";
import SliderInner from "../../SliderInner/SliderInner";

function BloodTestDetails() {
  const params = useParams();
  const [bloodTest, setBloodTest] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://miracleinside.info/wp-json/wp/v2/blood_test/${params.id}`
      );
      if (result.data?.id) {
        setBloodTest(result.data);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <SliderInner />
      {bloodTest?.id ? (
        <section className="about-layout1 pb-0">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="heading-layout2">
                  <h3 className="heading__title mb-40">
                    {bloodTest.title.rendered}
                  </h3>
                </div>
                {/* /heading */}
              </div>
              {/* /.col-12 */}
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="text-right">
                  <a href="/bookbloodtest" className="btn btn__secondary btn__rounded mr-30">
                    <span>  Book Now £
                      {bloodTest.acf.amount}</span> <i className="icon-arrow-right" />
                  </a>
                </div>

              </div>
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div
                  className="about__Text"
                  dangerouslySetInnerHTML={{
                    __html: bloodTest.content.rendered,
                  }}
                ></div>
                  <div className="text-right">
                    <a href="/bookbloodtest" className="btn btn__secondary btn__rounded mr-30">
                      <span> £
                        {bloodTest.acf.amount} Book Now</span> <i className="icon-arrow-right" />
                    </a>
                  </div>
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
      ) : (
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "80vh" }}
        >
          <h6>Loading...</h6>
        </div>
      )}
      <Footer />
    </>
  );
}

export default BloodTestDetails;
