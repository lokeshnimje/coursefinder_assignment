import React from "react";
import "./style.css";
import Header from "./Header/Header";
import Services from "./Services/Services";
import Footer from "./Footer/Footer";
import Steps from "./Steps/Steps";
import Webinars from "./Webinars/Webinars";
import Testimonials from "./Testimonials/Testimonials";
import LatestUpdates from "./LatestUpdates/LatestUpdates";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <Steps />
      <Webinars />
      <Testimonials />
      <LatestUpdates />
      <Footer />
    </>
  );
};

export default Home;
