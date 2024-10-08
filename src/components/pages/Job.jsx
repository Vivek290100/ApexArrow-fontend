import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {CiBookmark} from 'react-icons/ci'
import { useNavigate } from 'react-router-dom';

const JobCard = ({ company, logo, title, description, positions, type, salary, daysAgo }) => {
  const navigate = useNavigate()
  const jobId = "7346go8yg34873g8o47gr8p39"
  return (
    <Card className=" hover:shadow-lg transition-shadow duration-300">
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
            <Button onClick = {()=>navigate(`/description/${jobId}`)} variant="outline" size="sm">Details</Button>
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

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {jobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
};

export default Job;