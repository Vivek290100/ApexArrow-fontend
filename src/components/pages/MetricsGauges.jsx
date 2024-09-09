import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MetricsGauges = () => {
  const metrics = [
    { title: "Job Seekers Placed", value: 85, max: 100, unit: "%" },
    { title: "Employer Satisfaction", value: 4.8, max: 5, unit: "/5" },
    { title: "Average Time to Hire", value: 14, max: 30, unit: " days" },
    { title: "Career Growth Rate", value: 92, max: 100, unit: "%" }
  ];

  return (
    <>
    <div className="bg-card py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col lg:flex-row mb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16 mb-8 lg:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-indigo-900 mb-4 sm:mb-6">
            Find Your Dream Job or Perfect Hire!
          </h1>

          <p className="text-sm sm:text-base md:text-lg primary-foreground mb-6 sm:mb-8 max-w-2xl">
            Connecting talented professionals with top companies across the globe.
            Whether you're a job seeker looking for the right opportunity or a
            recruiter searching for the perfect fit, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="px-6 py-2 sm:px-8 sm:py-3 bg-white bg-gradient-to-b from-yellow-400 to-violet-700 font-semibold rounded-full border-2 border-indigo-600 hover:bg-indigo-100 transition duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="px-6 py-2 sm:px-8 sm:py-3 bg-white bg-gradient-to-b from-yellow-400 to-violet-700 font-semibold rounded-full border-2 border-indigo-600 hover:bg-indigo-100 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src="src/assets/pngwing.com (3).png"
            alt="Job seeker and recruiter illustration"
            className="max-w-full h-auto object-contain rounded-lg"
          />
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-indigo-900 py-8">Our Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300 shadow-lg">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg text-center">{metric.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
                {metric.value}{metric.unit}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(metric.value / metric.max) * 100}%` }}></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>




    <div className="bg-card py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col lg:flex-row mb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
      <div className="flex-1 flex items-center justify-center">
          <img
            src="src/assets/pngwing.com (4).png"
            alt="Job seeker and recruiter illustration"
            className="max-w-full h-auto object-contain rounded-lg"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16 mb-8 lg:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-indigo-900 mb-4 sm:mb-6">
            Find Your Dream Job or Perfect Hire!
          </h1>

          <p className="text-sm sm:text-base md:text-lg primary-foreground mb-6 sm:mb-8 max-w-2xl">
            Connecting talented professionals with top companies across the globe.
            Whether you're a job seeker looking for the right opportunity or a
            recruiter searching for the perfect fit, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="px-6 py-2 sm:px-8 sm:py-3 bg-white bg-gradient-to-b from-yellow-400 to-violet-700 font-semibold rounded-full border-2 border-indigo-600 hover:bg-indigo-100 transition duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="px-6 py-2 sm:px-8 sm:py-3 bg-white bg-gradient-to-b from-yellow-400 to-violet-700 font-semibold rounded-full border-2 border-indigo-600 hover:bg-indigo-100 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>
        
      </div>
    </div>
    </>
  );
};

export default MetricsGauges;