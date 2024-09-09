import React from "react";
import HomePage from "./HomePage"
import MetricsGauges from "./MetricsGauges";
import FeaturePage from "./Features";
import Footer from "../common/Footer";
import CategoryCarousel from "./CategoryCarousel";
// import JobSearchLayout from "./JobSearchLayout"

const Home = () => {
  return (
    <>
      <HomePage />
      <CategoryCarousel />
      <FeaturePage />
      <MetricsGauges />
      <Footer />
      {/* <JobSearchLayout/> */}
    </>
  );
};

export default Home;
