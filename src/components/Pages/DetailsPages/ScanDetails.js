import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Home/Footer/Footer";
import SliderInner from "../../SliderInner/SliderInner";

function ScanDetails() {
  const params = useParams();
  const [scan, setScan] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://miracleinside.info/wp-json/wp/v2/scans/${params.id}`
      );
      console.log(result.data);
      if (result.data?.id) {
        setScan(result.data);
      }
      // console.log({ blablabla: result.data });
    };

    fetchData();
  }, []);

  const BookNowlink = (item) => {
    console.log("Book now link scan details", item)
    if (item && item !== "") {
      return item;
    }
    else
      return "/bookscan"
  }

  return (
    <>
      <SliderInner image={scan?.acf.image_url} />
      {scan?.id ? (
        <section className="about-layout1 pb-0">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="heading-layout2">
                  <h3 className="heading__title mb-40">
                    {scan.title.rendered}

                  </h3>


                </div>
                {/* /heading */}
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">

                {/* <div className="widget__footer d-flex flex-wrap justify-content-between align-items-center"> */}
                {/* <div className="plan__price">£
                    {scan.acf.amount}
                    <span className="period" /></div> */}
                <div className="text-right">
                  <a href={BookNowlink(scan?.acf.booking_url)} className="btn btn__secondary btn__rounded mr-30">
                    <span>  Book Now £
                      {scan.acf.amount}</span> <i className="icon-arrow-right" />
                  </a>
                </div>
                {/* </div> */}
              </div>
              {/* /.col-12 */}
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">

                <div className="about__Text"
                  dangerouslySetInnerHTML={{ __html: scan.content.rendered }}
                ></div>
               


                  <div className="text-right">
                    <a href={BookNowlink(scan?.acf.booking_url)} className="btn btn__secondary btn__rounded mr-30">
                      <span> £
                        {scan.acf.amount} Book Now</span> <i className="icon-arrow-right" />
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
          <h6>Show loader here</h6>
        </div>
      )}
      <Footer />
    </>
  );
}

export default ScanDetails;
