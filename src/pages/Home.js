import React from "react";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import slides from "../assets/slides";

function Home() {
  return (
    <>
      <Slider images={slides} />
      {console.log(slides)}
      <Footer />
    </>
  );
}

export default Home;
