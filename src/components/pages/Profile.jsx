import React, { useState } from "react";
import { User, Mail, Phone, Briefcase, FileText, MapPin } from "lucide-react";
import { FaEdit } from "react-icons/fa";
import UpdateProfileModal from './UpdateProfileModal'
import { useSelector } from "react-redux";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ProfilePage = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

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

  const getStatusColor = (status) => {
    switch (status) {
      case "Under Review":
        return "bg-yellow-100 text-yellow-800";
      case "Interviewed":
        return "bg-green-100 text-green-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6 mt-14">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 flex flex-col items-center">
              <Avatar className="w-32 h-32 mb-4">
                <AvatarImage src="/src/assets/image.png" alt={`Profile of ${user.fullName}`} />
                <AvatarFallback>{user.fullName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h1 className="text-2xl font-bold text-center mb-2">{user.fullName}</h1>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => setOpen(true)}
              >
                <FaEdit className="w-4 h-4" />
                Edit Profile
              </Button>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-xl font-semibold mb-3">About Me</h2>
              <p className="text-gray-600 mb-4">{user.profile.bio}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <span>{user.phoneNumber}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-gray-500" />
                  <a href="#" className="text-blue-500 hover:underline">
                    View Resume
                  </a>
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {user.profile.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold">Applied Jobs</h2>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Job Role</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appliedJobs.map((job, index) => (
                <TableRow key={index}>
                  <TableCell>{job.date}</TableCell>
                  <TableCell>{job.jobRole}</TableCell>
                  <TableCell>{job.company}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(job.status)}>
                      {job.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <UpdateProfileModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default ProfilePage;