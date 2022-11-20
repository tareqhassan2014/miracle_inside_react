import axios from 'axios'
import React, { Component } from 'react'

export class About extends Component {


  constructor(props) {
    super(props);
    this.state = {
      aboutinfo: { content: { rendered: null } }
    }
  }


  componentDidMount() {
    axios.get('https://miracleinside.info/wp-json/wp/v2/posts/42')
      .then(res => {
        this.setState({
          aboutinfo: res.data
        });

      })
  }


  render() {
    return (
      <>
        <section className="about-layout1 pb-0">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="heading-layout2">
                  <h3 className="heading__title mb-40">
                    About Us
                  </h3>
                </div>
                {/* /heading */}
              </div>
              {/* /.col-12 */}
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="about__Text" dangerouslySetInnerHTML={{ __html: this.state.aboutinfo.content.rendered }}>

                
                </div>
                <div class="d-flex align-items-center mb-30"><a class="btn btn__primary btn__outlined btn__rounded mr-30" href="/318/about">
Read More
</a></div>
              </div>
              {/* /.col-lg-6 */}
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="video-banner">
                  <img src="images/about/1.jpg" alt="about" />
                  <a
                    className="video__btn video__btn-white popup-video"
                    href="https://www.youtube.com/watch?v=nrJtHemSPW4"
                  >
                    <div className="video__player">
                      <i className="fa fa-play" />
                    </div>
                  </a>
                </div>
                {/* /.video-banner */}
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        {/* /.About Layout 1 */}
      </>

    )
  }
}


export default About