import React, { useState } from "react";
import { User, Mail, Phone, Briefcase, FileText, MapPin } from "lucide-react";
import { FaEdit } from "react-icons/fa";

const ProfilePage = () => {
  const [open, setOpen] = useState(false);

  const profile = {
    name: "John Doe",
    description:
      "Experienced software developer with a passion for creating efficient and scalable applications.",
    email: "john.doe@example.com",
    mobile: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    skillsets: ["React", "Node.js", "Python", "SQL", "AWS"],
    resume: "link-to-resume.pdf",
    jobRole: "Senior Software Engineer",
  };

  const appliedJobs = [
    {
      date: "2024-09-15",
      jobRole: "Senior Frontend Developer",
      company: "Tech Co",
      status: "Under Review",
    },
    {
      date: "2024-09-10",
      jobRole: "Full Stack Engineer",
      company: "Startup Inc",
      status: "Interviewed",
    },
    {
      date: "2024-09-05",
      jobRole: "React Developer",
      company: "Web Solutions",
      status: "Rejected",
    },
  ];

  return (
    <div className="container mx-auto p-6 lg:p-12 py-24">
      <div className="bg-card overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 bg-card p-6 lg:p-8 flex flex-col items-center justify-center">
            <img
              src="/src/assets/image.png"
              alt={`Profile of ${profile.name}`}
              className="rounded-full w-32 h-32 lg:w-48 lg:h-48 object-cover border-4 border-white shadow-lg"
            />
            <div className="flex flex-col items-center mt-4">
              <h1 className="text-xl lg:text-2xl font-bold text-center">
                {profile.name}
              </h1>
              <div className="flex items-center mt-2 text-blue-500 cursor-pointer">
                <span>Edit Profile</span>
                <FaEdit onClick={()=>setOpen(true)} className="w-5 h-5 ml-2" />
              </div>
            </div>
            <p className="text-gray-600 text-center mt-2">{profile.jobRole}</p>
            <div className="flex items-center mt-2 text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{profile.location}</span>
            </div>
          </div>

          <div className="lg:w-2/3 p-6 lg:p-8">
            <h2 className="text-lg lg:text-xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-600 mb-6">{profile.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gray-500" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-gray-500" />
                <span>{profile.mobile}</span>
              </div>
              <div className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-gray-500" />
                <a
                  href={profile.resume}
                  className="text-blue-500 hover:underline"
                >
                  View Resume
                </a>
              </div>
            </div>

            <h2 className="text-lg lg:text-xl font-semibold mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {profile.skillsets.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs lg:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl lg:text-2xl font-bold mb-4 px-16">
          Applied Jobs
        </h2>
        <div className="overflow-x-auto">
          <div className="max-w-6xl lg:max-w-7xl mx-auto">
            {" "}
            {/* Adjusted width here */}
            <table className="w-full bg-card shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-card">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Job Role
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {appliedJobs.map((job, index) => (
                  <tr key={index}>
                    <td className="px-4 py-4 text-sm lg:text-base whitespace-nowrap">
                      {job.date}
                    </td>
                    <td className="px-4 py-4 text-sm lg:text-base whitespace-nowrap">
                      {job.jobRole}
                    </td>
                    <td className="px-4 py-4 text-sm lg:text-base whitespace-nowrap">
                      {job.company}
                    </td>
                    <td className="px-4 py-4 text-sm lg:text-base whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs lg:text-sm leading-5 font-semibold rounded-full ${
                          job.status === "Under Review"
                            ? "bg-yellow-100 text-yellow-800"
                            : job.status === "Interviewed"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <updateProfileModal open={open} setOpen={setOpen}/>
    </div>
  );
};

export default ProfilePage;
