import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Faq() {
  const params = useParams();
  const [data, setdata] = useState();  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://miracleinside.info/wp-json/wp/v2/pages/${params.id}`
      );      
      if (result?.data) {
        setdata(result.data);
      }
    };

    fetchData();
  }, []);

  return (

    <>
   <p dangerouslySetInnerHTML={{__html : data?.content.rendered}}></p>
    </>
  )
}

export default Faq;
