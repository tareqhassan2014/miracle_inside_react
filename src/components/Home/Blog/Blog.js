import React, { useState, useEffect } from 'react'
import axios from 'axios'
var isDataFilled = false;

export default function Blog() {


  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://miracleinside.info/wp-json/wp/v2/blogs'
      );
      setData(result.data);
     
    };
    if (isDataFilled) {
  
    }
    else {
    
      isDataFilled = true;
      fetchData();
    }


  }, [data]);

  const getFormattedDate = (item) => {
    if (item && item.modified && item.modified !== "") {
      return new Date(item.modified).toLocaleDateString();
    }
    return "https://www.google.com";
  }
    return (
        <section className="blog-grid pb-50">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div className="heading text-center mb-40">
                <h2 className="heading__subtitle">Resource Library</h2>
                <h3 className="heading__title">Recent Blogs</h3>
              </div>{/* /.heading */}
            </div>{/* /.col-lg-6 */}
          </div>{/* /.row */}
          <div className="row">

            {/* Post Item #1 */}

            {data.map((item, index) => (
            <div key={index} className="col-sm-12 col-md-6 col-lg-4">
              <div className="post-item">
                <div className="post__img">
                  <a href="blog-single-post.html">
                    <img src="images/blog/grid/1.jpg" alt="mi" loading="lazy" />
                  </a>
                </div>{/* /.post__img */}
                <div className="post__body">
                  <div className="post__meta-cat">
                    <a href="https://www.google.com/" dangerouslySetInnerHTML={{ __html: item.acf.category }}></a>
                  </div>{/* /.blog-meta-cat */}
                  <div className="post__meta d-flex">
                    <span className="post__meta-date">

                      {getFormattedDate(item)}
                    </span>
                    <a className="post__meta-author" href="https://www.google.com/" dangerouslySetInnerHTML={{ __html: item.acf.written_by }}></a>
                  </div>
                  <h4 className="post__title"><a href="https://www.google.com/" dangerouslySetInnerHTML={{ __html: item.title.rendered }}></a></h4>
                  <p className="post__desc" dangerouslySetInnerHTML={{ __html: item.title.rendered }}>
                  </p>
                  <a href={item.acf.link} className="btn btn__secondary btn__link btn__rounded">
                    <span>Read More</span>
                    <i className="icon-arrow-right" />
                  </a>
                </div>{/* /.post__body */}
              </div>{/* /.post-item */}
            </div>

            ))}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>
    )
  
}
