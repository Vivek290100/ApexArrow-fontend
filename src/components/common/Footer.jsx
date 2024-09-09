import React from 'react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card text-secondary-foreground py-12 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
          <div>
            <h3 className="text-2xl font-bold mb-4">JobConnect</h3>
            <p className="mb-4">Connecting talents with opportunities worldwide.</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <i className="fab fa-facebook-f"></i>
              </Button>
              <Button variant="ghost" size="icon">
                <i className="fab fa-twitter"></i>
              </Button>
              <Button variant="ghost" size="icon">
                <i className="fab fa-linkedin-in"></i>
              </Button>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">For Job Seekers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Browse Jobs</a></li>
              <li><a href="#" className="hover:underline">Career Advice</a></li>
              <li><a href="#" className="hover:underline">Resume Builder</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Post a Job</a></li>
              <li><a href="#" className="hover:underline">Talent Search</a></li>
              <li><a href="#" className="hover:underline">Recruiting Solutions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p>1234 Job Street, Employment City, 56789</p>
            <p>Email: info@jobconnect.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-2 pt-2 border-t border-primary-700 text-center">
          <p>&copy; 2024 JobConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;