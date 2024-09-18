import React from "react";
import HomePage from "./HomePage"
import MetricsGauges from "./MetricsGauges";
import FeaturePage from "./Features";
import Footer from "../common/Footer";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import Navbar from "../common/Navbar";

const Home = () => {
  return (
    <>
      <HomePage />
      <CategoryCarousel />
      <LatestJobs/>
      <FeaturePage />
      <MetricsGauges />
      <Footer />
    </>
  );
};

export default Home;
