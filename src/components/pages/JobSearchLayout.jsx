import React, { useState } from "react";
import Filter from "./Filter";
import Job from "./Job";
import Navbar from "../common/Navbar";
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const JobSearchLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div>
{/* <Navbar /> */}
    <div className="bg-card-100 min-h-screen">
      {/* <Navbar /> */}
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="md:hidden my-4">
          <Button onClick={toggleSidebar} className="w-full flex justify-between items-center">
            <span>Filter Jobs</span>
            <Menu size={24} />
          </Button>
        </div>
        <div className="flex flex-col md:flex-row relative">
          <aside className={`md:w-64 lg:w-72 flex-shrink-0 ${isSidebarOpen ? 'fixed inset-0 z-50 bg-card-100 overflow-y-auto' : 'hidden'} md:block md:sticky md:top-20 md:h-[calc(100vh-5rem)]`}>
            <Filter toggleSidebar={toggleSidebar} />
          </aside>
          <main className="flex-1 md:ml-4">
            <Job />
          </main>
        </div>
      </div>
    </div>
    </div>

  );
};

export default JobSearchLayout;