import React from "react";
import {
  Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext} from "../ui/carousel.jsx";
import { Button } from "@/components/ui/button";

const Home = () => {
  
  const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer",
  ];

  const searchJobHandler = (cat) => {
    // Implement search job functionality here
    console.log(`Searching for ${cat} jobs`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col lg:flex-row bg-card">
        <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-16">
          <img
            src="src/assets/pngwing.com (55).png"
            alt="Job seeker and recruiter illustration"
            className="max-w-full h-auto object-contain rounded-lg mb-8"
          />
          <div className="w-52 relative">
            <Carousel className="w-full">
              <CarouselContent>
                {category.map((cat, index) => (
                  <CarouselItem key={index} className="w-52">
                    <div className="p-1">
                      <Button
                        onClick={() => searchJobHandler(cat)}
                        variant="outline"
                        className="w-full rounded-full border hover:bg-gray-800 hover:text-white transition-colors"
                      >
                        {cat}
                      </Button>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center px-8 py-12 lg:px-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-indigo-900 mb-6">
            Find Your Dream Job or Perfect Hire!
          </h1>

          <p className="text-base sm:text-lg primary-foreground mb-8 max-w-2xl">
            Connecting talented professionals with top companies across the globe.
            
          </p>
          <p>
          Whether you're a job seeker looking for the right opportunity or a
          recruiter searching for the perfect fit, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 py-4">
            <Button className="px-8 py-3 bg-white bg-gradient-to-b from-yellow-400 to-violet-700 font-semibold rounded-full border-2 border-indigo-600 hover:bg-indigo-100 transition duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="px-8 py-3 bg-white bg-gradient-to-b from-yellow-400 to-violet-700 font-semibold rounded-full border-2 border-indigo-600 hover:bg-indigo-100 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;