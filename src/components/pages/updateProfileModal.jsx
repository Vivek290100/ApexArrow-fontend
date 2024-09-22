import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogOverlay } from "@radix-ui/react-dialog";
import { User, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/constant";
import { setUser } from "@/redux/aurhSlice";

const UpdateProfileModal = ({ open, setOpen, profile, onUpdateProfile }) => {

  const [loading, setLoading] = useState(false);
  const {user} = useSelector((store)=>store.auth)
  // console.log("user", user);
  


  const [formData, setFormData] = useState({
    fullName: user?.fullName,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.map(skill => skill),
    resume: user?.profile?.resume
  });
  const dispatch = useDispatch()
  

  // useEffect(() => {
  //   if (profile) {
  //     setFormData({
  //       fullName: profile.name || "",
  //       email: profile.email || "",
  //       phone: profile.mobile || "",
  //       bio: profile.description || "",
  //       skills: profile.skillsets ? profile.skillsets.join(", ") : "",
  //       resume: null // Reset file input on open
  //     });
  //   }
  // }, [profile, open]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'file' ? e.target.files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateProfile = new FormData()
    updateProfile.append("fullName",formData.fullName)
    updateProfile.append("email",formData.email)
    updateProfile.append("phoneNumber",formData.phoneNumber)
    updateProfile.append("bio",formData.bio)
    updateProfile.append("skills",formData.skills)
    if(formData.resume) {
      updateProfile.append("file",formData.resume)
    }
    try {
      const res = await axios.put(`${USER_API_ENDPOINT}/updateProfile`,updateProfile,{
        headers: {
          'Content-Type': 'multipart/form-data',

        },
        withCredentials: true
      })
      if(res.data.success){
        dispatch(setUser(res.data.user))
        toast.success(res.data.message)
      }
    }catch(e) {
      console.log("Error updating profile", e);
      toast.error("Error updating profile")
    }
    setOpen(false)
    console.log("formData",formData);
    
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogOverlay className="fixed inset-0 bg-black bg-opacity-80 transition-opacity" />
      <DialogContent className="fixed bg-card  rounded-lg shadow-xl w-[95%] max-w-md max-h-[90vh] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 border border-gray-300 dark:border-gray-700 mt-10">
      <DialogTitle className="text-xl font-semibold mb-4 pr-8">
          Edit Profile
        </DialogTitle>
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 p-1 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <X className="h-5 w-5" />
        </button>
        <form 
        onSubmit={handleSubmit} 
        className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-1.5 text-sm rounded-md border border-gray-300 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500 bg-card"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-1.5 text-sm rounded-md border border-gray-300 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500 bg-card"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-1.5 text-sm rounded-md border border-gray-300 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500 bg-card"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows="2"
              className="w-full px-3 py-1.5 text-sm rounded-md border border-gray-300 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500 bg-card"
              placeholder="Tell us about yourself"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Skills</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full px-3 py-1.5 text-sm rounded-md border border-gray-300 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500 bg-card"
              placeholder="e.g. React, Node.js, MongoDB"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Resume</label>
            <input
              type="file"
              name="resume"
              // accept="application/pdf"
              onChange={handleChange}
              className="w-full px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-700 rounded-md cursor-pointer bg-card"
            />
          </div>

          <div className="flex justify-end pt-2">
          {
                loading? (
                  <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-yellow-400 to-violet-700  hover:bg-gradient-to-r"><Loader className="mr-2 h-5 w-5 animate-spin"></Loader></button>
                ) : (

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-yellow-400 to-violet-700  hover:bg-gradient-to-r"
              >
                Save Changes
              </button>
                )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfileModal;