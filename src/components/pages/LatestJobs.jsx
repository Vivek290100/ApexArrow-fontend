import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {CiBookmark} from 'react-icons/ci'

const LatestJobs = ({ company, logo, title, description, positions, type, salary, daysAgo }) => {
  return (
    <Card className=" hover:shadow-lg transition-shadow duration-300 ">
      <CardHeader className="flex flex-row justify-between items-start">
        <div className="flex items-center">
          <img src={logo} alt={company} className="w-10 h-10 mr-3 rounded-full" />
          <div>
            <CardTitle className="text-lg">{company}</CardTitle>
            <p className="text-sm text-gray-500">India</p>
          </div>
        </div>
        <div className="text-sm text-gray-500">{daysAgo}</div>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold mb-2 text-xl">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap gap-2 text-sm mb-2">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{positions} positions</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">{type}</span>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">{salary}</span>
          </div>
          <div className="space-x-2 mt-2 sm:mt-0">
            <Button variant="outline" size="sm">Details</Button>
            <Button variant="secondary" size="sm"><CiBookmark/></Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Job = () => {
  const jobs = [
    {
      company: 'Google',
      logo: 'src/assets/companyimgs/google.png',
      title: 'FullStack Developer',
      description: 'I need a senior Fullstack developer who can write efficient code and manage both frontend and backend.',
      positions: 2,
      type: 'Full Time',
      salary: '45LPA',
      daysAgo: 'Today'
    },
    {
      company: 'Google',
      logo: 'src/assets/companyimgs/google.png',
      title: 'FullStack Developer',
      description: 'I need a senior Fullstack developer who can write efficient code and manage both frontend and backend.',
      positions: 2,
      type: 'Full Time',
      salary: '45LPA',
      daysAgo: 'Today'
    },
    {
      company: 'Google',
      logo: 'src/assets/companyimgs/google.png',
      title: 'FullStack Developer',
      description: 'I need a senior Fullstack developer who can write efficient code and manage both frontend and backend.',
      positions: 2,
      type: 'Full Time',
      salary: '45LPA',
      daysAgo: 'Today'
    },
    {
      company: 'Google',
      logo: 'src/assets/companyimgs/google.png',
      title: 'FullStack Developer',
      description: 'I need a senior Fullstack developer who can write efficient code and manage both frontend and backend.',
      positions: 2,
      type: 'Full Time',
      salary: '45LPA',
      daysAgo: 'Today'
    },
    {
      company: 'Google',
      logo: 'src/assets/companyimgs/google.png',
      title: 'FullStack Developer',
      description: 'I need a senior Fullstack developer who can write efficient code and manage both frontend and backend.',
      positions: 2,
      type: 'Full Time',
      salary: '45LPA',
      daysAgo: 'Today'
    },
    {
      company: 'Google',
      logo: 'src/assets/companyimgs/google.png',
      title: 'FullStack Developer',
      description: 'I need a senior Fullstack developer who can write efficient code and manage both frontend and backend.',
      positions: 2,
      type: 'Full Time',
      salary: '45LPA',
      daysAgo: 'Today'
    },
    {
      company: 'Microsoft',
      logo: 'src/assets/companyimgs/microsoft.png',
      title: 'Backend Developer',
      description: 'Looking for a backend developer experienced in microservices architecture and cloud computing.',
      positions: 1,
      type: 'Full Time',
      salary: '30LPA',
      daysAgo: '2 days ago'
    },
    {
      company: 'BMW',
      logo: 'src/assets/companyimgs/bmw.png',
      title: 'Backend Developer',
      description: 'Looking for a backend developer experienced in microservices architecture and cloud computing.',
      positions: 1,
      type: 'Full Time',
      salary: '30LPA',
      daysAgo: '2 days ago'
    },
    {
      company: 'Microsoft',
      logo: 'src/assets/companyimgs/tata.png',
      title: 'Backend Developer',
      description: 'Looking for a backend developer experienced in microservices architecture and cloud computing.',
      positions: 1,
      type: 'Full Time',
      salary: '30LPA',
      daysAgo: '2 days ago'
    },
    {
      company: 'Microsoft',
      logo: 'src/assets/companyimgs/tata.png',
      title: 'Backend Developer',
      description: 'Looking for a backend developer experienced in microservices architecture and cloud computing.',
      positions: 1,
      type: 'Full Time',
      salary: '30LPA',
      daysAgo: '2 days ago'
    },
    
    // ... (add more job listings as needed)
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-32">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 text-indigo-900 py-6 sm:py-8 lg:py-12">
        Latest jobs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {jobs.slice(0, 8).map((job, index) => (
          <LatestJobs key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default Job;