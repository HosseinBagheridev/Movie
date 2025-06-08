
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = ({
    mode = "signup",
    showUsername = true,
    showConfirmPassword = true,
    
}) => {
    const buttonText = mode === "login" ? "log in to your MyFlix account" : "create your MyFlix account";
    const title = mode === "login" ? "Login" : "Create account";
    const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    

  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.email || !formData.password) {
    return;
  }

  if (mode === "signup") {
    if (!formData.confirmPassword || formData.password !== formData.confirmPassword) {
      setPasswordMatchError(true);
      return;
    }
  }

  setPasswordMatchError(false);
  navigate("/");
};


  
  return (
    <div>
        <div className='flex items-center justify-center h-screen mx-5'>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center bg-gray-300 border-amber-100 border-1 rounded-lg w-3/4 md:w-1/2 lg:w-1/3 xl:w-2/5 p-5'>
            <p className='text-2xl mb-5'>{title}</p>
            <div className="flex flex-col w-full mb-4 px-3 ">
                {showUsername && (
                    <>
                    <label htmlFor="text" className="mb-1 text-sm font-medium text-black">
                    Your name
                </label>
                <input type="text" id="username"  value={formData.username} onChange={handleChange} name="username" required   className="p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="First and last name"/>
                    </>
                
                )}
                </div>
            <div className="flex flex-col mb-4 w-full px-3 ">
                <label htmlFor="email" className="mb-1 text-sm font-medium text-black">
                    Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required  autoComplete="email" className="p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex flex-col mb-4 w-full px-3">
                <label htmlFor="Password" className="mb-1 text-sm font-medium text-black">
                    Password
                </label>
                <input type="Password" id="Password" name="password" value={formData.password} onChange={handleChange} minLength={8} required  className="p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="at least 8 characters "/>
            </div>
            {showConfirmPassword && (
                <div className="flex flex-col mb-4 w-full px-3">

                <label htmlFor="password" className="mb-1 text-sm font-medium text-black">
                    Re-enter password
                </label>
                <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required  className={`w-full p-2 border rounded-md ${passwordMatchError ? "border-red-500" : "border-black"} focus:outline-none focus:ring-2 ${passwordMatchError ? "focus:ring-red-500" : "focus:ring-blue-500"}`} placeholder=""/>
                </div>
        )}
                
            <button type="submit" className='bg-slate-700 w-full py-2 rounded-3xl'>{buttonText}</button>
        </form>
        </div>
            
    </div>
)
}