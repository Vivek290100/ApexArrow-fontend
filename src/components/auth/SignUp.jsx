import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {USER_API_ENDPOINT} from '@/utils/constant'
import { Loader } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import store from "@/redux/store";
import { setLoading } from "@/redux/aurhSlice";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "student",
    profilePhoto: null,
  });

  const {loading} = useSelector(store=>store.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePhoto: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    const data = new FormData()
    data.append("fullName",formData.fullName)
    data.append("email",formData.email)
    data.append("password",formData.password)
    data.append("phoneNumber",formData.phoneNumber)
    data.append("role",formData.role)
    if(formData.profilePhoto){
      data.append("profilePhoto",formData.profilePhoto)
    }
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/register`,data,{
        headers:{
          'Content-Type': 'multipart/form-data'
        },
        withCredentials:true
      })
      if(res.data.success){
        navigate('/login')
        toast.success(res.data.message)
      }
    }catch(error) {
      console.log(error);
      toast.error(error.response.data.message)
    }finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="flex flex-col lg:flex-row py-9 max-h-screen bg-card">
      {/* <h1>signup</h1> */}

      <div className="lg:w-1/2 flex items-center justify-center p-8 bg-card">
        <img
          src="src\assets\image-from-rawpixel-id-15502364-png.png"
          alt="3D rendering of cartoon-like man working on computer"
          className="w-full h-auto max-w-2xl rounded-full "
        />
      </div>

      <div className="lg:w-1/2 flex flex-col justify-center p-8 mt-8 bg-card">
        <div className="max-w-md w-full mx-auto ">

          <form className=" space-y-6 bg-card" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-400"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-400"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-400"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                required
                className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handleChange}
              />
            </div>

            <div>
          <label className="block text-sm font-medium text-gray-400">
            Role
          </label>
          <div className="mt-1 justify-evenly flex">
            <div className="flex items-center">
              <input
                id="student"
                name="role"
                type="radio"
                value="student"
                className="h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500"
                onChange={handleChange}
              />
              <label htmlFor="student" className="ml-3 block text-sm font-medium text-gray-400">
                Student
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="recruiter"
                name="role"
                type="radio"
                value="recruiter"
                className="h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500"
                onChange={handleChange}
              />
              <label htmlFor="recruiter" className="ml-3 block text-sm font-medium text-gray-400">
                Recruiter
              </label>
            </div>
          </div>
        </div>

            <div>
              <label className="block text-sm font-medium text-gray-400">
                Profile Photo
              </label>
              <div className="mt-1 flex justify-center px-6 pt-1 pb-3 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-19 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-400">
                    <label
                      htmlFor="profilePhoto"
                      className="py-1 px-2 relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload</span>
                      <input
                        id="profilePhoto"
                        name="profilePhoto"
                        type="file"
                        className="sr-only"
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="pl-1">your photo</p>
                  </div>
                  {/* <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p> */}
                </div>
              </div>
            </div>

            <div>
            {
                loading? (
                  <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-yellow-400 to-violet-700  hover:bg-gradient-to-r"><Loader className="mr-2 h-5 w-5 animate-spin">please wait</Loader></button>
                ) : (

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-yellow-400 to-violet-700  hover:bg-gradient-to-r"
              >
                Signup
              </button>
                )}
              <span className="text-sm text-violet-500"><Link to='/login'>already have an account? Login</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// {
  /* <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                Bio
              </label>
              <div className="mt-1">
                <textarea
                  id="bio"
                  name="bio"
                  rows="3"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                Skills (comma separated)
              </label>
              <div className="mt-1">
                <input
                  id="skills"
                  name="skills"
                  type="text"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Resume
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="resume"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="resume" name="resume" type="file" className="sr-only" onChange={handleFileChange} />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PDF up to 10MB</p>
                </div>
              </div>
            </div> */
// }
