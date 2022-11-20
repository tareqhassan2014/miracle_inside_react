import React, { Component } from "react";
import About from "./About/About";
import Feature from "./Features/Feature";
import Services from "./Services/Services";
import Slider from "./Slider/Slider";
import Testimonials from "./Testimonials/Testimonials";
import Blog from "./Blog/Blog";
import Footer from "./Footer/Footer";
import SliderInner from "../SliderInner/SliderInner";
import Backgroundimg from '../../images/sliders/slider3.png'

export class Home extends Component {
  render() {
    return (
      <>
        
        <SliderInner image={Backgroundimg}/>
        <About />
        <Feature />

        <Testimonials />
        <Blog />
        <Footer />
      </>
    );
  }
}

export default Home;
