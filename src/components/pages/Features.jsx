import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeaturePage = () => {
  const features = [
    {
      title: "Smart Job Matching",
      description: "Our AI-powered algorithm matches your skills and preferences with the perfect job opportunities.",
      icon: "🎯"
    },
    {
      title: "Career Growth Tools",
      description: "Access resources and tools to help you advance in your career path.",
      icon: "📈"
    },
    {
      title: "Company Insights",
      description: "Get detailed information about potential employers to make informed decisions.",
      icon: "🔍"
    },
    {
      title: "Interview Preparation",
      description: "Prepare for interviews with our comprehensive guides and mock interview sessions.",
      icon: "🗣️"
    }
  ];

  return (
    <div className="bg-card px-8 py-14">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-3xl mr-2">{feature.icon}</span>
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-violet-700 text-white font-semibold rounded-full hover:opacity-90 transition duration-300">
          Explore All Features
        </Button>
      </div>
    </div>
  );
};

export default FeaturePage;