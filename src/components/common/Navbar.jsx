import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { IoIosLogOut } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { FiMenu, FiSun, FiMoon } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = true; // Replace with actual user authentication logic
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-card text-card-foreground fixed w-full z-50 py-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl text-yellow-400 font-serif cursor-pointer relative">
              <span className="text-yellow-400 text-shadow-glow relative z-10">
                Apex
              </span>{" "}
              <span className="text-violet-700 relative z-10 text-shadow-glow">
                Arrow
              </span>
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-400 via-pink-500 to-yellow-400 opacity-20 rounded-lg blur-sm animate-pulse"></span>
            </h1>
          </div>

          {/* <div className="hidden md:block flex-grow max-w-xl mx-4">
            <div className="relative w-full">
              <input
                type="text"
                className="w-full px-4 py-2 border text-black rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Search for jobs, companies, or locations..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="absolute top-2 right-4 w-6 h-6 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10a4 4 0 118 0 4 4 0 01-8 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35"
                />
              </svg>
            </div>
          </div> */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-4">
              <a
                href="#"
                className="text-violet-500  hover:bg-gradient-to-b from-yellow-400 to-violet-700 hover:text-white px-4 py-2 rounded-3xl text-sm font-serif"
              >
                Home
              </a>
              <a
                href="#"
                className="text-violet-500  hover:bg-gradient-to-b from-yellow-400 to-violet-700 hover:text-white px-4 py-2 rounded-3xl text-sm font-serif"
              >
                Jobs
              </a>
              <a
                href="#"
                className="text-violet-500  hover:bg-gradient-to-b from-yellow-400 to-violet-700 hover:text-white px-4 py-2 rounded-3xl text-sm font-serif"
              >
                About
              </a>
              <a
                href="#"
                className="text-violet-500  hover:bg-gradient-to-b from-yellow-400 to-violet-700 hover:text-white px-4 py-2 rounded-3xl text-sm font-serif"
              >
                Contact
              </a>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground"
            >
              {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
            {!user ? (
              <div className="flex gap-3">
                <Link to="login">
                  <Button className="w-28 bg-gradient-to-b from-yellow-400 to-violet-700">
                    Login
                  </Button>
                </Link>
                <Link to="signup">
                  <Button className="w-28 bg-gradient-to-t from-yellow-400 to-violet-700">
                    SignUp
                  </Button>
                </Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="/src/assets/image.png" />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-72 rounded-lg shadow-lg border p-4 card-foreground mt-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 rounded-full cursor-pointer">
                      <AvatarImage src="/src/assets/image.png" />
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-lg primary">
                        Full Stack Developer
                      </h4>
                      <p className="text-sm secondary-foreground">
                        Software Developer
                      </p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center gap-1">
                      <CiUser size="27px" className="mt-[3px] ml-[58px]" />
                      <Button variant="Link">View Profile</Button>
                    </div>
                    <div className="flex items-center gap-1">
                      <IoIosLogOut size="25px" className="mt-[3px] ml-[60px]" />
                      <Button variant="Link">Logout</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground mr-2"
            >
              {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-violet-700 hover:text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <IoMdClose className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-violet-700 text-shadow-glow hover:bg-violet-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-violet-700 text-shadow-glow hover:bg-violet-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Jobs
            </a>
            <a
              href="#"
              className="text-violet-700 text-shadow-glow hover:bg-violet-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-violet-700 text-shadow-glow hover:bg-violet-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
          {/* <div className="px-2 pt-2 pb-3">
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Search for jobs, companies, or locations..."
            />
          </div> */}
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              {!user ? (
                <div className="flex flex-col items-center gap-2">
                  <Link to="login">
                    <Button className="w-28 bg-gradient-to-b from-yellow-400 to-violet-700">
                      Login
                    </Button>
                  </Link>
                  <Link to="signup">
                    <Button className="w-28 bg-gradient-to-t from-yellow-400 to-violet-700">
                      SignUp
                    </Button>
                  </Link>
                </div>
              ) : (
                <Popover>
                  <PopoverTrigger asChild>
                    <Avatar className="cursor-pointer">
                      <AvatarImage src="/src/assets/image.png" />
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent className="w-72 rounded-lg shadow-lg border p-4 card-foreground mt-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12 rounded-full cursor-pointer">
                        <AvatarImage src="/src/assets/image.png" />
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-lg primary">
                          Full Stack Developer
                        </h4>
                        <p className="text-sm secondary-foreground">
                          Software Developer
                        </p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center gap-1">
                        <CiUser size="27px" className="mt-[3px] ml-[58px]" />
                        <Button variant="Link">View Profile</Button>
                      </div>
                      <div className="flex items-center gap-1">
                        <IoIosLogOut
                          size="25px"
                          className="mt-[3px] ml-[60px]"
                        />
                        <Button variant="Link">Logout</Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
