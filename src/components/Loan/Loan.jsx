import React from 'react';
import './Loan.css'; // Custom CSS file for styling
import loanImage from "../../assets/loanimage.webp"; 
import loanreq from "../../assets/loan/loanrequest.webp";
import loanapp from "../../assets/loan/loanapproval.webp";

const loanFeatures = [
  {
    id: 1,
    icon: loanreq,
    title: 'Flexible Loan and Advance Grants:',
    description: 'Easily approve loans or advances based on employee salaries.',
  },
  {
    id: 2,
    icon: loanapp,
    title: 'Quick Approval and Repayment:',
    description: 'Loan approvals with monthly deductions or flexible repayment plans.',
  },
];

const Loan = () => {
  return (
    <div className="loan-card bg-custom-bg mt-10 mb-10 mx-auto">
      {/* Use h1 for main heading */}
      <h1 className="text-xl font-bold text-customPurple text-center py-10 px-10">
        Loan Management System
      </h1>

      <div className="loan-container flex flex-col md:flex-row gap-8">
        {/* Left Section: Features */}
        <div className="features-section flex flex-col gap-6">
          {loanFeatures.map((feature) => (
            <div key={feature.id} className="feature-item flex items-start gap-3">
              <div className="feature-icon flex-shrink-0">
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  width="48" 
                  height="48" 
                  loading="lazy"
                  className="feature-icon"
                />
              </div>
              <div className="feature-content flex flex-col justify-center">
                <h3 className="text-sm">{feature.title}</h3>
                <p className="text-xs leading-6">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: Image */}
        <div className="image-section flex justify-center">
          <img 
            src={loanImage} 
            alt="Easy Pagar Loan Management Dashboard" 
            width="600" 
            height="450" 
         
            className="rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Loan;
