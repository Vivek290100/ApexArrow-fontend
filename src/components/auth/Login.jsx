import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: 'student',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/login`,{
        header:{
          'Content-Type': 'application/json'
        },
        withCredentials:true
      })
      if(res.data.success){
        navigate('/')
        Toaster.success(res.data.message)
      }
    }catch(e) {
      console.error(e);
      // Handle form submission errors here
    }
  };

  return (
    <div className="flex flex-col lg:flex-row max-h-screen bg-card py-9">
      {/* <h1>login</h1> */}
      <div className="lg:w-1/2 flex items-center justify-center p-8 bg-card">
        <img
          src="src\assets\image-from-rawpixel-id-12363052-png.png"
          alt="3D rendering of cartoon-like man working on computer"
          className="w-full h-full max-w-2xl rounded-lg overflow-hidden"
        />
      </div>

      <div className="lg:w-1/2 flex flex-col justify-center p-8 bg-card">
        <div className="max-w-md w-full mx-auto">
          {/* <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2> */}

          <form className=" space-y-6 " onSubmit={handleSubmit}>
            

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-400">
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
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-yellow-400 to-violet-700  hover:bg-gradient-to-r"
              >
                Login
              </button>
              <span className="text-sm text-violet-500"><Link to='/signup'>don't have an account? Signup</Link></span>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}