import React, { Component } from "react";
import Navbar from "../../Navigation/Navbar";
import axios from "axios";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactinfo: { content: { rendered: null } },
    };
  }

  componentDidMount() {
    axios
      .get("https://miracleinside.info/wp-json/wp/v2/posts/1")
      .then((res) => {
        this.setState(
          {
            contactinfo: res.data,
          },
          () => {}
        );
      });
  }

  render() {
    return (
      <header className="header header-layout2">
        <div className="header-topbar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="d-flex align-items-center justify-content-between">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.state.contactinfo.content.rendered,
                    }}
                  ></div>
                  <div className="d-flex">
                    <ul className="social-icons list-unstyled mb-0 mr-30">
                      <li>
                        <a href="https://www.facebook.com/miracleinside4Dbabyscan/">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/Miracleinside4D">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/miracle-inside-397149b8">
                          <i className="fab fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                    {/* /.social-icons */}
                  </div>
                </div>
              </div>
              {/* /.col-12 */}
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg sticky-navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src="../../../images/logo/milight2.png"
                style={{ height: "80px" }}
                className="logo-light"
                alt="logo"
              />
              <img
                src="../../../images/logo/milight2.png"
                style={{ height: "80px" }}
                className="logo-dark"
                alt="logo"
              />
            </a>
            <button className="navbar-toggler" type="button">
              <span className="menu-lines">
                <span />
              </span>
            </button>
            <div className="collapse navbar-collapse" id="mainNavigation">
              {this.props?.navbar.length > 0 && (
                <Navbar navbar={this.props.navbar} />
              )}
              {/* /.navbar-nav */}
              <button className="close-mobile-menu d-block d-lg-none">
                <i className="fas fa-times" />
              </button>
            </div>
            {/* /.navbar-collapse */}
          </div>
          {/* /.container */}
        </nav>
      </header>
    );
  }
}

export default Header;
