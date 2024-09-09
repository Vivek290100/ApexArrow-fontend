import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { X } from 'lucide-react';

const Filter = ({ toggleSidebar }) => {
  const filterCategories = [
    { title: 'Location', options: ['Delhi NCR', 'Bangalore', 'Hyderabad', 'Pune', 'Chennai', 'Mumbai'] },
    { title: 'Industry', options: ['Frontend Developer', 'Backend Developer', 'Data Science', 'FullStack Developer', 'Nextjs Developer'] },
    { title: 'Salary', options: ['0 - 40k', '42k to 1lakh', '1lakh to 5lakh', '51akh to 1crore'] }
  ];

  return (
    <div className="bg-card p-4 rounded-lg  h-auto overflow-y-auto ">
      <div className="flex justify-between items-center md:hidden mb-4">
        <h2 className="text-lg font-semibold">Filter Jobs</h2>
        <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>
      {filterCategories.map((category, index) => (
        <div key={index} className="mb-6">
          <h3 className="font-medium mb-2">{category.title}</h3>
          {category.options.map((option) => (
            <div key={option} className="flex items-center mb-2">
              <Checkbox id={option} />
              <label htmlFor={option} className="ml-2 text-sm">{option}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Filter;