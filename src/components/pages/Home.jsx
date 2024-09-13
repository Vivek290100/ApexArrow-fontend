import React from "react";
import HomePage from "./HomePage"
import MetricsGauges from "./MetricsGauges";
import FeaturePage from "./Features";
import Footer from "../common/Footer";
import CategoryCarousel from "./CategoryCarousel";

const Home = () => {
  return (
    <>
      <HomePage />
      <CategoryCarousel />
      <FeaturePage />
      <MetricsGauges />
      <Footer />
    </>
  );
};

export default Home;
