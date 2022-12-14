import React from "react";
import Hero from "../components/Home/Hero";
import Steps2 from "../components/Home/Steps2";
import Banner from "../components/Home/Banner";
const Home = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <Hero />
      <Banner />
      <Steps2 />
    </>
  );
};

export default Home;
