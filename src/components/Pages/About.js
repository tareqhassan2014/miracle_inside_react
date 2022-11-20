import React, { useEffect, useState } from "react";
import Footer from "../Home/Footer/Footer";
import axios from "axios";
import SliderInner from "../SliderInner/SliderInner";

function About({ id }) {
  
  const [data, setdata] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://miracleinside.info/wp-json/wp/v2/pages/${id}`
      );
      console.log(result);
      if (result?.data) {
        setdata(result.data);
      }
    };

    fetchData();
  }, [id]);
  // console.log("coming from about componenet",{ data });
  return (
    <>
      <SliderInner />      
      <section className="about-layout1 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="heading-layout2">
                <h3
                  className="heading__title mb-40"
                  dangerouslySetInnerHTML={{ __html: data?.title.rendered }}
                ></h3>
              </div>
              {/* /heading */}
            </div>
            {/* /.col-12 */}
          </div>
          {/* /.row */}
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="about__Text">
                <p
                  className="mb-30"
                  dangerouslySetInnerHTML={{ __html: data?.content.rendered }}
                ></p>
              </div>
            </div>
            {/* /.col-lg-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>

      <Footer />
    </>
  );
}

export default About;
