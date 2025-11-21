import React from "react";
import "./Leave.css"; // Make sure to create this CSS file
import leaveImage from "../../assets/leaveimage.webp"; // Replace with your actual image path

const Leave = () => {
  const features = [
    "Users can submit leave requests, with status updates as Pending or Approved.",
    "Choose leave types: Paid Leave, Unpaid Leave, and Sick Leave.",
    "Sends automated notifications about leave request status.",
    "Tracks and stores a history of all leave requests for users.",
  ];

  return (
    <div className="container flex flex-col items-center justify-start">
      {/* Main Heading */}
      <h1 className="text-xl font-bold text-customPurple">
        Attendance and Leave Management
      </h1>

      {/* Top Features */}
      <div className="flex justify-between w-full mt-6">
        <div className="features top-left text-xs leading-6 sm:leading-10 bg-custom-bg rounded-xl">
          {features[0]}
        </div>
        <div className="features top-right text-xs leading-6 sm:leading-10 bg-custom-bg rounded-xl">
          {features[1]}
        </div>
      </div>

      {/* Main Image */}
      <img
        src={leaveImage}
        alt="Easy Pagar Leave Management"
        width={450}  
        height={450}  
         loading="lazy"
        className="mobile-image w-[450px] h-[450px] my-10"
      />

      {/* Bottom Features */}
      <div className="flex justify-between w-full">
        <div className="features bottom-left text-xs leading-6 sm:leading-10 bg-custom-bg rounded-xl">
          {features[2]}
        </div>
        <div className="features bottom-right text-xs leading-6 sm:leading-10 bg-custom-bg rounded-xl">
          {features[3]}
        </div>
      </div>
    </div>
  );
};

export default Leave;
