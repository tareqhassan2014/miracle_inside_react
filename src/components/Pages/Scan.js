import React, { useState, useEffect } from "react";

import Footer from "../Home/Footer/Footer";
import SliderInner from "../SliderInner/SliderInner";
import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

var isDataFilled = false;

export default function Scan() {
  const { data, status } = useQuery("scans", () =>
    axios("https://miracleinside.info/wp-json/wp/v2/scans?per_page=100")
  );

  const getBookNowLink = (item) => {
    if (
      item &&
      item.acf &&
      item.acf.booking_url &&
      item.acf.booking_url !== ""
    ) {
      return item.acf.booking_url;
    }
    return "https://www.google.com";
  };
  const TruncateLongString = (str) => {
    return str.length > 88 ? str.slice(0, 88 - 1) + "&hellip;" : str;
  };
  // const GetItemUrl = (str) => {
  //   if (str !== "") {
  //     var url = str.toString().replace("https://miracleinside.info/scans", "");
  //     url = "/scan" + url;
  //     return url;
  //   }
  //   return "https://www.google.com";
  // };
  return (
    <>
      <SliderInner />
      <section className="pricing pt-0 pb-80">
        <div className="container">
          <div className="row row-no-gutter packages-wrapper">
            {/* pricing item #1*/}
            {data?.data.map((item, index) => (
              <div key={index} className="col-sm-12 col-md-4 col-lg-4">
                <div className="pricing-package">
                  <div>
                    <Link to={`/scan/${item.id}/${item.slug}`}>
                      <h5
                        className="package__title"
                        dangerouslySetInnerHTML={{
                          __html: item.title.rendered,
                        }}
                      ></h5>
                    </Link>
                    <p
                      className="package__desc"
                      dangerouslySetInnerHTML={{
                        __html: TruncateLongString(item.content.rendered),
                      }}
                    ></p>
                    <ul className="package__list list-items list-items-layout2 list-unstyled">
                      <li>Review your medical records.</li>
                      <li>Check and test blood pressure.</li>
                      <li>Run tests such as blood tests.</li>
                    </ul>
                  </div>
                  <div className="package__footer">
                    <div className="package__price">
                      <span className="package__currency">£</span>
                      <span
                        dangerouslySetInnerHTML={{ __html: item.acf.amount }}
                      ></span>
                    </div>
                    <a
                      href={getBookNowLink(item)}
                      className="btn btn__secondary btn__rounded"
                    >
                      Book now
                    </a>
                  </div>
                  {/* /.package__footer */}
                </div>
                {/* /.pricing-package */}
              </div>
            ))}
          </div>
          {/* /.row */}

          {/* <div className="row">
              <div className="col-12 text-center">
                <p className="text__link mb-0">Delivering tomorrow’s health care for your family.
                  <a href="doctors-timetable.html" className="btn btn__secondary btn__link mx-1">
                    <span>View Doctors’ Timetable</span> <i className="icon-arrow-right icon-outlined" />
                  </a>
                </p>
              </div>
            </div> */}
        </div>
        {/* /.container */}
      </section>

      <Footer />
    </>
  );
}
