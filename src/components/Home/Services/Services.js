import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "../Slider/Slider";
var isDataFilled = false;
export default function Services() {
  const [data, setData] = useState([]);
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    arrows: true,
    dots: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };
  useEffect(() => {
    const fetchData = async () => {
      const scanResults = await axios(
        "https://miracleinside.info/wp-json/wp/v2/scans?per_page=100"
      );

      const bloodResults = await axios(
        "https://miracleinside.info/wp-json/wp/v2/blood_test?per_page=100"
      );
      //console.log("scan results ste", scanResults.data);
      let ListItems = [];
      ListItems = ListItems.concat(scanResults.data);
      ListItems = ListItems.concat(bloodResults.data);
      ListItems.forEach((value, index) => {
        let currentItem = ListItems[index];
        if (
          currentItem &&
          currentItem.content &&
          currentItem.content.rendered
        ) {
          ListItems[index].content.rendered = removeHtmlAttributes(
            currentItem.content.rendered
          );
        }
      });
      // console.log("scan results", scanResults.data);
      //console.log("blood results", bloodResults.data);
      //console.log("results", ListItems);
      setData(ListItems);
    };
    if (isDataFilled) {
     // window.SlickLibraryInit();
    } else {
      isDataFilled = true;
    //  fetchData();
    }
  }, [data]);

  const removeHtmlAttributes = (item) => {
    return item.replaceAll("class=", "").replaceAll("style=", "");
  };

  const getImageUrl = (item) => {
    if (item && item.acf && item.acf.image_url && item.acf.image_url !== "") {
      return item.acf.image_url;
    }
    return "images/services/1.jpg";
  };
  const getReadMoreLink = (item) => {
    if (item && item.acf && item.acf.read_more && item.acf.read_more !== "") {
      return item.acf.read_more;
    }
    return "https://www.google.com";
  };
  return (
    <section className="services-layout2 services-carousel bg-overlay bg-overlay-primary pt-130">
      <div className="bg-img">
        <img src="images/banners/1.jpg" alt="background" />
      </div>
      <div className="container">
hi
      </div>
    </section>
  );
}
