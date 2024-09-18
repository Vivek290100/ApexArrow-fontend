import React from 'react';
import { MapPin, Clock, Calendar, Users, Bookmark } from 'lucide-react';

const JobDescriptionPage = () => {
  return (
    <div className="bg-card text-primary p-4 rounded-lg max-w-7xl mx-auto mt-24 ">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img src="/src/assets/image.png" alt="Company Logo" className="w-12 h-12 rounded-full mr-3" />
          <div>
            <h1 className="text-xl font-bold">Frontend Developer</h1>
            <p className="text-gray-400 text-sm">TechCorp Solutions</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-white ">
          <Bookmark size={20} />
          <span className="sr-only">Save</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
        <div className="flex items-center text-gray-500">
          <MapPin size={16} className="mr-1" />
          <span>Hyderabad</span>
        </div>
        <div className="flex items-center text-gray-500">
          <Clock size={16} className="mr-1" />
          <span>24LPA</span>
        </div>
        <div className="flex items-center text-gray-500">
          <Calendar size={16} className="mr-1" />
          <span>2 days ago </span>
        </div>
        <div className="flex items-center text-gray-500">
          <Users size={16} className="mr-1" />
          <span>4 applicants</span>
        </div>
      </div>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-1">Job Description</h2>
        <p className="text-foregroundtext-sm">
          We are seeking a talented Frontend Developer to join our dynamic team. As a Frontend Developer, Key Responsibilities: - Develop new user-facing features using React.js - Build reusable components and front-end libraries for future use - Translate designs and wireframes into high-quality code - Optimize components for maximum performance across a vast array of web-capable devices and browsers - Collaborate with back-end developers and web designers to improve usability
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-1">Required Skills</h2>
        <div className="flex flex-wrap gap-1 text-sm">
          {['React', 'JavaScript', 'HTML', 'CSS', 'Git'].map((skill) => (
            <span key={skill} className="bg-blue-100 text-violet-900 px-2 py-0.5 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-1">Benefits</h2>
        <ul className="list-disc list-inside text-gray-500 text-sm">
          <li>Flexible work hours</li>
          <li>Health insurance</li>
          <li>Professional development</li>
        </ul>
      </section>

      <div className="flex items-center gap-8 mt-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="bg-blue-100 text-violet-900 px-2 py-0.5 rounded-full">Part Time</span>
          <span className="text-foreground">2 yrs experience</span>
        </div>
        <button className="bg-gradient-to-r from-violet-900 to-violet-700  text-white font-bold py-1 px-3 rounded hover:bg-yellow-500">
          Apply Now
        </button>
        {/* <button className="text-gray-400 hover:text-white ">
          <Bookmark size={20} />
          <span className="sr-only">Save</span>
        </button> */}
      </div>
    </div>
  );
};

export default JobDescriptionPage;
