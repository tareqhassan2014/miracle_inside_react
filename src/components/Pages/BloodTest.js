import React, { useState, useEffect } from "react";
import Footer from "../Home/Footer/Footer";
import SliderInner from "../SliderInner/SliderInner";
import axios from "axios";
import "../Pages/BloodTest.css";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

export default function BloodTest() {
  const { data, status } = useQuery("bloodtests", () =>
    axios("https://miracleinside.info/wp-json/wp/v2/blood_test?per_page=100")
  );

  return (
    <>
      <SliderInner />

      <section className="pricing pt-0 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p className="text__link mb-0">
                Below is a full list of all our private blood tests and blood
                test costs. Your doctor will be able to advise you of the most
                approprate test for your particular situation. Simply
                <a
                  href="doctors-timetable.html"
                  className="btn btn__secondary btn__link mx-1"
                >
                  <span>book an appointment</span>
                </a>
                to have a blood test
              </p>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Blood Test"
                  id="contact-name"
                  name="search"
                  required=""
                  aria-required="true"
                />
              </div>
            </div>
          </div> */}

          <div>
            <div className="table-wrapper">
              <table className="fl-table">
                <thead>
                  <tr>

                    <th>Test</th>
                    <th>Price</th>
                    <th>Lab Results</th>
                    <th>Read More</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <Link to={`/bloodtest/${item.id}/${item.slug}`}>
                          {item.title.rendered}
                        </Link>
                        {/* <a href={GetItemUrl(item.link)} dangerouslySetInnerHTML={{ __html: item.title.rendered }}></a> */}
                      </td>

                      <td>
                        <div className="package__price">
                          <span className="package__currency">£</span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: item.acf?.amount,
                            }}
                          ></span>
                        </div>
                      </td>
                      <td>3 days</td>
                      <td>
                        <Link to={`/bloodtest/${item.id}/${item.slug}`}>
                          Read More
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
        {/* /.container */}
      </section>

      <Footer />
    </>
  );
}
